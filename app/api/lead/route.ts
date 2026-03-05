import { NextResponse } from "next/server";
import { storeEngagementEvent, storeLeadRecord } from "@/lib/analyticsStore";

interface LeadPayload {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  quantity: number;
  message: string;
  contactMethod: "WhatsApp" | "Phone" | "Email";
}

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const submissionMap = new Map<string, { count: number; firstRequestTimestamp: number }>();

const sanitize = (value: unknown) => (typeof value === "string" ? value.replace(/[<>]/g, "").trim() : value);

const isRateLimited = (ip: string) => {
  const now = Date.now();
  const entry = submissionMap.get(ip);

  if (!entry) {
    submissionMap.set(ip, { count: 1, firstRequestTimestamp: now });
    return false;
  }

  if (now - entry.firstRequestTimestamp > RATE_LIMIT_WINDOW_MS) {
    submissionMap.set(ip, { count: 1, firstRequestTimestamp: now });
    return false;
  }

  entry.count += 1;
  submissionMap.set(ip, entry);
  return entry.count > RATE_LIMIT_MAX;
};

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ success: false, error: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  let payload: Partial<LeadPayload>;

  try {
    payload = await request.json();
  } catch (error) {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
  }

  const sanitizedPayload: LeadPayload = {
    name: String(sanitize(payload.name ?? "")),
    phone: String(sanitize(payload.phone ?? "")),
    email: String(sanitize(payload.email ?? "")),
    eventType: String(sanitize(payload.eventType ?? "")),
    quantity: Math.max(0, Number(payload.quantity ?? 0)),
    message: String(sanitize(payload.message ?? "")),
    contactMethod: (payload.contactMethod as LeadPayload["contactMethod"]) ?? "WhatsApp"
  };

  console.log("[HydraTag Lead Queue]", {
    ...sanitizedPayload,
    ip,
    receivedAt: new Date().toISOString(),
    status: "pending-persistence"
  });

  try {
    await Promise.all([
      storeLeadRecord({ ...sanitizedPayload, pagePath: request.headers.get("referer") ?? undefined }),
      storeEngagementEvent({
        eventId: `lead-${Date.now()}`,
        category: "lead",
        action: "form_submitted",
        label: sanitizedPayload.eventType,
        value: sanitizedPayload.quantity,
        type: "click",
        pagePath: request.headers.get("referer") ?? undefined,
        userAgent: request.headers.get("user-agent")
      })
    ]);
  } catch (error) {
    console.warn("[HydraTag Lead Queue] persistence fallback", error);
  }

  return NextResponse.json({ success: true });
}

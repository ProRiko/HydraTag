import { NextResponse } from "next/server";
import { storeEngagementEvent } from "@/lib/analyticsStore";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch (error) {
    return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 });
  }

  const body = payload as {
    eventId?: string;
    category?: string;
    action?: string;
    label?: string;
    value?: number;
    type?: "click" | "impression" | "view";
    context?: string;
  };

  if (!body?.eventId || !body?.category || !body?.action) {
    return NextResponse.json({ success: false, error: "Missing analytics fields" }, { status: 400 });
  }

  await storeEngagementEvent({
    eventId: body.eventId,
    category: body.category,
    action: body.action,
    label: body.label,
    value: body.value,
    type: body.type,
    context: body.context,
    userAgent: request.headers.get("user-agent"),
    pagePath: request.headers.get("referer") ?? undefined
  });

  return NextResponse.json({ success: true });
}

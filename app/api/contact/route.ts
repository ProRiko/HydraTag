import { NextResponse } from "next/server";
import { contactDetails } from "@/lib/constants";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "HydraTag Studio <studio@hydratag.studio>";
const CONTACT_NOTIFICATION_EMAIL = process.env.CONTACT_NOTIFICATION_EMAIL ?? contactDetails.email;
const RESEND_ENDPOINT = "https://api.resend.com/emails";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const submissionMap = new Map<string, { count: number; firstRequestTimestamp: number }>();

const sanitize = (value: unknown) => (typeof value === "string" ? value.replace(/[<>]/g, "").trim() : "");
const isValidEmail = (value: string) => /^(?:[a-zA-Z0-9_'^&/+-])+(?:\.(?:[a-zA-Z0-9_'^&/+-])+)*@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/.test(value);

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

const buildHtmlMessage = (payload: ContactPayload) => `
  <h2 style="font-family: system-ui, -apple-system, BlinkMacSystemFont;">New HydraTag Studio inquiry</h2>
  <p><strong>Name:</strong> ${payload.name}</p>
  <p><strong>Email:</strong> ${payload.email}</p>
  <p><strong>Phone:</strong> ${payload.phone}</p>
  <p><strong>Event type:</strong> ${payload.eventType}</p>
  <p><strong>Quantity:</strong> ${payload.quantity}</p>
  <p><strong>Preferred contact:</strong> ${payload.contactMethod}</p>
  <p><strong>Message:</strong></p>
  <p style="white-space:pre-line;">${payload.message}</p>
`;

const buildTextMessage = (payload: ContactPayload) =>
  [
    "New HydraTag Studio inquiry",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone}`,
    `Event type: ${payload.eventType}`,
    `Quantity: ${payload.quantity}`,
    `Preferred contact: ${payload.contactMethod}`,
    "Message:",
    payload.message
  ].join("\n");

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  quantity: number;
  message: string;
  contactMethod: "WhatsApp" | "Phone" | "Email";
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ success: false, error: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  let payload: Partial<ContactPayload>;

  try {
    payload = await request.json();
  } catch (error) {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 });
  }

  const sanitizedPayload: ContactPayload = {
    name: sanitize(payload.name),
    email: sanitize(payload.email),
    phone: sanitize(payload.phone),
    eventType: sanitize(payload.eventType),
    quantity: Math.max(0, Number(payload.quantity ?? 0)),
    message: sanitize(payload.message),
    contactMethod: (payload.contactMethod as ContactPayload["contactMethod"]) ?? "WhatsApp"
  };

  const validationErrors: string[] = [];

  if (sanitizedPayload.name.length < 2) validationErrors.push("Name must be at least two characters long.");
  if (!isValidEmail(sanitizedPayload.email)) validationErrors.push("Please enter a valid email address.");
  if (sanitizedPayload.phone.length < 7) validationErrors.push("Please share a reachable phone number.");
  if (!sanitizedPayload.eventType) validationErrors.push("Event type is required.");
  if (!sanitizedPayload.message || sanitizedPayload.message.length < 10)
    validationErrors.push("Message should include a few project details.");
  if (!Number.isFinite(sanitizedPayload.quantity) || sanitizedPayload.quantity < 1)
    validationErrors.push("Quantity must be at least 1.");

  if (validationErrors.length) {
    return NextResponse.json({ success: false, error: validationErrors.join(" ") }, { status: 422 });
  }

  if (!RESEND_API_KEY) {
    return NextResponse.json({ success: false, error: "Email service is not configured." }, { status: 500 });
  }

  const requestBody = {
    from: RESEND_FROM_EMAIL,
    to: [CONTACT_NOTIFICATION_EMAIL],
    reply_to: sanitizedPayload.email,
    subject: `New inquiry from ${sanitizedPayload.name}`,
    html: buildHtmlMessage(sanitizedPayload),
    text: buildTextMessage(sanitizedPayload)
  };

  const emailResponse = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`
    },
    body: JSON.stringify(requestBody)
  });

  if (!emailResponse.ok) {
    const error = await emailResponse.json().catch(() => null);
    console.error("[HydraTag Contact] Resend error", error ?? emailResponse.statusText);
    return NextResponse.json({ success: false, error: "We couldn't send your request. Please try WhatsApp." }, { status: 502 });
  }

  console.log("[HydraTag Contact] inquiry forwarded", {
    ...sanitizedPayload,
    ip,
    receivedAt: new Date().toISOString()
  });

  return NextResponse.json({ success: true, message: "Thanks! The studio will reply within one business day." });
}

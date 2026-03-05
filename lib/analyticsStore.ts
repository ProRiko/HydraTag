import { supabaseAdmin, hasSupabase } from "./supabaseServer";

export type LeadRecord = {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  quantity: number;
  message: string;
  contactMethod: "WhatsApp" | "Phone" | "Email";
  pagePath?: string;
};

export type EngagementEvent = {
  eventId: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  type?: "click" | "impression" | "view";
  context?: string;
  pagePath?: string;
  userAgent?: string | null;
};

export type AnalyticsSummary = {
  totalLeads: number;
  last7DaysLeads: number;
  ctaClicks: number;
  calculatorViews: number;
};

export type DashboardPayload = {
  summary: AnalyticsSummary;
  recentLeads: Array<{ id: string; name: string; eventType: string; quantity: number; createdAt: string }>;
  latestEvents: Array<{ id: string; action: string; type: string; context?: string | null; createdAt: string }>;
};

const DEFAULT_SUMMARY: AnalyticsSummary = {
  totalLeads: 0,
  last7DaysLeads: 0,
  ctaClicks: 0,
  calculatorViews: 0
};

export async function storeLeadRecord(record: LeadRecord) {
  if (!supabaseAdmin) return;

  await supabaseAdmin.from("leads").insert({
    name: record.name,
    phone: record.phone,
    email: record.email,
    event_type: record.eventType,
    quantity: record.quantity,
    message: record.message,
    contact_method: record.contactMethod,
    page_path: record.pagePath ?? null
  });
}

export async function storeEngagementEvent(event: EngagementEvent) {
  if (!supabaseAdmin) return;

  await supabaseAdmin.from("engagement_events").insert({
    event_id: event.eventId,
    category: event.category,
    action: event.action,
    label: event.label ?? null,
    value: event.value ?? null,
    event_type: event.type ?? "click",
    context: event.context ?? null,
    page_path: event.pagePath ?? null,
    user_agent: event.userAgent ?? null
  });
}

export async function getDashboardPayload(): Promise<DashboardPayload | null> {
  if (!supabaseAdmin) return null;

  const [leadCounts, recentLeads, latestEvents] = await Promise.all([
    supabaseAdmin.rpc("analytics_lead_counts"),
    supabaseAdmin
      .from("leads")
      .select("id, name, event_type, quantity, created_at")
      .order("created_at", { ascending: false })
      .limit(10),
    supabaseAdmin
      .from("engagement_events")
      .select("id, action, event_type, context, created_at")
      .order("created_at", { ascending: false })
      .limit(12)
  ]);

  const summary: AnalyticsSummary = leadCounts.data
    ? {
        totalLeads: leadCounts.data.total_leads ?? 0,
        last7DaysLeads: leadCounts.data.last7_days_leads ?? 0,
        ctaClicks: leadCounts.data.cta_clicks ?? 0,
        calculatorViews: leadCounts.data.calculator_views ?? 0
      }
    : DEFAULT_SUMMARY;

  return {
    summary,
    recentLeads: recentLeads.data?.map((lead) => ({
      id: lead.id,
      name: lead.name,
      eventType: lead.event_type,
      quantity: lead.quantity,
      createdAt: lead.created_at
    })) ?? [],
    latestEvents: latestEvents.data?.map((event) => ({
      id: event.id,
      action: event.action,
      type: event.event_type,
      context: event.context,
      createdAt: event.created_at
    })) ?? []
  };
}

export function analyticsConfigured() {
  return hasSupabase;
}

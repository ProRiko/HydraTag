import { Suspense } from "react";
import type { Metadata } from "next";
import { getDashboardPayload } from "@/lib/analyticsStore";

export const metadata: Metadata = {
  title: "Analytics Dashboard",
  description: "Lead and engagement telemetry for HydraTag Studio."
};

export const dynamic = "force-dynamic";

function Placeholder() {
  return (
    <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-white">
      <p className="text-lg font-semibold">Connect Supabase to view analytics</p>
      <p className="text-sm text-white/70">
        Set <code className="font-mono text-brand-aqua">SUPABASE_URL</code> and <code className="font-mono text-brand-aqua">SUPABASE_SERVICE_ROLE_KEY</code> to unlock
        this dashboard.
      </p>
    </div>
  );
}

function DashboardShell({ payload }: { payload: NonNullable<Awaited<ReturnType<typeof getDashboardPayload>>> }) {
  const { summary, recentLeads, latestEvents } = payload;

  return (
    <div className="space-y-10">
      <section className="grid gap-6 lg:grid-cols-4">
        {[
          { label: "Total Leads", value: summary.totalLeads },
          { label: "Leads (7d)", value: summary.last7DaysLeads },
          { label: "CTA Clicks", value: summary.ctaClicks },
          { label: "Calculator Views", value: summary.calculatorViews }
        ].map((item) => (
          <article key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">{item.label}</p>
            <p className="mt-4 text-3xl font-semibold">{item.value.toLocaleString()}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white">
          <h2 className="text-lg font-semibold">Recent Leads</h2>
          <ul className="mt-4 space-y-4 text-sm text-white/80">
            {recentLeads.map((lead) => (
              <li key={lead.id} className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-white">{lead.name}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">{lead.eventType}</p>
                </div>
                <p>{lead.quantity.toLocaleString()} labels</p>
              </li>
            ))}
            {recentLeads.length === 0 && <li>No leads captured yet.</li>}
          </ul>
        </article>

        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white">
          <h2 className="text-lg font-semibold">Latest Engagement</h2>
          <ul className="mt-4 space-y-4 text-sm text-white/80">
            {latestEvents.map((event) => (
              <li key={event.id} className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-white">{event.action}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">{event.type}</p>
                </div>
                <p className="text-white/60">{event.context ?? "—"}</p>
              </li>
            ))}
            {latestEvents.length === 0 && <li>No engagement events logged.</li>}
          </ul>
        </article>
      </section>
    </div>
  );
}

async function DashboardContent() {
  const payload = await getDashboardPayload();
  if (!payload) {
    return <Placeholder />;
  }

  return <DashboardShell payload={payload} />;
}

export default function AnalyticsDashboardPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold text-white">Studio Analytics</h1>
      <p className="mt-3 text-sm text-white/70">Live telemetry from CTAs, quote calculator, and submitted leads.</p>
      <Suspense fallback={<Placeholder />}>
        <DashboardContent />
      </Suspense>
    </div>
  );
}

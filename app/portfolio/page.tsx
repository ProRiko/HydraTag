import type { Metadata } from "next";
import { SectionWrapper } from "@/components/SectionWrapper";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { getPortfolioCollection, getPortfolioStats } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Browse HydraTag Studio portfolio across weddings, restaurants, corporate summits, and private events."
};

const portfolioItems = getPortfolioCollection();
const portfolioStats = getPortfolioStats();

export default function PortfolioPage() {
  return (
    <div className="pb-24">
      <SectionWrapper
        eyebrow="Portfolio"
        title="Hydrating premium experiences"
        description="Every project begins with an intention—romance, hospitality, or corporate precision. Explore how the same water bottle becomes part of the storytelling."
        analyticsId="portfolio-page"
      >
        <div className="mb-10 grid gap-4 md:grid-cols-4" aria-label="Portfolio production stats">
          <StatCard label="Total case studies" value={portfolioStats.totalProjects.toString()} />
          <StatCard label="Labels produced" value={portfolioStats.totalLabels.toLocaleString()} />
          <StatCard label="Avg. run size" value={`${portfolioStats.avgRun.toLocaleString()}+`} />
          <StatCard label="Categories" value={portfolioStats.categories.join(", ")} />
        </div>
        <PortfolioGrid items={portfolioItems} enableFilters />
      </SectionWrapper>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
      <p className="text-xs uppercase tracking-[0.3em] text-[#00B4D8]">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}

import type { Metadata } from "next";
import { SectionWrapper } from "@/components/SectionWrapper";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { cms } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Browse HydraTag Studio portfolio across weddings, restaurants, corporate summits, and private events."
};

export default async function PortfolioPage() {
  const portfolioItems = await cms.getPortfolioItems();
  return (
    <div className="pb-24">
      <SectionWrapper
        eyebrow="Portfolio"
        title="Hydrating premium experiences"
        description="Every project begins with an intention—romance, hospitality, or corporate precision. Explore how the same water bottle becomes part of the storytelling."
        analyticsId="portfolio-page"
      >
        <PortfolioGrid items={portfolioItems} enableFilters />
      </SectionWrapper>
    </div>
  );
}

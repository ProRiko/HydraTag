import type { Metadata } from "next";
import { SectionWrapper } from "@/components/SectionWrapper";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { portfolioItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Browse HydraTag Studio portfolio across weddings, restaurants, corporate summits, and private events."
};

export default function PortfolioPage() {
  return (
    <div className="pb-24">
      <SectionWrapper
        eyebrow="Portfolio"
        title="Hydrating premium experiences"
        description="Every project begins with an intention—romance, hospitality, or corporate precision. Explore how the same water bottle becomes part of the storytelling."
      >
        <PortfolioGrid items={portfolioItems} enableFilters />
      </SectionWrapper>
    </div>
  );
}

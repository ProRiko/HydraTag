import type { Metadata } from "next";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about HydraTag Studio’s vision, quality commitment, fast turnaround, and premium materials."
};

const pillars = [
  {
    title: "Vision",
    description: "Elevate hydration touchpoints so they feel as intentional as the floral install or menu design."
  },
  {
    title: "Quality commitment",
    description: "We spec waterproof vinyl, food-safe adhesives, and Pantone-calibrated inks on every production run."
  },
  {
    title: "Fast turnaround",
    description: "Proofs in 48 hours, dispatch in as little as five business days for Kolkata and metro deliveries."
  },
  {
    title: "Premium materials",
    description: "Foils, emboss, soft-touch lamination, and recycled backers make every label a tactile souvenir."
  }
];

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-24">
      <SectionWrapper
        eyebrow="About HydraTag"
        title="A Kolkata-based micro-branding studio"
        description="HydraTag Studio exists to craft water-bottle labels that feel bespoke, photo-ready, and perfectly on brand for every guest touchpoint."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-3xl border border-brand.deep/10 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-brand.deep">{pillar.title}</h3>
              <p className="mt-3 text-sm text-brand.deep/70">{pillar.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Studio DNA"
        title="Design-first. Production obsessed."
        description="We collaborate with planners, chefs, EA teams, and hosts to design labels that hold their own in galleries, Michelin-level plating, and boardroom tables."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-brand.deep/10 bg-white p-6 text-sm text-brand.deep/80">
            <p className="text-xs uppercase tracking-[0.3em] text-brand.aqua">Design Ops</p>
            <p className="mt-3">
              Editable templates, packaging-ready mockups, and modular systems make future updates effortless.
            </p>
          </div>
          <div className="rounded-3xl border border-brand.deep/10 bg-white p-6 text-sm text-brand.deep/80">
            <p className="text-xs uppercase tracking-[0.3em] text-brand.aqua">Scalability</p>
            <p className="mt-3">
              Built to plug into future MongoDB-powered dashboards and Stripe-powered ordering without rework.
            </p>
          </div>
          <div className="rounded-3xl border border-brand.deep/10 bg-white p-6 text-sm text-brand.deep/80">
            <p className="text-xs uppercase tracking-[0.3em] text-brand.aqua">Sustainability</p>
            <p className="mt-3">Vegan inks, recycled backers, and carbon-neutral shipping partners by default.</p>
          </div>
        </div>
        <div className="mt-10">
          <Button href="/portfolio">View recent work</Button>
        </div>
      </SectionWrapper>
    </div>
  );
}

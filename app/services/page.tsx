import type { Metadata } from "next";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/Button";
import { cms } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Services",
  description: "HydraTag Studio services for 250ml, 500ml, and 1L bottle labels, waterproof vinyl printing, and bespoke design."
};

const pricingModel = [
  { label: "100 labels", price: "₹4,200 - ₹5,500" },
  { label: "250 labels", price: "5% savings" },
  { label: "500 labels", price: "10% savings" },
  { label: "1000+ labels", price: "Tiered wholesale" }
];

export default async function ServicesPage() {
  const [labelSizes, printingOptions] = await Promise.all([cms.getLabelSizes(), cms.getPrintingOptions()]);

  return (
    <div className="space-y-16 pb-24">
      <SectionWrapper
        eyebrow="Services"
        title="Boutique hydration branding"
        description="From 250 ml welcome bottles to 1 L VIP pours, every label is engineered for waterproof performance, tactile finishes, and consistent color."
        analyticsId="services-grid"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {labelSizes.map((size) => (
            <div key={size.name} className="rounded-3xl border border-brand-deep/10 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-aqua">{size.volume}</p>
              <h3 className="mt-4 text-2xl font-semibold text-brand-deep">{size.name}</h3>
              <p className="mt-4 text-sm text-brand-deep/80">{size.description}</p>
              <p className="mt-6 text-sm font-semibold text-brand-deep">{size.startingPrice}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-brand-deep/60">{size.bestFor}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Production"
        title="Waterproof vinyl printing"
        description="Created to thrive through ice buckets, long ceremonies, and humid kitchens."
        analyticsId="production"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {printingOptions.map((option) => (
            <div key={option.title} className="rounded-3xl border border-brand-deep/10 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-brand-deep">{option.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-brand-deep/80">
                {option.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-aqua" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Pricing"
        title="Transparent pricing, scalable savings"
        description="Every quote includes design collaboration, waterproof vinyl, trimming, and packing. Shipping is calculated based on location."
        analyticsId="pricing"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-brand-deep/10 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-deep">Starting rate</h3>
            <p className="mt-2 text-sm text-brand-deep/70">Per 100 labels</p>
            <p className="mt-4 text-3xl font-semibold text-brand-deep">₹4,200 - ₹5,500</p>
            <p className="mt-4 text-sm text-brand-deep/80">
              Includes custom design, waterproof vinyl, and finishing.
            </p>
          </div>
          <div className="rounded-3xl border border-brand-deep/10 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-deep">Bulk benefits</h3>
            <ul className="mt-4 space-y-3 text-sm text-brand-deep/80">
              {pricingModel.map((tier) => (
                <li key={tier.label} className="flex items-center justify-between">
                  <span>{tier.label}</span>
                  <span className="font-semibold text-brand-deep">{tier.price}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-brand-aqua">
              + Priority scheduling for recurring restaurant programs
            </p>
          </div>
        </div>
        <div className="mt-8 text-right">
          <Button
            href="/contact"
            analytics={{ category: "engagement", action: "contact_click", label: "services_pricing", eventId: "services-contact" }}
          >
            Request tailored quote
          </Button>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Support"
        title="Custom design service"
        description="Send us your crest, campaign key visual, or Pinterest board. Our studio will iterate and prep press-ready files."
        analyticsId="support"
      >
        <div className="rounded-3xl border border-brand-deep/10 bg-white p-8 shadow-sm">
          <ul className="space-y-3 text-sm text-brand-deep/80">
            <li>• 2 concept rounds with a senior brand designer</li>
            <li>• Pantone, metallic, emboss, and spot-UV consultation</li>
            <li>• Ready for future Stripe payments and MongoDB-powered order tracking</li>
            <li>• File library for your internal design teams</li>
          </ul>
          <div className="mt-8">
            <Button
              href="/portfolio"
              variant="ghost"
              analytics={{ category: "engagement", action: "view_portfolio", label: "services_support", eventId: "services-portfolio" }}
            >
              View sample deliverables
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

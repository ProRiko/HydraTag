import { Hero } from "@/components/Hero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ServiceCard } from "@/components/ServiceCard";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Button } from "@/components/Button";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { FaqSection } from "@/components/FaqSection";
import { siteConfig } from "@/lib/constants";
import { cms } from "@/lib/cms";
import { howItWorks } from "@/lib/data";

export default async function HomePage() {
  const [
    services,
    authorityHighlights,
    labelSizes,
    trustPoints,
    portfolioItems,
    testimonials,
    faqItems
  ] = await Promise.all([
    cms.getServices(),
    cms.getAuthorityHighlights(),
    cms.getLabelSizes(),
    cms.getTrustPoints(),
    cms.getPortfolioItems(),
    cms.getTestimonials(),
    cms.getFaqItems()
  ]);

  return (
    <div className="space-y-24 pb-24">
      <div className="container pt-12">
        <Hero />
      </div>

      <SectionWrapper
        eyebrow="Authority"
        title="Trusted Branding Partner for Events Across Kolkata"
        description="HydraTag Studio is a professional micro-branding partner focused on waterproof bottle label printing for weddings, restaurants, and corporate events that need concierge-level detail."
        tone="secondary"
        analyticsId="authority"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {authorityHighlights.map((highlight) => (
            <article
              key={highlight.title}
              className="flex items-start gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 text-white shadow-lg backdrop-blur-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl" aria-hidden>
                {highlight.icon}
              </span>
              <div>
                <p className="text-base font-semibold">{highlight.title}</p>
                <p className="mt-1 text-sm text-white/70">{highlight.description}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="instant-quote"
        eyebrow="Estimate in seconds"
        title="WhatsApp-ready quote calculator"
        description="Choose your bottle size, share a quantity, and see transparent pricing before you message the studio."
        tone="primary"
        analyticsId="quote-calculator"
      >
        <QuoteCalculator />
      </SectionWrapper>

      <SectionWrapper
        id="services"
        eyebrow="Signature Offerings"
        title="Custom bottle branding for every moment"
        description="Layered concepts, premium materials, and on-brand detailing for weddings, restaurants, corporate events, and private milestones."
        tone="secondary"
        analyticsId="services"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="process"
        eyebrow="How it works"
        title="A boutique studio workflow"
        description="We pair craft-level print techniques with concierge-level project management."
        tone="primary"
        analyticsId="process"
      >
        <div className="grid gap-8 md:grid-cols-3">
          {howItWorks.map((step) => (
            <article key={step.number} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-lg backdrop-blur-md">
              <span className="text-sm font-semibold text-[#00B4D8]">{step.number}</span>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{step.description}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Label Architectures"
        title="Three bottle sizes. Endless narratives."
        description="Waterproof vinyl, invisible seams, and meticulously aligned trims that feel as good as they look."
        tone="secondary"
        analyticsId="label-architectures"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {labelSizes.map((size) => (
            <article key={size.name} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-lg backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.3em] text-[#00B4D8]">{size.volume}</p>
              <h3 className="mt-3 text-xl font-semibold">{size.name}</h3>
              <p className="mt-4 text-sm text-slate-300">{size.description}</p>
              <p className="mt-6 text-sm font-semibold">{size.startingPrice}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">{size.bestFor}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Why choose HydraTag Studio?"
        title="Local production partner Kolkata planners rely on"
        description="Every order includes tactile materials, concierge-level communication, and future-ready files."
        tone="primary"
        analyticsId="trust-points"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <article
              key={point.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left text-white shadow-lg backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <span className="text-3xl" aria-hidden>
                {point.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{point.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{point.description}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Portfolio"
        title="Recent pours & poursuits"
        description="A quick look at weddings, chef tables, and summits we have hydrated."
        tone="secondary"
        analyticsId="portfolio"
      >
        <PortfolioGrid items={portfolioItems} />
        <div className="mt-8 text-right">
          <Button href="/portfolio" variant="secondary" analytics={{ category: "engagement", action: "view_portfolio", eventId: "portfolio-cta" }}>
            View Full Portfolio
          </Button>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Testimonials"
        title="Attention to detail noticed by guests"
        description="From intimate affairs to corporate summits, teams lean on HydraTag for elevated hydration touchpoints."
        tone="primary"
        analyticsId="testimonials"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.author} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-lg backdrop-blur-md">
              <p className="text-base text-slate-200">“{testimonial.quote}”</p>
              <p className="mt-4 text-sm font-semibold">{testimonial.author}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">{testimonial.role}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="FAQ"
        title="Answers for planners on a deadline"
        description="Quick clarity on waterproof materials, order minimums, and delivery timelines so you can confirm HydraTag Studio as your bottle branding partner."
        tone="secondary"
        analyticsId="faq"
      >
        <FaqSection items={faqItems} />
      </SectionWrapper>

      <SectionWrapper className="pt-0" tone="secondary" analyticsId="cta">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#0c2342] via-[#081530] to-[#030b1c] px-8 py-16 text-white shadow-2xl">
          <div className="floating-shape -left-20 top-0 h-64 w-64 bg-[#00B4D8]/25" />
          <div className="floating-shape bottom-0 right-0 h-64 w-64 bg-white/10" />
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Next Step</p>
            <h3 className="mt-4 text-3xl font-semibold">Ready to Brand Your Event?</h3>
            <p className="mt-4 text-base text-white/80">
              Get custom waterproof bottle labels designed and delivered in 3–5 days. Share your mood board and we’ll
              return proofs, pricing, and delivery updates the same day.
            </p>
            <div className="mt-8">
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button href="/contact" variant="secondary" analytics={{ category: "engagement", action: "cta_click", label: "contact", eventId: "cta-contact" }}>
                  Get Quote
                </Button>
                <Button
                  href={siteConfig.whatsapp}
                  variant="primary"
                  target="_blank"
                  rel="noreferrer"
                  analytics={{ category: "engagement", action: "whatsapp_click", label: "cta_whatsapp", eventId: "cta-whatsapp" }}
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

import { Hero } from "@/components/Hero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ServiceCard } from "@/components/ServiceCard";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Button } from "@/components/Button";
import { QuoteCalculator } from "@/components/QuoteCalculator";
import { siteConfig } from "@/lib/constants";
import { howItWorks, labelSizes, portfolioItems, services, testimonials, trustPoints } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <div className="container pt-12">
        <Hero />
      </div>

      <SectionWrapper
        id="instant-quote"
        eyebrow="Estimate in seconds"
        title="WhatsApp-ready quote calculator"
        description="Choose your bottle size, share a quantity, and see transparent pricing before you message the studio."
        tone="primary"
      >
        <QuoteCalculator />
      </SectionWrapper>

      <SectionWrapper
        id="services"
        eyebrow="Signature Offerings"
        title="Custom bottle branding for every moment"
        description="Layered concepts, premium materials, and on-brand detailing for weddings, restaurants, corporate events, and private milestones."
        tone="secondary"
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
      >
        <div className="grid gap-8 md:grid-cols-3">
          {howItWorks.map((step) => (
            <div key={step.number} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-lg backdrop-blur-md">
              <span className="text-sm font-semibold text-[#00B4D8]">{step.number}</span>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{step.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Label Architectures"
        title="Three bottle sizes. Endless narratives."
        description="Waterproof vinyl, invisible seams, and meticulously aligned trims that feel as good as they look."
        tone="secondary"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {labelSizes.map((size) => (
            <div key={size.name} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-lg backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.3em] text-[#00B4D8]">{size.volume}</p>
              <h3 className="mt-3 text-xl font-semibold">{size.name}</h3>
              <p className="mt-4 text-sm text-slate-300">{size.description}</p>
              <p className="mt-6 text-sm font-semibold">{size.startingPrice}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">{size.bestFor}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Why choose HydraTag Studio?"
        title="Local production partner Kolkata planners rely on"
        description="Every order includes tactile materials, concierge-level communication, and future-ready files."
        tone="primary"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left text-white shadow-lg backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            >
              <span className="text-3xl" aria-hidden>
                {point.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{point.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{point.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Portfolio"
        title="Recent pours & poursuits"
        description="A quick look at weddings, chef tables, and summits we have hydrated."
        tone="secondary"
      >
        <PortfolioGrid items={portfolioItems} />
        <div className="mt-8 text-right">
          <Button href="/portfolio" variant="secondary">
            View Full Portfolio
          </Button>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Testimonials"
        title="Attention to detail noticed by guests"
        description="From intimate affairs to corporate summits, teams lean on HydraTag for elevated hydration touchpoints."
        tone="primary"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-lg backdrop-blur-md">
              <p className="text-base text-slate-200">“{testimonial.quote}”</p>
              <p className="mt-4 text-sm font-semibold">{testimonial.author}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="pt-0" tone="secondary">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#0c2342] via-[#081530] to-[#030b1c] px-8 py-16 text-white shadow-2xl">
          <div className="floating-shape -left-20 top-0 h-64 w-64 bg-[#00B4D8]/25" />
          <div className="floating-shape bottom-0 right-0 h-64 w-64 bg-white/10" />
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">CTA</p>
            <h3 className="mt-4 text-3xl font-semibold">Ready to elevate your event?</h3>
            <p className="mt-4 text-base text-white/80">
              Share your Pinterest board, menu, or brand guardrails. Our Kolkata studio translates them into premium,
              waterproof bottle labels with WhatsApp-first updates.
            </p>
            <div className="mt-8">
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button href="/contact" variant="secondary">
                  Contact Us
                </Button>
                <Button
                  href={siteConfig.whatsapp}
                  variant="primary"
                  target="_blank"
                  rel="noreferrer"
                  analytics={{ category: "engagement", action: "whatsapp_click", label: "cta_whatsapp" }}
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

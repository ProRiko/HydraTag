import { Hero } from "@/components/Hero";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ServiceCard } from "@/components/ServiceCard";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { Button } from "@/components/Button";
import { howItWorks, labelSizes, portfolioItems, services, testimonials } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="space-y-24 pb-24">
      <div className="container pt-12">
        <Hero />
      </div>

      <SectionWrapper
        id="services"
        eyebrow="Signature Offerings"
        title="Custom bottle branding for every moment"
        description="Layered concepts, premium materials, and on-brand detailing for weddings, restaurants, corporate events, and private milestones."
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
      >
        <div className="grid gap-8 md:grid-cols-3">
          {howItWorks.map((step) => (
            <div key={step.number} className="rounded-3xl border border-brand.deep/10 bg-white p-6 shadow-sm">
              <span className="text-sm font-semibold text-brand.aqua">{step.number}</span>
              <h3 className="mt-4 text-xl font-semibold text-brand.deep">{step.title}</h3>
              <p className="mt-3 text-sm text-brand.deep/70">{step.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Label Architectures"
        title="Three bottle sizes. Endless narratives."
        description="Waterproof vinyl, invisible seams, and meticulously aligned trims that feel as good as they look."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {labelSizes.map((size) => (
            <div key={size.name} className="rounded-3xl border border-brand.deep/10 bg-white p-6 shadow">
              <p className="text-xs uppercase tracking-[0.3em] text-brand.aqua">{size.volume}</p>
              <h3 className="mt-3 text-xl font-semibold text-brand.deep">{size.name}</h3>
              <p className="mt-4 text-sm text-brand.deep/70">{size.description}</p>
              <p className="mt-6 text-sm font-semibold text-brand.deep">{size.startingPrice}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-brand.deep/60">{size.bestFor}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Portfolio"
        title="Recent pours & poursuits"
        description="A quick look at weddings, chef tables, and summits we have hydrated."
      >
        <PortfolioGrid items={portfolioItems} enableFilters={false} limit={3} />
        <div className="mt-8 text-right">
          <Button href="/portfolio" variant="ghost">
            View Full Portfolio
          </Button>
        </div>
      </SectionWrapper>

      <SectionWrapper
        eyebrow="Testimonials"
        title="Attention to detail noticed by guests"
        description="From intimate affairs to corporate summits, teams lean on HydraTag for elevated hydration touchpoints."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="rounded-3xl border border-brand.deep/10 bg-white p-6 shadow-sm">
              <p className="text-base text-brand.deep/80">“{testimonial.quote}”</p>
              <p className="mt-4 text-sm font-semibold text-brand.deep">{testimonial.author}</p>
              <p className="text-xs uppercase tracking-[0.2em] text-brand.deep/60">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="pt-0">
        <div className="relative overflow-hidden rounded-3xl bg-brand.deep px-8 py-16 text-white">
          <div className="floating-shape -left-10 top-0 h-64 w-64 bg-brand.aqua/30" />
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">CTA</p>
            <h3 className="mt-4 text-3xl font-semibold">Ready to elevate your event?</h3>
            <p className="mt-4 text-base text-white/80">
              Share your Pinterest board, mood references, or existing artwork. We will translate it into premium,
              waterproof bottle labels.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/Button";
import { getPortfolioCollection, getPortfolioEntry } from "@/lib/portfolio";

export function generateStaticParams() {
  return getPortfolioCollection().map((item) => ({ slug: item.id }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const entry = getPortfolioEntry(params.slug);

  if (!entry) {
    return { title: "Case Study" };
  }

  return {
    title: `${entry.title} | Case Study`,
    description: entry.description,
    openGraph: {
      title: entry.title,
      description: entry.description,
      images: [{ url: entry.image }]
    }
  };
}

export default function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const entry = getPortfolioEntry(params.slug);

  if (!entry) {
    notFound();
  }

  return (
    <div className="pb-24">
      <SectionWrapper
        eyebrow={entry.category}
        title={entry.title}
        description={entry.description}
        analyticsId={`portfolio-${entry.id}`}
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-3xl border border-white/15">
            <Image
              src={entry.image}
              alt={entry.title}
              width={1200}
              height={800}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="space-y-6 rounded-3xl border border-white/15 bg-white/5 p-6 text-white">
            <dl className="space-y-4 text-sm text-white/80">
              <Detail label="Event Type" value={entry.eventType} />
              <Detail label="Client" value={entry.clientType} />
              <Detail label="Quantity Produced" value={`${entry.quantity.toLocaleString()} labels`} />
            </dl>
            {entry.metrics && (
              <div className="grid gap-4 sm:grid-cols-2">
                {entry.metrics.map((metric) => (
                  <article key={metric.label} className="rounded-2xl border border-white/10 bg-[#0b1f3a] p-4 text-sm">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#00B4D8]">{metric.label}</p>
                    <p className="mt-1 text-2xl font-semibold text-white">{metric.value}</p>
                  </article>
                ))}
              </div>
            )}
            {entry.deliverables && (
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#00B4D8]">Deliverables</p>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  {entry.deliverables.map((deliverable) => (
                    <li key={deliverable}>• {deliverable}</li>
                  ))}
                </ul>
              </div>
            )}
            {entry.palette && (
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#00B4D8]">Palette</p>
                <div className="mt-3 flex gap-3">
                  {entry.palette.map((hex) => (
                    <span key={hex} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[10px] text-white/80" style={{ backgroundColor: hex }}>
                      {hex.replace("#", "")}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {entry.testimonial && (
              <blockquote className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/80">
                “{entry.testimonial}”
              </blockquote>
            )}
            <Button
              href="/contact"
              analytics={{ category: "engagement", action: "contact_click", label: entry.id, eventId: `portfolio-${entry.id}-contact` }}
            >
              Book a similar project
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="uppercase tracking-[0.3em] text-xs text-white/50">{label}</dt>
      <dd className="mt-1 text-base text-white">{value}</dd>
    </div>
  );
}

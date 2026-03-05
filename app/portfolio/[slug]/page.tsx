import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/Button";
import { cms } from "@/lib/cms";

export async function generateStaticParams() {
  const items = await cms.getPortfolioItems();
  return items.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const items = await cms.getPortfolioItems();
  const entry = items.find((item) => item.id === params.slug);

  if (!entry) {
    return {
      title: "Case Study"
    };
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

export default async function PortfolioDetailPage({ params }: { params: { slug: string } }) {
  const items = await cms.getPortfolioItems();
  const entry = items.find((item) => item.id === params.slug);

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
              <div>
                <dt className="uppercase tracking-[0.3em] text-xs text-white/50">Event Type</dt>
                <dd className="mt-1 text-base text-white">{entry.eventType}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.3em] text-xs text-white/50">Client</dt>
                <dd className="mt-1 text-base text-white">{entry.clientType}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.3em] text-xs text-white/50">Quantity Produced</dt>
                <dd className="mt-1 text-base text-white">{entry.quantity.toLocaleString()} labels</dd>
              </div>
            </dl>
            <p className="text-sm text-white/70">
              Waterproof vinyl labels with concierge-level project management ensured {entry.clientType} received
              perfectly trimmed, on-brand hydration touchpoints.
            </p>
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

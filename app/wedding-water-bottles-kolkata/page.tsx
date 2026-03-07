import type { Metadata } from "next";
import Script from "next/script";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/Button";
import { contactDetails, siteConfig } from "@/lib/constants";

const pageUrl = `${siteConfig.url}/wedding-water-bottles-kolkata`;

const storyBeats = [
  {
    heading: "Moodboard consult",
    copy: "Share Pinterest boards and invitation suites so we can echo motifs across every bottle.",
    timeline: "Day 0"
  },
  {
    heading: "Proof & personalization",
    copy: "We build two concepts with monograms, foil, and bilingual typography if required.",
    timeline: "Day 2"
  },
  {
    heading: "Production & packing",
    copy: "Waterproof vinyl prints trimmed to size, packed per ceremony with labels marked.",
    timeline: "Day 5"
  }
];

const hospitalityExtras = [
  "Tray-ready numbering for baraat service",
  "Haldi-safe stocks that don’t smudge",
  "Guest initials or table numbers printed per label",
  "Dedicated WhatsApp group with the design team"
];

export const metadata: Metadata = {
  title: "Wedding Water Bottle Labels in Kolkata",
  description:
    "Premium wedding water bottle branding for Kolkata sangeets, pheras, and receptions with foil, monograms, and fast delivery.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Wedding Water Bottle Labels | HydraTag Studio",
    description:
      "Custom-designed hydration touchpoints for Kolkata weddings with monograms, foil, and bilingual typography.",
    url: pageUrl,
    siteName: siteConfig.name
  }
};

export default function WeddingWaterBottlesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EventService",
    name: "Wedding water bottle branding",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: contactDetails.phone
    },
    areaServed: {
      "@type": "City",
      name: siteConfig.city
    },
    serviceAudience: {
      "@type": "Audience",
      audienceType: "Luxury weddings"
    },
    url: pageUrl,
    description: metadata.description
  };

  return (
    <div className="pb-24">
      <SectionWrapper
        eyebrow="Wedding hydration design"
        title="From haldi hampers to reception bars"
        description="HydraTag Studio choreographs bottle labels that echo your wedding stationery—from welcome hampers to after-party recovery kits."
        analyticsId="wedding-water"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {storyBeats.map((beat) => (
            <article key={beat.heading} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#00B4D8]">{beat.timeline}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{beat.heading}</h3>
              <p className="mt-2 text-sm text-slate-300">{beat.copy}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="secondary" title="Hospitality extras for Kolkata venues">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4 text-sm text-slate-200">
            {hospitalityExtras.map((extra) => (
              <p key={extra} className="rounded-2xl border border-white/10 bg-[#0b1f3a] px-5 py-4">
                {extra}
              </p>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <h3 className="text-xl font-semibold text-white">Timeline snapshot</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>• Proof approvals within 48 hours</li>
              <li>• Production windows reserved for each ceremony</li>
              <li>• Logistics partners covering Ballygunge, New Town, and resorts</li>
            </ul>
            <div className="mt-6 space-y-4">
              <Button
                href="/contact"
                analytics={{ category: "seo", action: "wedding_contact", eventId: "seo-contact-wedding" }}
                className="w-full justify-center"
              >
                Share the run sheet
              </Button>
              <Button
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                className="w-full justify-center"
                analytics={{ category: "engagement", action: "whatsapp_click", label: "wedding-page" }}
              >
                WhatsApp the studio
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <Script id="schema-wedding-water" type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>
    </div>
  );
}

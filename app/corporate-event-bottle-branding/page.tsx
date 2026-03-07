import type { Metadata } from "next";
import Script from "next/script";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/Button";
import { contactDetails, siteConfig } from "@/lib/constants";

const pageUrl = `${siteConfig.url}/corporate-event-bottle-branding`;

const outcomes = [
  {
    label: "Brand-safe artwork",
    detail: "Pantone, typography, and accessibility checks baked into every proof."
  },
  {
    label: "Data-friendly callouts",
    detail: "QR, NFC, or short links that track engagement on hydration touchpoints."
  },
  {
    label: "Ops-ready logistics",
    detail: "Batch-packed crates labeled per session or track with pallet IDs."
  }
];

const stats = [
  { title: "1200+", subtitle: "bottles per launch", description: "Scaled production for enterprise summits." },
  { title: "48 hr", subtitle: "proof turnaround", description: "Dedicated PM for rapid approvals." },
  { title: "7", subtitle: "city coverage", description: "Partner logistics beyond Kolkata when needed." }
];

const faqs = [
  {
    question: "Can procurement issue POs and GST invoices?",
    answer: "Yes. We onboard as a vendor, share GST-compliant invoices, and align with your PO / GRN workflow before production."
  },
  {
    question: "Do you support QR or NFC tracking for campaigns?",
    answer: "Every label can include a unique QR, NFC chip, or short link with UTM parameters so marketing teams can measure engagement."
  },
  {
    question: "How do deliveries work for IT parks or multi-session events?",
    answer: "Cartons are serialized per breakout room with pallet IDs so facility teams can drop them at the right bay without guesswork."
  }
];

export const metadata: Metadata = {
  title: "Corporate Event Bottle Branding in Kolkata",
  description:
    "Enterprise-ready bottle branding for corporate summits, HR offsites, and product launches across Kolkata with analytics-ready labels.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Corporate Bottle Branding | HydraTag Studio",
    description:
      "Brand-safe water bottle labels for corporate events with QR analytics, palletized logistics, and rush service in Kolkata.",
    url: pageUrl,
    siteName: siteConfig.name
  }
};

export default function CorporateBottleBrandingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Corporate event bottle branding",
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
    audience: "Corporate marketing, HR, and events teams",
    url: pageUrl,
    description: metadata.description
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Corporate bottle branding", item: pageUrl }
    ]
  };

  return (
    <div className="pb-24">
      <SectionWrapper
        eyebrow="Corporate hydration branding"
        title="On-brand bottles for summits, launches, and HR offsites"
        description="Give every boardroom, press lounge, and partner meet a cohesive hydration moment with labels that ship ready to wrap."
        analyticsId="corporate-bottle-branding"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {outcomes.map((outcome) => (
            <article key={outcome.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">{outcome.label}</h3>
              <p className="mt-2 text-sm text-slate-300">{outcome.detail}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper tone="secondary" title="Operational clarity for every stakeholder">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="grid gap-4">
            {stats.map((stat) => (
              <article key={stat.title} className="rounded-2xl border border-white/10 bg-[#0b1f3a] p-5">
                <p className="text-3xl font-semibold text-white">{stat.title}</p>
                <p className="text-sm uppercase tracking-[0.3em] text-[#00B4D8]">{stat.subtitle}</p>
                <p className="mt-2 text-sm text-slate-300">{stat.description}</p>
              </article>
            ))}
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">What we prep for enterprise drops</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-200">
              <li>• Vendor onboarding paperwork & GST invoices</li>
              <li>• Security cleared delivery partners for IT parks</li>
              <li>• Serialized cartons labeled by breakout room</li>
            </ul>
            <div className="mt-6 space-y-4">
              <Button
                href="/contact"
                className="w-full justify-center"
                analytics={{ category: "seo", action: "corporate_contact", eventId: "seo-contact-corporate" }}
              >
                Book a production slot
              </Button>
              <Button
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                className="w-full justify-center"
                analytics={{ category: "engagement", action: "whatsapp_click", label: "corporate-page" }}
              >
                WhatsApp proofs desk
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Ops FAQ for enterprise teams" description="Fast answers we send to procurement and event leads.">
        <div className="space-y-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/80">
              <h3 className="text-base font-semibold text-white">{faq.question}</h3>
              <p className="mt-2 text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <Script id="schema-corporate-branding" type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>
      <Script id="schema-corporate-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="schema-corporate-breadcrumbs" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
    </div>
  );
}

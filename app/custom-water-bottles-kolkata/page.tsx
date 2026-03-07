import type { Metadata } from "next";
import Script from "next/script";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/Button";
import { contactDetails, siteConfig } from "@/lib/constants";

const pageUrl = `${siteConfig.url}/custom-water-bottles-kolkata`;

const highlights = [
  {
    title: "Waterproof vinyl stocks",
    description: "Condensation-proof labels that stay crisp inside ice buckets at luxe venues.",
    metric: "72 hr",
    detail: "humidity testing"
  },
  {
    title: "Pantone-accurate design",
    description: "Studio designers match your brand palette and typography guardrails.",
    metric: "2",
    detail: "concept rounds"
  },
  {
    title: "Rush-ready logistics",
    description: "Priority production and vetted delivery partners across Kolkata & Howrah.",
    metric: "3-5",
    detail: "day dispatch"
  }
];

const bottlePackages = [
  {
    name: "Boutique 250 ml",
    useCase: "welcome hampers, guest rooms",
    price: "₹4,200 / 100 labels",
    includes: ["Matte or gloss lamination", "Custom die-lines", "Express door-step drop"]
  },
  {
    name: "Signature 500 ml",
    useCase: "restaurants, venue service",
    price: "₹4,800 / 100 labels",
    includes: ["Foil or metallic accents", "QR-ready back panel", "On-call studio PM"]
  },
  {
    name: "Statement 1 L",
    useCase: "boardrooms, backstage",
    price: "₹5,500 / 100 labels",
    includes: ["Serial numbering", "Spot UV protection", "Bulk crates with labeling"]
  }
];

const faqs = [
  {
    question: "How fast can custom bottles be delivered across Kolkata?",
    answer: "Standard runs ship in 3–5 working days. Rush jobs are available with a dedicated rider inside city limits once proofs are approved."
  },
  {
    question: "Can you match my brand Pantone and typography?",
    answer: "Yes. Share brand guidelines or invitation files and the studio recreates palettes, type stacks, and iconography before preflight."
  },
  {
    question: "Do you offer QR codes or NFC for digital menus?",
    answer: "Every package includes QR-ready artwork. NFC or serialized URLs can be added for lead capture or menu journeys."
  }
];

export const metadata: Metadata = {
  title: "Custom Water Bottle Labels in Kolkata",
  description:
    "HydraTag Studio designs and prints waterproof custom water bottle labels for Kolkata hotels, restaurants, and events with 3–5 day delivery.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Custom Water Bottles in Kolkata | HydraTag Studio",
    description:
      "Premium vinyl labels, pantone-accurate design, and concierge logistics for custom water bottles in Kolkata.",
    url: pageUrl,
    siteName: siteConfig.name
  }
};

export default function CustomWaterBottlesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom water bottle labels",
    areaServed: {
      "@type": "City",
      name: siteConfig.city
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: contactDetails.phone
    },
    description: metadata.description,
    url: pageUrl,
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "4200",
      availability: "https://schema.org/InStock"
    }
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
      { "@type": "ListItem", position: 2, name: "Custom water bottles", item: pageUrl }
    ]
  };

  return (
    <div className="pb-24">
      <SectionWrapper
        eyebrow="Custom water bottles"
        title="Brand the hydration moments across Kolkata venues"
        description="We translate brand guidelines, wedding monograms, and corporate decks into waterproof labels sized for every bottle format."
        analyticsId="custom-water-bottles"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((highlight) => (
            <article key={highlight.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
              <p className="text-xs uppercase tracking-[0.3em] text-[#00B4D8]">{highlight.title}</p>
              <p className="mt-3 text-sm text-slate-200">{highlight.description}</p>
              <p className="mt-6 text-4xl font-semibold text-white">
                {highlight.metric}
                <span className="ml-2 text-base text-slate-300">{highlight.detail}</span>
              </p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        tone="secondary"
        title="Bespoke packages for every hospitality format"
        description="Choose the right volume and embellishments—our studio keeps artwork, production, and delivery under one project manager."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {bottlePackages.map((pkg) => (
            <article key={pkg.name} className="rounded-2xl border border-white/10 bg-[#0b1f3a] p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#00B4D8]">{pkg.useCase}</p>
              <h3 className="mt-3 text-xl font-semibold text-white">{pkg.name}</h3>
              <p className="mt-2 text-sm text-slate-300">{pkg.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {pkg.includes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button
            href="/contact"
            analytics={{ category: "seo", action: "custom_water_contact", eventId: "seo-contact-custom" }}
          >
            Talk to the studio
          </Button>
          <Button
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            analytics={{ category: "engagement", action: "whatsapp_click", label: "custom-water-page" }}
          >
            WhatsApp production desk
          </Button>
        </div>
      </SectionWrapper>

      <SectionWrapper
        title="Questions we get from Kolkata venues"
        description="A quick FAQ captured from concierge chats so planners can move faster."
      >
        <div className="space-y-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/80">
              <h3 className="text-base font-semibold text-white">{faq.question}</h3>
              <p className="mt-2 text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <Script id="schema-custom-water" type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>
      <Script id="schema-custom-water-faq" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <Script id="schema-custom-water-breadcrumbs" type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </Script>
    </div>
  );
}

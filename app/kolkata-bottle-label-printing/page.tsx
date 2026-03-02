import type { Metadata } from "next";
import Script from "next/script";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Button } from "@/components/Button";
import { siteConfig, contactDetails } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kolkata Bottle Label Printing | HydraTag Studio",
  description:
    "Custom bottle label printing in Kolkata for weddings, restaurants, hotels, and corporate events. Waterproof vinyl, concierge design, and fast delivery.",
  alternates: {
    canonical: `${siteConfig.url}/kolkata-bottle-label-printing`
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  image: `${siteConfig.url}/og-cover.svg`,
  url: `${siteConfig.url}/kolkata-bottle-label-printing`,
  telephone: contactDetails.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.region,
    addressCountry: siteConfig.country
  },
  areaServed: siteConfig.city,
  priceRange: "₹₹",
  description: metadata.description
};

export default function KolkataBottleLabelPrintingPage() {
  return (
    <div className="space-y-0 pb-24">
      <Script id="kolkata-label-schema" type="application/ld+json">
        {JSON.stringify(schema)}
      </Script>

      <SectionWrapper
        tone="primary"
        eyebrow="Kolkata bottle label printing"
        title="Waterproof bottle labels tailored for Kolkata venues"
        description="HydraTag Studio partners with wedding planners, chefs, hoteliers, and corporate teams across Kolkata to design, print, and deliver premium bottle branding that survives humidity and feels on-brand for every guest touchpoint."
      >
        <div className="space-y-5 text-slate-200">
          <p>
            We are a Kolkata-born label studio built for the city’s unique celebrations. From Park Street soirées to
            sundowner pheras along the Hooghly, every order begins with a deep dive into your brief, color cues, and
            venue lighting. Our designers translate your crest, menu, or keynote artwork into waterproof vinyl labels
            that wrap cleanly without bubbling, resist ice buckets, and arrive trimmed for your setup crew. Because we
            print locally, planners avoid courier delays, and we can accommodate last-minute headcount changes or add-on
            hospitality suites without derailing the production calendar.
          </p>
          <p>
            Whether you are planning bespoke wedding bottle labels in Ballygunge, outfitting a chef’s tasting table in
            New Town, or branding hydration points for a Sector V tech summit, we keep the process concierge-level.
            WhatsApp-first approvals, annotated proofs, and delivery tracking ensure you are never guessing about status.
            Every client also receives a future-friendly file library, so when you expand to cities like Delhi or Goa the
            same assets can be reprinted instantly.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper
        tone="secondary"
        eyebrow="Why Kolkata hosts choose HydraTag"
        title="Premium finish plus measurable impact"
        description="Luxury labels are only effective when they balance craft and operations. Our team obsesses over foil placement, adhesive selection, and reporting so you can feel confident investing in hydration branding."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4 text-slate-200">
            <h3 className="text-xl font-semibold text-white">Wedding & social celebrations</h3>
            <p>
              Kolkata weddings blend tradition with bold storytelling. We craft bottle suites that echo your invitation
              suite, welcome hampers, and pheras décor. Think gilt Bengali typography for Sangeet welcome drinks, pastel
              watercolor gradients for Mehendi hydration, and midnight velvet textures for cocktail hour. Labels ship in
              protective sleeves so your decor team can stock ice buckets without damaging the finish.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
              <li>Monogram development and bilingual copy support</li>
              <li>Coordinated welcome hamper tags and QR-enabled itineraries</li>
              <li>Rush-ready lanes for final guest list tweaks</li>
            </ul>
          </div>
          <div className="space-y-4 text-slate-200">
            <h3 className="text-xl font-semibold text-white">Restaurants, hotels, and lounges</h3>
            <p>
              Chefs and F&B directors lean on HydraTag to extend their plating philosophy to still and sparkling
              programs. Waterproof vinyl with satin lamination feels luxurious, while barcode or QR placement keeps your
              operations team aligned. We can mirror Pantone-matched gradients from your bar collateral, highlight local
              sourcing stories, or nudge diners toward tasting menus via scannable storytelling.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
              <li>Batch-tested adhesives that survive cold storage and service trays</li>
              <li>Serialized numbering for limited chef tables</li>
              <li>Template systems for seasonal menu switches</li>
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        tone="primary"
        eyebrow="Local SEO focus"
        title="Serving Kolkata neighborhoods end-to-end"
        description="We cover the entire metro—from Alipore and Salt Lake to Rajarhat and Howrah—so logistics never slow your campaign."
      >
        <div className="space-y-4 text-slate-200">
          <p>
            HydraTag Studio’s production floor is in central Kolkata, minutes from trusted courier partners. That means
            wedding planners managing multi-day events across the city receive staggered deliveries exactly when staging
            teams need them. Corporate teams hosting at ITC Royal Bengal or Novotel can count on pre-event replenishment
            runs, while boutique restaurants in Hindustan Park enjoy smaller weekly drops. Our couriers understand
            high-priority hospitality shipments and handle every carton with care.
          </p>
          <p>
            Local search visibility matters for us because it matters for you. This page is optimized for phrases such as
            “custom bottle label printing Kolkata”, “wedding bottle labels Kolkata”, and “restaurant bottle branding
            Kolkata” so procurement heads can find a trusted partner without digging through generic directories. We keep
            listings updated, respond to reviews, and publish project recaps to prove ongoing momentum in the city.
          </p>
          <p>
            Beyond print, clients tap our team for artwork audits, hospitality scripting, and cross-channel brand reviews.
            When you are ready to scale, we share metrics from Google Analytics (quote calculator usage, WhatsApp chats,
            conversion funnels) so your marketing team can attribute ROI to custom hydration touchpoints. Every detail is
            structured so the same infrastructure can power future Razorpay deposits or CRM pipelines.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper
        tone="secondary"
        eyebrow="Process"
        title="How a Kolkata bottle label order comes together"
        description="A transparent process keeps planners calm and gives procurement teams the documentation they need."
      >
        <div className="space-y-5 text-slate-200">
          <ol className="space-y-3 text-sm text-slate-300">
            <li>
              <strong>Discovery call (Day 0).</strong> Share event type, bottle size, delivery timelines, and inspiration.
              We immediately send a checklist so approvals stay on track.
            </li>
            <li>
              <strong>Design exploration (Day 1-2).</strong> Two creative routes with mockups, QR placement, and finish
              suggestions land in your inbox or WhatsApp.
            </li>
            <li>
              <strong>Production (Day 3-5).</strong> Waterproof vinyl printing, lamination, trimming, and quality control.
              Photo proofs are sent before packing.
            </li>
            <li>
              <strong>Delivery + analytics.</strong> Labels ship via insured courier. You receive tracking plus a post-event
              checklist covering reprint readiness and measurement hooks.
            </li>
          </ol>
          <p>
            Need rush service for a city hall elopement or intimate chef table? Our express lane can print 100–200 labels
            within 48 hours, subject to artwork readiness. For recurring restaurant programs, we can warehouse blank stock
            so only variable data requires approval.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper
        tone="primary"
        eyebrow="Ready to brief HydraTag?"
        title="Let’s build a hydration experience that feels unmistakably Kolkata"
      >
        <div className="space-y-6 text-slate-200">
          <p>
            Share your Pinterest board, chef’s plating deck, or corporate brand guardrails. We will translate them into
            tangible labels that feel cohesive with the rest of your guest journey. Include venue names (Taj Bengal, JW
            Marriott, ITC Sonar, Glenburn Penthouse), headcount, and any sponsor requirements so we can recommend the
            right laminate, adhesive, and fulfillment schedule.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact">Talk to the studio</Button>
            <Button
              href={siteConfig.whatsapp}
              variant="secondary"
              target="_blank"
              rel="noreferrer"
              analytics={{ category: "engagement", action: "whatsapp_click", label: "kolkata_landing_whatsapp" }}
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

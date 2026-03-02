import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { contactDetails, siteConfig } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "HydraTag Studio | Custom Bottle Label Printing in Kolkata",
    template: `%s | ${siteConfig.name}`
  },
  description:
    "Premium custom water bottle label printing for weddings, restaurants, and corporate events in Kolkata. Waterproof vinyl labels with fast delivery.",
  keywords: [
    "Kolkata bottle label printing",
    "custom water bottle labels",
    "wedding bottle labels India",
    "restaurant branding Kolkata",
    "corporate event hydration"
  ],
  openGraph: {
    title: "HydraTag Studio | Custom Bottle Label Printing in Kolkata",
    description:
      "Premium custom water bottle label printing for weddings, restaurants, and corporate events in Kolkata. Waterproof vinyl labels with fast delivery.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-cover.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} preview`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "HydraTag Studio | Custom Bottle Label Printing in Kolkata",
    description:
      "Premium custom water bottle label printing for weddings, restaurants, and corporate events in Kolkata. Waterproof vinyl labels with fast delivery.",
    images: ["/og-cover.svg"]
  },
  alternates: {
    canonical: siteConfig.url
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: metadata.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/og-cover.svg`,
    telephone: contactDetails.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country
    },
    areaServed: {
      "@type": "City",
      name: siteConfig.city
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude
    },
    sameAs: [siteConfig.whatsapp],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: contactDetails.phone,
      email: contactDetails.email
    }
  };

  return (
    <html lang="en" className={inter.variable}>
      <body className="relative bg-[#050f1c] text-white antialiased">
        <div aria-hidden className="noise-overlay" />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Script id="hydratag-localbusiness" type="application/ld+json">
          {JSON.stringify(structuredData)}
        </Script>
      </body>
    </html>
  );
}

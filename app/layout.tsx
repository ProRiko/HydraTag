import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnalyticsTracker } from "@/components/AnalyticsTracker";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { contactDetails, siteConfig } from "@/lib/constants";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "HydraTag Studio | Custom Bottle Label Printing in Kolkata",
    template: `%s | ${siteConfig.name}`
  },
  description:
    "Premium custom water bottle label printing for weddings, restaurants, and corporate events in Kolkata. Waterproof vinyl labels with fast delivery.",
  manifest: "/manifest.webmanifest",
  themeColor: "#050f1c",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    viewportFit: "cover"
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent"
  },
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
    icon: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: metadata.description ?? siteConfig.description,
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
    priceRange: "₹₹",
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
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', {
                  send_page_view: false
                });
              `}
            </Script>
          </>
        )}
        <div aria-hidden className="noise-overlay" />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <Suspense fallback={null}>
              <AnalyticsTracker />
            </Suspense>
            {children}
          </main>
          <div className="md:hidden h-24" aria-hidden />
          <Footer />
        </div>
        <MobileStickyCta />
        <Script id="hydratag-localbusiness" type="application/ld+json">
          {JSON.stringify(structuredData)}
        </Script>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.tagline} | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "HydraTag Studio",
    "water bottle labels",
    "Kolkata branding",
    "wedding bottle labels",
    "event branding"
  ],
  openGraph: {
    title: `${siteConfig.tagline} | ${siteConfig.name}`,
    description: siteConfig.description,
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
    title: `${siteConfig.tagline} | ${siteConfig.name}`,
    description: siteConfig.description,
    images: ["/og-cover.svg"]
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-brand.mist text-brand.deep">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

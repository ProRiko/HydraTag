import Link from "next/link";
import { navLinks, siteConfig, contactDetails } from "@/lib/constants";

const footerMeta = [
  { label: "Location", value: "Kolkata, West Bengal, India" },
  { label: "Studio Hours", value: contactDetails.hours },
  { label: "Email", value: contactDetails.email, href: `mailto:${contactDetails.email}` },
  { label: "WhatsApp", value: contactDetails.whatsappNumber, href: siteConfig.whatsapp },
  { label: "Phone", value: contactDetails.phone, href: `tel:${contactDetails.phone.replace(/\s+/g, "")}` }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030b16] text-white" role="contentinfo">
      <div className="container grid gap-12 py-16 lg:grid-cols-[1.2fr_0.9fr_1fr]">
        <div>
          <p className="text-xl font-semibold">{siteConfig.name}</p>
          <p className="mt-4 max-w-md text-sm text-white/70">
            Boutique micro-branding studio crafting waterproof bottle labels for Kolkata’s weddings, restaurants, and
            corporate summits.
          </p>
        </div>
        <div className="space-y-4 text-sm text-white/80">
          {footerMeta.map((item) => (
            <div key={item.label}>
              <p className="text-xs uppercase tracking-[0.25em] text-white/50">{item.label}</p>
              {item.href ? (
                <Link href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="mt-1 inline-flex items-center gap-1 text-white/80 hover:text-white">
                  {item.value}
                </Link>
              ) : (
                <p className="mt-1 text-white/80">{item.value}</p>
              )}
            </div>
          ))}
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-white/50">Navigate</p>
          <nav className="mt-3 grid gap-2 text-sm text-white/80" aria-label="Footer">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </nav>
          <p className="mt-6 text-xs uppercase tracking-[0.25em] text-white/50">Connect</p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm text-white/80">
            <Link href={siteConfig.whatsapp} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-1.5 hover:border-white/40">
              WhatsApp Studio
            </Link>
            <Link href={siteConfig.instagram} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-1.5 hover:border-white/40">
              Instagram
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {siteConfig.name}. Crafted with intention in Kolkata.
      </div>
    </footer>
  );
}

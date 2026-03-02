import Link from "next/link";
import { navLinks, siteConfig, contactDetails } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-brand.deep/10 bg-white/70 backdrop-blur">
      <div className="container grid gap-10 py-12 lg:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-brand.deep">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-brand.deep/70">{siteConfig.description}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-brand.deep/80">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand.deep">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="text-sm text-brand.deep/80">
          <p>{contactDetails.email}</p>
          <p className="mt-2">{contactDetails.phone}</p>
          <p className="mt-2">{contactDetails.address}</p>
        </div>
      </div>
      <div className="border-t border-brand.deep/10 py-4 text-center text-xs text-brand.deep/60">
        © {new Date().getFullYear()} {siteConfig.name}. Crafted with intention in Kolkata.
      </div>
    </footer>
  );
}

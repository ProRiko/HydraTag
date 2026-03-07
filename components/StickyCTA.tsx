"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./Button";
import { siteConfig } from "@/lib/constants";

const HIDDEN_ROUTES = new Set(["/contact", "/contact/", "/privacy"]);

export function StickyCTA() {
  const pathname = usePathname() ?? "/";
  const [quoteHref, setQuoteHref] = useState("#instant-quote");

  useEffect(() => {
    if (typeof document === "undefined") return;
    const instantQuoteSection = document.querySelector("#instant-quote");
    setQuoteHref(instantQuoteSection ? "#instant-quote" : "/contact#contact-form");
  }, [pathname]);

  if (HIDDEN_ROUTES.has(pathname)) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-4 md:hidden">
      <div className="pointer-events-auto mx-auto flex max-w-xl items-center gap-3 rounded-2xl border border-white/10 bg-[#030b16]/95 px-4 py-3 shadow-2xl backdrop-blur-2xl">
        <Button
          href={quoteHref}
          className="flex-1 justify-center text-base"
          analytics={{ category: "engagement", action: "mobile_cta_quote", eventId: "sticky-cta-quote" }}
        >
          Get Quote
        </Button>
        <Button
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noreferrer"
          variant="secondary"
          className="flex-1 justify-center text-base"
          analytics={{ category: "engagement", action: "mobile_cta_whatsapp", eventId: "sticky-cta-whatsapp" }}
        >
          WhatsApp
        </Button>
      </div>
    </div>
  );
}

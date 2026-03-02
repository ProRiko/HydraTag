import { Button } from "./Button";
import { siteConfig } from "@/lib/constants";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 md:hidden">
      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#030b16]/95 px-4 py-3 shadow-2xl backdrop-blur-2xl">
        <Button
          href="#instant-quote"
          className="flex-1 justify-center text-base"
          analytics={{ category: "engagement", action: "mobile_cta_quote" }}
        >
          Get Instant Quote
        </Button>
        <Button
          href={siteConfig.whatsapp}
          target="_blank"
          rel="noreferrer"
          variant="secondary"
          className="flex-1 justify-center text-base"
          analytics={{ category: "engagement", action: "mobile_cta_whatsapp" }}
        >
          WhatsApp
        </Button>
      </div>
    </div>
  );
}

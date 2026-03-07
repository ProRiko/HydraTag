"use client";

import { siteConfig } from "@/lib/constants";
import { postStudioEvent, trackEvent } from "@/lib/analytics";

interface FloatingWhatsAppButtonProps {
  label?: string;
}

export function FloatingWhatsAppButton({ label = "floating_whatsapp" }: FloatingWhatsAppButtonProps) {
  return (
    <a
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      onClick={() => {
        trackEvent("engagement", "whatsapp_click", label);
        postStudioEvent({ eventId: `floating-whatsapp-${label}`, category: "engagement", action: "whatsapp_click", label });
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.15-.197.297-.768.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.672-1.617-.921-2.217-.242-.58-.487-.501-.672-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.361.195 1.874.118.571-.085 1.758-.718 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.516-5.276c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.897a9.825 9.825 0 0 1 2.898 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
      </svg>
    </a>
  );
}

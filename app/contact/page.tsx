import type { Metadata } from "next";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/Button";
import { contactDetails, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach HydraTag Studio for quotes, timelines, and waterproof vinyl label production."
};

export default function ContactPage() {
  return (
    <div className="pb-32">
      <SectionWrapper
        eyebrow="Contact"
        title="Let’s brand every drop"
        description="Share the event date, location, and any references. We typically reply within one business day."
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <div className="rounded-3xl border border-brand.deep/10 bg-white/90 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-brand.deep">Studio contact</h3>
            <div className="mt-6 space-y-4 text-sm text-brand.deep/80">
              <p>
                <strong>Email</strong>
                <br />
                {contactDetails.email}
              </p>
              <p>
                <strong>Phone</strong>
                <br />
                {contactDetails.phone}
              </p>
              <p>
                <strong>Address</strong>
                <br />
                {contactDetails.address}
              </p>
            </div>
            <div className="mt-8 rounded-2xl bg-brand.deep/5 p-4 text-sm text-brand.deep/80">
              <p className="font-semibold text-brand.deep">Production windows</p>
              <p className="mt-2">Proofs: 48 hours • Production: 5-7 business days • Pan-India delivery available.</p>
            </div>
            <div className="mt-8">
              <Button href="tel:+919830000000" variant="ghost">
                Call studio
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <a
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
        href={siteConfig.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.15-.197.297-.768.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.672-1.617-.921-2.217-.242-.58-.487-.501-.672-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.361.195 1.874.118.571-.085 1.758-.718 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.516-5.276c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.897a9.825 9.825 0 0 1 2.898 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
        </svg>
      </a>
    </div>
  );
}

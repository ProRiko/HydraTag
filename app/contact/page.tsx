import type { Metadata } from "next";
import { SectionWrapper } from "@/components/SectionWrapper";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/Button";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { contactDetails } from "@/lib/constants";

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
      <FloatingWhatsAppButton />
    </div>
  );
}

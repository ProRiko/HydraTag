"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { eventTypes, siteConfig } from "@/lib/constants";
import { Button } from "./Button";

interface ContactFormValues {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  quantity: number;
  message: string;
  contactMethod: "WhatsApp" | "Phone" | "Email";
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    defaultValues: { contactMethod: "WhatsApp" }
  });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (values: ContactFormValues) => {
    console.log("HydraTag contact form submission", values);
    await new Promise((resolve) => setTimeout(resolve, 400));
    setSubmitted(true);
    reset();
  };

  return (
    <div className="rounded-3xl border border-brand.deep/10 bg-white/90 p-8 shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="text-sm font-medium text-brand.deep">Name *</label>
          <input
            className="mt-2 w-full rounded-2xl border border-brand.deep/20 bg-white px-4 py-3 text-sm focus:border-brand.deep focus:outline-none"
            {...register("name", { required: "Please let us know who to call." })}
            placeholder="Your full name"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-brand.deep">Phone *</label>
            <input
              className="mt-2 w-full rounded-2xl border border-brand.deep/20 bg-white px-4 py-3 text-sm focus:border-brand.deep focus:outline-none"
              {...register("phone", { required: "Phone number helps us confirm delivery windows." })}
              placeholder="+91 98xxx xxxx"
            />
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-brand.deep">Email *</label>
            <input
              type="email"
              className="mt-2 w-full rounded-2xl border border-brand.deep/20 bg-white px-4 py-3 text-sm focus:border-brand.deep focus:outline-none"
              {...register("email", {
                required: "Email lets us share proofs.",
                pattern: {
                  value: /\S+@\S+\.\S+/, // basic safeguard before server validation
                  message: "Please enter a valid email."
                }
              })}
              placeholder="you@email.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-brand.deep">Event Type *</label>
            <select
              className="mt-2 w-full rounded-2xl border border-brand.deep/20 bg-white px-4 py-3 text-sm focus:border-brand.deep focus:outline-none"
              {...register("eventType", { required: true })}
            >
              <option value="">Select an event</option>
              {eventTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {errors.eventType && <p className="mt-1 text-xs text-red-500">Please choose an event type.</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-brand.deep">Quantity *</label>
            <input
              type="number"
              className="mt-2 w-full rounded-2xl border border-brand.deep/20 bg-white px-4 py-3 text-sm focus:border-brand.deep focus:outline-none"
              {...register("quantity", { required: true, min: 50 })}
              placeholder="e.g. 300"
            />
            {errors.quantity && <p className="mt-1 text-xs text-red-500">Minimum order starts at 50 labels.</p>}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-brand.deep">Preferred contact method *</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {["WhatsApp", "Phone", "Email"].map((method) => (
              <label
                key={method}
                className="flex cursor-pointer items-center gap-2 rounded-2xl border border-brand.deep/20 bg-white px-4 py-2 text-sm text-brand.deep/80"
              >
                <input
                  type="radio"
                  value={method}
                  className="accent-brand.aqua"
                  {...register("contactMethod", { required: true })}
                />
                {method}
              </label>
            ))}
          </div>
          {errors.contactMethod && (
            <p className="mt-1 text-xs text-red-500">Let us know the best way to reach you.</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-brand.deep">Message *</label>
          <textarea
            className="mt-2 w-full rounded-2xl border border-brand.deep/20 bg-white px-4 py-3 text-sm focus:border-brand.deep focus:outline-none"
            rows={4}
            placeholder="Share notes about colors, venue, delivery dates..."
            {...register("message", { required: true })}
          />
          {errors.message && <p className="mt-1 text-xs text-red-500">Tell us a bit about your idea.</p>}
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Sending..." : "Send Request"}
        </Button>

        {submitted && (
          <p className="text-center text-sm text-brand.deep/80">
            Thank you! The studio will respond within one business day.
          </p>
        )}
      </form>

      <div className="mt-8 rounded-2xl border border-brand.deep/10 bg-brand.mist px-6 py-5 text-sm text-brand.deep/80">
        <p>
          Prefer WhatsApp? Tap the floating button or message us at <strong>{siteConfig.whatsapp.replace("https://", "")}</strong>.
        </p>
      </div>
    </div>
  );
}

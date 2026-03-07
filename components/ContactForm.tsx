"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { eventTypes, siteConfig } from "@/lib/constants";
import { postStudioEvent, trackEvent } from "@/lib/analytics";
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
  const [serverError, setServerError] = useState<string | null>(null);
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const inputClasses =
    "mt-2 w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand-aqua focus:outline-none focus:ring-2 focus:ring-brand-aqua/40";

  const sanitizeInput = (value: string) => value.replace(/[<>]/g, "").trim();

  const onSubmit = async (values: ContactFormValues) => {
    setServerError(null);
    setServerMessage(null);
    setSubmitted(false);
    const payload = {
      ...values,
      name: sanitizeInput(values.name),
      phone: sanitizeInput(values.phone),
      email: sanitizeInput(values.email),
      eventType: sanitizeInput(values.eventType),
      quantity: Number(values.quantity),
      message: sanitizeInput(values.message)
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => ({ success: false, error: "Server error" }));

      if (!response.ok || !result?.success) {
        throw new Error(result?.error ?? "Submission failed. Please try WhatsApp.");
      }

      trackEvent("contact", "form_submitted", payload.eventType, payload.quantity);
      postStudioEvent({
        eventId: `contact-${Date.now()}`,
        category: "contact",
        action: "form_submitted",
        label: payload.eventType,
        value: payload.quantity,
        context: payload.contactMethod
      });
      setSubmitted(true);
      setServerMessage(result?.message ?? "Thank you! The studio will respond within one business day.");
      reset({ contactMethod: "WhatsApp" });
    } catch (error) {
      console.error("Contact submission error", error);
      const fallbackMessage = error instanceof Error ? error.message : "Something went wrong. Please retry or WhatsApp us.";
      setServerError(fallbackMessage);
    }
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="text-sm font-medium text-white/80">Name *</label>
          <input
            className={inputClasses}
            {...register("name", { required: "Please let us know who to call." })}
            placeholder="Your full name"
          />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-white/80">Phone *</label>
            <input
              className={inputClasses}
              {...register("phone", { required: "Phone number helps us confirm delivery windows." })}
              placeholder="+91 98xxx xxxx"
            />
            {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-white/80">Email *</label>
            <input
              type="email"
              className={inputClasses}
              {...register("email", {
                required: "Email lets us share proofs.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please enter a valid email."
                }
              })}
              placeholder="you@email.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-white/80">Event Type *</label>
            <select
              className="mt-2 w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white focus:border-brand-aqua focus:outline-none focus:ring-2 focus:ring-brand-aqua/40"
              {...register("eventType", { required: true })}
            >
              <option value="">Select an event</option>
              {eventTypes.map((type) => (
                <option key={type} value={type} className="text-brand-deep">
                  {type}
                </option>
              ))}
            </select>
            {errors.eventType && <p className="mt-1 text-xs text-red-400">Please choose an event type.</p>}
          </div>
          <div>
            <label className="text-sm font-medium text-white/80">Quantity *</label>
            <input
              type="number"
              className={inputClasses}
              {...register("quantity", { required: true, min: 50, valueAsNumber: true })}
              placeholder="e.g. 300"
            />
            {errors.quantity && <p className="mt-1 text-xs text-red-400">Minimum order starts at 50 labels.</p>}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-white/80">Preferred contact method *</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {["WhatsApp", "Phone", "Email"].map((method) => (
              <label
                key={method}
                className="flex cursor-pointer items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/80"
              >
                <input
                  type="radio"
                  value={method}
                  className="accent-brand-aqua"
                  {...register("contactMethod", { required: true })}
                />
                {method}
              </label>
            ))}
          </div>
          {errors.contactMethod && (
            <p className="mt-1 text-xs text-red-400">Let us know the best way to reach you.</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-white/80">Message *</label>
          <textarea
            className={`${inputClasses} resize-none`}
            rows={4}
            placeholder="Share notes about colors, venue, delivery dates..."
            {...register("message", { required: true })}
          />
          {errors.message && <p className="mt-1 text-xs text-red-400">Tell us a bit about your idea.</p>}
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Sending..." : "Send Request"}
        </Button>

        {serverError && <p className="text-center text-sm text-red-400">{serverError}</p>}

        {submitted && serverMessage && <p className="text-center text-sm text-white/80">{serverMessage}</p>}
      </form>

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-sm text-white/75 backdrop-blur-xl">
        <p>
          Prefer WhatsApp? Tap the floating button or message us at <strong>{siteConfig.whatsapp.replace("https://", "")}</strong>.
        </p>
      </div>
    </div>
  );
}

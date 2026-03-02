"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { siteConfig } from "@/lib/constants";

export function Hero() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand.deep via-[#07162a] to-[#06253f] text-white shadow-glass">
      <motion.div
        className="floating-shape -left-20 top-10 h-56 w-56 bg-brand.aqua/40"
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="floating-shape bottom-[-40px] right-[-10px] h-72 w-72 bg-white/20"
        animate={{ y: [0, 20, 0], opacity: [0.4, 0.25, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 grid gap-12 px-8 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-16">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-xs uppercase tracking-[0.4em] text-brand.aqua/80">{siteConfig.city} • {siteConfig.tagline}</p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl lg:text-[52px]">
            Custom Water Bottle Labels for Weddings, Restaurants & Corporate Events
          </h1>
          <p className="mt-6 text-base text-white/85 md:text-lg">
            Premium waterproof vinyl labels designed to elevate your brand and impress your guests. Ready in 3–5
            business days for Kolkata and pan-India deliveries.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#instant-quote" variant="primary" className="btn-glow">
              Get Instant Quote
            </Button>
            <Button href={siteConfig.whatsapp} variant="secondary" target="_blank" rel="noreferrer">
              Chat on WhatsApp
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Trusted by Kolkata hosts</p>
          <div className="mt-6 space-y-6 text-white/90">
            {[
              "Heritage weddings needing monogrammed keepsakes",
              "Chef-driven tasting menus with QR-enabled storytelling",
              "Corporate summits demanding on-brand hydration",
              "Private soirées and milestone birthdays"
            ].map((item) => (
              <div key={item} className="flex items-start gap-4">
                <span className="mt-1 h-10 w-10 rounded-full border border-white/30 text-center text-lg leading-10">•</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm text-white/80">
            <p className="font-semibold text-white">WhatsApp-first studio</p>
            <p className="mt-1">Live proofs, delivery tracking, and approvals happen on your preferred channel.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

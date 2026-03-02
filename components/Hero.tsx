"use client";

import { motion } from "framer-motion";
import { Button } from "./Button";
import { siteConfig } from "@/lib/constants";

export function Hero() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-brand.deep text-white shadow-glass">
      <div className="floating-shape -left-10 top-16 h-48 w-48 bg-brand.aqua/40" />
      <div className="floating-shape bottom-0 right-0 h-64 w-64 bg-white/20" />

      <div className="relative z-10 grid gap-12 px-8 py-20 lg:grid-cols-2 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">{siteConfig.tagline}</p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            Brand Every Drop.
          </h1>
          <p className="mt-6 text-base text-white/80 md:text-lg">
            Premium custom bottle label branding for weddings, restaurants, corporate gatherings, and private
            celebrations.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" className="btn-glow">
              Get a Quote
            </Button>
            <Button href="/portfolio" variant="secondary">
              View Samples
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Featured Applications</p>
          <div className="mt-6 space-y-6 text-white/90">
            {[
              "Monogrammed wedding keepsakes",
              "QR-enabled restaurant menus",
              "Executive summit hydration",
              "Playful birthday installations"
            ].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <span className="h-10 w-10 rounded-full border border-white/30 text-center text-lg leading-10">•</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

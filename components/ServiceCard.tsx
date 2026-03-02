"use client";

import { motion } from "framer-motion";
import { Service } from "@/lib/constants";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="gradient-card rounded-2xl border border-brand.deep/5 p-6 shadow-sm"
    >
      <div className="text-3xl">{service.icon}</div>
      <h3 className="mt-6 text-xl font-semibold text-brand.deep">{service.title}</h3>
      <p className="mt-3 text-sm text-brand.deep/70">{service.description}</p>
      <p className="mt-6 text-xs uppercase tracking-[0.3em] text-brand.aqua">{service.subtext}</p>
    </motion.div>
  );
}

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
      className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:bg-white/10"
    >
      <div className="text-3xl">{service.icon}</div>
      <h3 className="mt-6 text-lg font-semibold text-white">{service.title}</h3>
      <p className="mt-3 text-sm text-slate-300">{service.description}</p>
      <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[#00B4D8]">{service.subtext}</p>
    </motion.div>
  );
}

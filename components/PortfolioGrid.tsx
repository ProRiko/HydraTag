"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { PortfolioItem } from "@/lib/constants";

interface PortfolioGridProps {
  items: PortfolioItem[];
  enableFilters?: boolean;
  limit?: number;
}

export function PortfolioGrid({ items, enableFilters = true, limit }: PortfolioGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const categories = useMemo(() => ["All", ...Array.from(new Set(items.map((item) => item.category)))], [items]);

  const visibleItems = useMemo(() => {
    const filtered = activeFilter === "All" ? items : items.filter((item) => item.category === activeFilter);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [items, limit, activeFilter]);

  return (
    <div>
      {enableFilters && (
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                activeFilter === category
                  ? "border-brand.deep bg-brand.deep text-white"
                  : "border-brand.deep/20 text-brand.deep/70 hover:border-brand.deep/60"
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => (
          <motion.button
            type="button"
            key={item.id}
            whileHover={{ translateY: -6 }}
            className="text-left"
            onClick={() => setActiveItem(item)}
          >
            <div className="group overflow-hidden rounded-2xl border border-brand.deep/10 shadow-sm">
              <div className="relative h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-brand.deep/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-full flex-col justify-end gap-1 p-4 text-sm text-white">
                    <p className="text-xs uppercase tracking-[0.3em] text-brand.aqua">{item.eventType}</p>
                    <p className="font-medium">{item.clientType}</p>
                    <p className="text-white/80">{item.quantity.toLocaleString()} bottles</p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-brand.aqua">{item.category}</p>
                <h3 className="mt-2 text-lg font-semibold text-brand.deep">{item.title}</h3>
                <p className="mt-2 text-sm text-brand.deep/70">{item.description}</p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-80 w-full">
                <Image src={activeItem.image} alt={activeItem.title} fill className="object-cover" loading="lazy" />
              </div>
              <div className="p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-brand.aqua">{activeItem.category}</p>
                <h3 className="mt-3 text-2xl font-semibold text-brand.deep">{activeItem.title}</h3>
                <p className="mt-4 text-base text-brand.deep/80">{activeItem.description}</p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-brand.deep/70">
                  <span>Event: {activeItem.eventType}</span>
                  <span>Client: {activeItem.clientType}</span>
                  <span>Qty: {activeItem.quantity.toLocaleString()} bottles</span>
                </div>
                <button className="mt-6 text-sm font-semibold text-brand.deep" onClick={() => setActiveItem(null)}>
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

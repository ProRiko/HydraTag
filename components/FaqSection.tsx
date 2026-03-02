"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { FaqItem } from "@/lib/constants";

type FaqSectionProps = {
  items: FaqItem[];
};

export function FaqSection({ items }: FaqSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        const controlId = `faq-panel-${index}`;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-white shadow-lg backdrop-blur-xl"
          >
            <button
              className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-base font-semibold"
              aria-expanded={isOpen}
              aria-controls={controlId}
              onClick={() => setActiveIndex(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-lg text-white/80"
                aria-hidden
              >
                {isOpen ? "–" : "+"}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key={item.question}
                  id={controlId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-sm text-white/80">
                    <p>{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

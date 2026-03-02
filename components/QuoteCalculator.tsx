"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { eventTypes, siteConfig } from "@/lib/constants";
import { quoteBottleOptions } from "@/lib/data";
import { trackEvent } from "@/lib/analytics";
import { Button } from "./Button";

const BASE_PRICE = 6;
const MINIMUM_ORDER = 50;

type QuoteSummary = {
  unitPrice: number;
  total: number;
};

const PRICING_BREAKPOINTS = [
  { min: 2000, unitPrice: 4.5 },
  { min: 1000, unitPrice: 5 },
  { min: 500, unitPrice: 5.5 }
];

const getUnitPrice = (quantity: number) => {
  const tier = PRICING_BREAKPOINTS.find((breakpoint) => quantity >= breakpoint.min);
  if (tier) return tier.unitPrice;
  if (quantity > 0) return BASE_PRICE;
  return 0;
};

const buildQuoteSummary = (quantity: number): QuoteSummary => {
  const unitPrice = getUnitPrice(quantity);
  return {
    unitPrice,
    total: quantity > 0 ? quantity * unitPrice : 0
  };
};

const formatCurrency = (value: number) => (value ? `₹${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}` : "₹0");

export function QuoteCalculator() {
  const [size, setSize] = useState(quoteBottleOptions[1].size);
  const [eventType, setEventType] = useState(eventTypes[0]);
  const [quantity, setQuantity] = useState(300);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hasTrackedView = useRef(false);

  const { unitPrice, total } = useMemo(() => buildQuoteSummary(quantity), [quantity]);
  const meetsMinimum = quantity >= MINIMUM_ORDER;

  useEffect(() => {
    const element = containerRef.current;
    if (!element || hasTrackedView.current) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          hasTrackedView.current = true;
          trackEvent("engagement", "pricing_section_viewed", "quote_calculator");
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const handleWhatsAppQuote = () => {
    if (!meetsMinimum) return;
    const text = `Hi HydraTag Studio! I need ${quantity} labels for a ${eventType} in size ${size}. Estimated budget: ${formatCurrency(
      total
    )}. Can you confirm availability?`;
    trackEvent("quote", "quote_calculated", `${size}-${eventType}`, total);
    trackEvent("engagement", "whatsapp_click", "quote_calculator");
    window.open(`${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const formattedUnitPrice = unitPrice ? `₹${unitPrice.toFixed(1)}` : "—";
  const formattedTotal = formatCurrency(total);

  return (
    <div ref={containerRef} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="w-full space-y-6 lg:w-1/2">
          <div>
            <label className="text-sm font-medium text-white">Bottle size</label>
            <select
              className="mt-2 w-full rounded-2xl border border-white/15 bg-[#0b1f3a] px-4 py-3 text-sm text-white focus:border-white/40 focus:outline-none"
              value={size}
              onChange={(event) => setSize(event.target.value)}
            >
              {quoteBottleOptions.map((option) => (
                <option key={option.size} value={option.size}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-white">Quantity</label>
            <input
              type="number"
              min={50}
              step={50}
              className="mt-2 w-full rounded-2xl border border-white/15 bg-[#0b1f3a] px-4 py-3 text-sm text-white placeholder-white/40 focus:border-white/40 focus:outline-none"
              value={quantity}
              onChange={(event) => setQuantity(Math.max(0, Number(event.target.value)))}
              placeholder="Enter quantity"
            />
            <p className="mt-2 text-xs text-slate-300/80">
              {meetsMinimum ? "Bulk savings from 500 labels onwards." : "Minimum order starts at 50 labels."}
            </p>
          </div>
          <div>
            <label className="text-sm font-medium text-white">Event type</label>
            <select
              className="mt-2 w-full rounded-2xl border border-white/15 bg-[#0b1f3a] px-4 py-3 text-sm text-white focus:border-white/40 focus:outline-none"
              value={eventType}
              onChange={(event) => setEventType(event.target.value)}
            >
              {eventTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 text-white shadow-inner lg:w-1/2">
          <p className="text-xs uppercase tracking-[0.3em] text-[#00B4D8]">Instant estimate</p>
          <h3 className="mt-4 text-3xl font-semibold">{formattedTotal}</h3>
          <p className="mt-2 text-sm text-slate-300">Price per label: {formattedUnitPrice}</p>
          <p className="mt-4 text-sm text-slate-300">Delivery timeline: 3–5 business days in Kolkata.</p>
          <ul className="mt-6 space-y-2 text-sm text-slate-200">
            <li>• Waterproof vinyl + custom trimming</li>
            <li>• Two design explorations included</li>
            <li>• Priority WhatsApp updates</li>
          </ul>
          <Button className="mt-6 w-full" onClick={handleWhatsAppQuote} disabled={!meetsMinimum}>
            Send Quote on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}

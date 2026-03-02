"use client";

import { useMemo, useState } from "react";
import { eventTypes, quoteBottleOptions, siteConfig } from "@/lib/constants";
import { Button } from "./Button";

const BASE_PRICE = 6;

const getUnitPrice = (quantity: number) => {
  if (quantity >= 2000) return 4.5;
  if (quantity >= 1000) return 5;
  if (quantity >= 500) return 5.5;
  if (quantity > 0) return BASE_PRICE;
  return 0;
};

export function QuoteCalculator() {
  const [size, setSize] = useState(quoteBottleOptions[1].size);
  const [eventType, setEventType] = useState(eventTypes[0]);
  const [quantity, setQuantity] = useState(300);

  const unitPrice = useMemo(() => getUnitPrice(quantity), [quantity]);
  const estimatedTotal = useMemo(() => (quantity > 0 ? quantity * unitPrice : 0), [quantity, unitPrice]);
  const meetsMinimum = quantity >= 50;

  const handleWhatsAppQuote = () => {
    if (!meetsMinimum) return;
    const text = `Hi HydraTag Studio! I need ${quantity} labels for a ${eventType} in size ${size}. Estimated budget: ₹${estimatedTotal.toLocaleString(
      "en-IN"
    )}. Can you confirm availability?`;
    window.open(`${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const formattedUnitPrice = unitPrice ? `₹${unitPrice.toFixed(1)}` : "—";
  const formattedTotal = estimatedTotal ? `₹${estimatedTotal.toLocaleString("en-IN")}` : "₹0";

  return (
    <div className="rounded-3xl border border-brand.deep/10 bg-white/95 p-8 shadow-lg">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="w-full space-y-6 lg:w-1/2">
          <div>
            <label className="text-sm font-medium text-brand.deep">Bottle size</label>
            <select
              className="mt-2 w-full rounded-2xl border border-brand.deep/20 bg-white px-4 py-3 text-sm focus:border-brand.deep focus:outline-none"
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
            <label className="text-sm font-medium text-brand.deep">Quantity</label>
            <input
              type="number"
              min={50}
              step={50}
              className="mt-2 w-full rounded-2xl border border-brand.deep/20 bg-white px-4 py-3 text-sm focus:border-brand.deep focus:outline-none"
              value={quantity}
              onChange={(event) => setQuantity(Math.max(0, Number(event.target.value)))}
              placeholder="Enter quantity"
            />
            <p className="mt-2 text-xs text-brand.deep/60">
              {meetsMinimum ? "Bulk savings from 500 labels onwards." : "Minimum order starts at 50 labels."}
            </p>
          </div>
          <div>
            <label className="text-sm font-medium text-brand.deep">Event type</label>
            <select
              className="mt-2 w-full rounded-2xl border border-brand.deep/20 bg-white px-4 py-3 text-sm focus:border-brand.deep focus:outline-none"
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
        <div className="w-full rounded-3xl border border-brand.deep/10 bg-brand.deep/5 p-6 lg:w-1/2">
          <p className="text-xs uppercase tracking-[0.3em] text-brand.aqua">Instant estimate</p>
          <h3 className="mt-4 text-3xl font-semibold text-brand.deep">{formattedTotal}</h3>
          <p className="mt-2 text-sm text-brand.deep/70">Price per label: {formattedUnitPrice}</p>
          <p className="mt-4 text-sm text-brand.deep/70">Delivery timeline: 3–5 business days in Kolkata.</p>
          <ul className="mt-6 space-y-2 text-sm text-brand.deep/80">
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

"use client";

import { useEffect, useRef } from "react";
import { postStudioEvent } from "@/lib/analytics";

type AnalyticsWaypointProps = {
  eventId: string;
  category: string;
  action?: string;
  label?: string;
  threshold?: number;
  once?: boolean;
  context?: string;
};

export function AnalyticsWaypoint({
  eventId,
  category,
  action = "impression",
  label,
  threshold = 0.5,
  once = true,
  context
}: AnalyticsWaypointProps) {
  const hasSent = useRef(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (hasSent.current) return undefined;
    const element = elementRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some((entry) => entry.isIntersecting);
        if (!isVisible) return;

        postStudioEvent({
          eventId,
          category,
          action,
          label,
          type: "impression",
          context
        });

        if (once) {
          hasSent.current = true;
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [action, category, context, eventId, label, threshold, once]);

  return <div aria-hidden ref={elementRef} className="absolute left-0 top-0 h-px w-px opacity-0" />;
}

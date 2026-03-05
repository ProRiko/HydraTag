declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export type StudioEventPayload = {
  eventId: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  type?: "click" | "impression" | "view";
  context?: string;
};

const ANALYTICS_ENDPOINT = "/api/analytics";

export const trackPageview = (url: string) => {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url
  });
};

export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID) {
    return;
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value
    });
  } else if (process.env.NODE_ENV === "development") {
    console.debug("[Analytics]", { category, action, label, value });
  }
};

export const withAnalytics = <T extends (...args: never[]) => void>(fn: T, analyticsArgs: {
  category: string;
  action: string;
  label?: string;
  value?: number;
}) => {
  return (...args: Parameters<T>) => {
    trackEvent(analyticsArgs.category, analyticsArgs.action, analyticsArgs.label, analyticsArgs.value);
    fn(...args);
  };
};

export const postStudioEvent = (payload: StudioEventPayload) => {
  if (typeof window === "undefined") return;
  const body = JSON.stringify(payload);

  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon(ANALYTICS_ENDPOINT, body);
      return;
    }
  } catch (error) {
    console.warn("[Analytics] beacon failed", error);
  }

  fetch(ANALYTICS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true
  }).catch(() => {
    /* no-op */
  });
};

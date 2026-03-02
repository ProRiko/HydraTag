"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { trackEvent } from "@/lib/analytics";

const baseStyles = "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transform";

const variants: Record<string, string> = {
  primary:
    "bg-[#00B4D8] text-[#031526] shadow-lg shadow-[#00B4D8]/40 hover:bg-[#0096C7] hover:shadow-[#0096C7]/40 hover:-translate-y-0.5 hover:scale-[1.02] focus-visible:outline-[#00B4D8]",
  secondary:
    "border border-white/30 bg-transparent text-white shadow-inner hover:border-white/60 hover:bg-white/10 focus-visible:outline-white/60",
  ghost:
    "bg-transparent text-brand.deep border border-brand.deep/40 hover:border-brand.deep hover:bg-brand.deep/5 focus-visible:outline-brand.deep"
};

type AnalyticsMeta = {
  category: string;
  action: string;
  label?: string;
  value?: number;
};

type BaseProps = {
  variant?: keyof typeof variants;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  analytics?: AnalyticsMeta;
};

type ButtonOnlyProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type AnchorOnlyProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonOnlyProps | AnchorOnlyProps;

export function Button({ children, className, variant = "primary", href, icon, analytics, ...rest }: ButtonProps) {
  const classes = clsx(baseStyles, variants[variant], className);

  const emitAnalytics = () => {
    if (analytics) {
      trackEvent(analytics.category, analytics.action, analytics.label, analytics.value);
    }
  };

  if (href) {
    const { onClick, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <Link
        href={href}
        className={classes}
        {...anchorProps}
        onClick={(event) => {
          emitAnalytics();
          onClick?.(event);
        }}
      >
        <span>{children}</span>
        {icon}
      </Link>
    );
  }

  const { type, onClick, ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      type={type ?? "button"}
      className={classes}
      {...buttonRest}
      onClick={(event) => {
        emitAnalytics();
        onClick?.(event);
      }}
    >
      <span>{children}</span>
      {icon}
    </button>
  );
}

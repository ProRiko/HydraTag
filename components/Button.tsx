"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<string, string> = {
  primary:
    "bg-brand.aqua text-brand.deep hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand.aqua/40 focus-visible:outline-brand.aqua",
  secondary:
    "bg-white/10 text-white border border-white/20 hover:bg-white/20 focus-visible:outline-white",
  ghost:
    "bg-transparent text-brand.deep border border-brand.deep/30 hover:border-brand.deep hover:bg-brand.deep/5 focus-visible:outline-brand.deep"
};

type BaseProps = {
  variant?: keyof typeof variants;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
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

export function Button({ children, className, variant = "primary", href, icon, ...rest }: ButtonProps) {
  const classes = clsx(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        <span>{children}</span>
        {icon}
      </Link>
    );
  }

  const { type, ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button type={type ?? "button"} className={classes} {...buttonRest}>
      <span>{children}</span>
      {icon}
    </button>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { navLinks, siteConfig } from "@/lib/constants";
import { Button } from "./Button";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand.deep/80 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold tracking-wide text-white">
          HydraTag <span className="text-brand.aqua">Studio</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx("transition-colors hover:text-white", {
                "text-white": pathname === link.href
              })}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary">
            Get a Quote
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-brand.aqua lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Open menu</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 6h12M4 10h12M4 14h12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-white/10 bg-brand.deep/95 lg:hidden"
          >
            <div className="container flex flex-col gap-6 py-6 text-base font-medium text-white/90">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Button href="/contact" variant="primary" className="w-full">
                {siteConfig.tagline}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

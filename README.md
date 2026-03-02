# HydraTag Studio

Premium Next.js 14 website for HydraTag Studio, a Kolkata-based branding startup specializing in custom water bottle labels for events and businesses.

## Stack

- Next.js 14 App Router with TypeScript
- Tailwind CSS with custom design tokens
- Framer Motion animations
- React Hook Form contact flow
- pnpm for dependency management

## Features

- Fully responsive hero, services, process, portfolio, testimonials, and CTA blocks
- Dedicated Services, Portfolio, About, and Contact routes
- Portfolio gallery with hover + modal interactions and category filters
- Contact form with validation (console-ready for backend integration)
- WhatsApp floating action button
- SEO metadata + Open Graph cover

## Getting Started

```bash
pnpm install
pnpm dev
```

## Production Build

```bash
pnpm build
pnpm start
```

## Linting

```bash
pnpm lint
```

## Design System

- Colors: Deep Blue `#0A2540`, Aqua `#00B4D8`, Mist Gray Sections
- Typography: Inter via `next/font`
- Components: Navbar, Footer, Hero, ServiceCard, PortfolioGrid, ContactForm, SectionWrapper, Button

## Future Ready

- Clean `lib/constants.ts` for nav/services/portfolio data
- Architecture ready to plug in MongoDB, Stripe, and admin dashboard modules
- Metadata and structure optimized for Lighthouse + SEO

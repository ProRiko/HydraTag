# HydraTag Studio

Premium Next.js 14 website for HydraTag Studio, a Kolkata-based branding startup specializing in custom water bottle labels for events and businesses.

## Stack

- Next.js 14 App Router with TypeScript
- Tailwind CSS with custom design tokens
- Framer Motion micro-interactions
- React Hook Form contact flow
- Sanity CMS (read-only) + Supabase analytics pipeline
- Playwright + Lighthouse CI for automated testing

## Features

- CMS-backed Services, Portfolio, Testimonials, Trust, and FAQ content with Sanity fallbacks
- Structured lead capture + CTA tracking persisted to Supabase and surfaced via `/admin/analytics`
- Portfolio detail pages (`/portfolio/[slug]`) for shareable case studies
- Accessibility upgrades: skip-link, semantic headings, keyboard-friendly portfolio grid
- Safe-area aware mobile CTA banner + Android installable manifest
- Automated end-to-end + performance testing (`pnpm test:ci`)

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

## Commands

| Script | Purpose |
| --- | --- |
| `pnpm dev` | Start local dev server |
| `pnpm build` | Production build |
| `pnpm start` | Run production build |
| `pnpm lint` | ESLint checks |
| `pnpm test:e2e` | Playwright smoke tests |
| `pnpm test:perf` | Lighthouse assertions |
| `pnpm test:ci` | Spins dev server, runs Playwright + Lighthouse |

> After installing dependencies locally, run `npx playwright install` once to download browsers.

## Environment Variables

| Name | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_GA_ID` | Optional | GA4 measurement ID for marketing analytics |
| `SANITY_PROJECT_ID` | Recommended | Sanity project ID (read access) |
| `SANITY_DATASET` | Recommended | Sanity dataset name |
| `SANITY_API_VERSION` | Optional | Defaults to `2023-10-01` |
| `SANITY_READ_TOKEN` | Optional | Needed for private datasets |
| `SUPABASE_URL` | Recommended | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Recommended | Service role key for server inserts |
| `ADMIN_DASHBOARD_USER` | Optional | Username for basic-auth protecting `/admin/*` |
| `ADMIN_DASHBOARD_PASSWORD` | Optional | Password counterpart |
| `RESEND_API_KEY` | Required for contact form | API key used by `/api/contact` to send notifications |
| `RESEND_FROM_EMAIL` | Optional | Custom from/sender identity for contact emails |
| `CONTACT_NOTIFICATION_EMAIL` | Optional | Destination inbox for new inquiries |

### Supabase Schema

Create two tables and one RPC helper:

```sql
create table if not exists leads (
	id uuid primary key default gen_random_uuid(),
	name text,
	phone text,
	email text,
	event_type text,
	quantity int,
	message text,
	contact_method text,
	page_path text,
	created_at timestamptz default now()
);

create table if not exists engagement_events (
	id uuid primary key default gen_random_uuid(),
	event_id text,
	category text,
	action text,
	label text,
	value numeric,
	event_type text,
	context text,
	page_path text,
	user_agent text,
	created_at timestamptz default now()
);

create or replace function analytics_lead_counts()
returns jsonb as $$
	select jsonb_build_object(
		'total_leads', (select count(*) from leads),
		'last7_days_leads', (select count(*) from leads where created_at > now() - interval '7 days'),
		'cta_clicks', (select count(*) from engagement_events where action = 'cta_click'),
		'calculator_views', (select count(*) from engagement_events where action = 'pricing_section_viewed')
	);
$$ language sql stable;
```

### Sanity Content Types

Define document types for `service`, `portfolio`, `testimonial`, `trustPoint`, `authorityHighlight`, `faq`, `labelSize`, and `printingOption` with the fields mirrored in `lib/cms.ts`. The site automatically falls back to the local seed data when Sanity credentials are missing.

## Analytics Dashboard

- Navigate to `/admin/analytics` (requires `ADMIN_DASHBOARD_*` credentials via HTTP basic-auth).
- Cards display totals from Supabase RPC + live tables.
- When Supabase is not configured a setup hint is shown instead of an error.

## Testing

```bash
pnpm test:e2e   # Run Playwright specs
pnpm test:perf  # Lighthouse assertions
pnpm test:ci    # Combined server + tests (used for CI pipelines)
```

## Design System

- Colors: Deep Blue `#0A2540`, Aqua `#00B4D8`, Mist Gray Sections
- Typography: Inter via `next/font`
- Components: Navbar, Footer, Hero, ServiceCard, PortfolioGrid, ContactForm, SectionWrapper, Button
```

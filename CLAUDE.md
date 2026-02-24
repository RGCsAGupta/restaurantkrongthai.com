# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Main marketing website for **Krong Thai Restaurant** — authentic Thai, Vietnamese & Cambodian cuisine in Gatineau, QC. Bilingual (EN/FR) site with landing pages, menu, catering services, gallery, and contact forms. Live at `restaurantkrongthai.com`.

## Commands

```bash
npm run dev       # Astro dev server at http://localhost:4321/
npm run build     # Production build to dist/
npm run preview   # Preview production build
```

## Tech Stack

- **Astro 5** — hybrid output (static pages + server API routes)
- **Tailwind CSS 4** — via `@tailwindcss/vite` plugin (NOT `@astrojs/tailwind`)
- **TypeScript** — strict mode
- **Vercel** — hosting with serverless functions for form endpoints
- **Resend** — transactional email for contact/catering forms
- No frontend framework (React/Vue/Svelte) — pure Astro components + vanilla JS

## Architecture

### i18n

Path-based routing with `prefixDefaultLocale: true` — all pages require a locale prefix:
- `/en/` and `/fr/`
- French uses translated slugs: `catering` → `traiteur`, `specials` → `speciaux`, `thanks` → `merci`, `about` → `a-propos`, `gallery` → `galerie`, `privacy` → `confidentialite`, `accessibility` → `accessibilite`

Translation files: `src/i18n/en.ts` and `src/i18n/fr.ts` — flat TypeScript objects.
Helpers in `src/i18n/utils.ts`: `t(locale)` returns translations, `localizedPath(locale, slug)` builds correct URLs with slug mapping.

### Pages

| EN path | FR path | Purpose |
|---------|---------|---------|
| `/en/` | `/fr/` | Landing page (hero, social proof, featured dishes, combo, order CTAs) |
| `/en/menu/` | `/fr/menu/` | Full restaurant menu |
| `/en/catering/` | `/fr/traiteur/` | Catering services, menus, pricing, inquiry form |
| `/en/specials/` | `/fr/speciaux/` | Combo deals and seasonal promotions |
| `/en/about/` | `/fr/a-propos/` | Restaurant story and team |
| `/en/gallery/` | `/fr/galerie/` | Photo gallery |
| `/en/contact/` | `/fr/contact/` | Contact info, amenities, message form |
| `/en/privacy/` | `/fr/confidentialite/` | Privacy policy |
| `/en/accessibility/` | `/fr/accessibilite/` | Accessibility statement |
| `/en/thanks/` | `/fr/merci/` | Form submission confirmation |
| `/` | — | Root redirect to `/fr/` |
| `404` | — | Locale-aware 404 page |

### API Routes

Server-side endpoints (Vercel serverless functions):
- `src/pages/api/contact.ts` — Contact form handler (sends email via Resend)
- `src/pages/api/catering.ts` — Catering inquiry handler (sends email via Resend)

Both use `export const prerender = false` and redirect to locale-specific thank-you pages.

### Key Files

- `src/data/business.ts` — Restaurant contact info, ordering URLs, delivery platform links
- `src/styles/global.css` — Tailwind 4 `@theme` with brand tokens (colors, fonts, shadows)
- `src/layouts/MarketingLayout.astro` — Single layout wrapping all pages
- `src/components/Head.astro` — SEO meta, hreflang, JSON-LD structured data, OG/Twitter cards
- `src/components/CateringForm.astro` — Catering inquiry form (POSTs to `/api/catering`)

### Brand Tokens (in `@theme`)

- Krong Red: `#E31B23`, Golden Saffron: `#D4AF37`, Jade Green: `#008BB8`
- Display font: `Berlin Sans FB Demi` (`font-display`)
- Body font: `Inter` (`font-body`)
- Dark surfaces: `surface-dark` (#0A0A0A), `surface-card` (#141414)

### Forms

Contact and catering forms POST to Vercel serverless API routes:
- `/api/contact` — name, email, phone, message
- `/api/catering` — name, email, phone, date, guests, message
- Emails sent via **Resend** to `restaurantkrongthai@gmail.com`
- `RESEND_API_KEY` environment variable required (set in Vercel dashboard)
- On success: redirects to locale-specific thank-you page
- On error: redirects back with `?error=missing` or `?error=send` query param

### Deployment

- **Hosting**: Vercel (auto-deploys from `main` branch on GitHub)
- **Domain**: `restaurantkrongthai.com` (DNS via Cloudflare, DNS-only/grey cloud)
- **Adapter**: `@astrojs/vercel` in `astro.config.mjs`
- **Environment variables**: `RESEND_API_KEY` (set in Vercel project settings)
- **Headers/redirects**: `vercel.json` (cache control, security headers, `/promo/*` legacy redirects)

## Conventions

- All images served from `/images/`
- WCAG 2.1 AA: 44x44px touch targets, focus-visible outlines, skip-to-content link, reduced-motion support
- Each new page needs both EN and FR versions with matching translations in `src/i18n/`
- No `base` path in astro.config — site serves from root
- XSS protection: all user inputs in API routes are escaped via `escapeHtml()` before inclusion in email HTML

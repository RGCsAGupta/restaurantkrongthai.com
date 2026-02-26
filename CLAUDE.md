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
- **Cloudflare** — DNS proxy with Full (Strict) SSL/TLS
- **Microsoft Clarity** — heatmaps & session recordings (project ID: `vmmvlbgflf`)
- No frontend framework (React/Vue/Svelte) — pure Astro components + vanilla JS

## Architecture

### i18n

Path-based routing with `prefixDefaultLocale: true` — all pages require a locale prefix:
- `/en/` and `/fr/`
- French uses translated slugs: `catering` → `traiteur`, `specials` → `speciaux`, `thanks` → `merci`, `about` → `a-propos`, `gallery` → `galerie`, `privacy` → `confidentialite`, `accessibility` → `accessibilite`
- Slug mapping defined in `src/i18n/utils.ts` (`slugMap` / `reverseSlugMap`) — also duplicated in `astro.config.mjs` for sitemap hreflang generation
- hreflang tags use `en-CA` / `fr-CA` (not bare `en` / `fr`) — must be consistent between HTML `<link>` tags in `Head.astro` and sitemap `xhtml:link` entries

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
| `/en/thanks/` | `/fr/merci/` | Form submission confirmation (noindex) |
| `/` | — | 301 redirect to `/fr/` |
| `/review` | `/avis` | 307 redirect to Google review form |
| `404` | — | Locale-aware 404 page |

### API Routes

Server-side endpoints (Vercel serverless functions):
- `src/pages/api/contact.ts` — Contact form handler (sends email via Resend)
- `src/pages/api/catering.ts` — Catering inquiry handler (sends email via Resend)

Both use `export const prerender = false` and redirect to locale-specific thank-you pages. Both include honeypot spam protection and email validation.

### Key Files

- `src/data/business.ts` — Single source of truth for restaurant info, social links, delivery URLs, Google Place ID
- `src/styles/global.css` — Tailwind 4 `@theme` with brand tokens, composited animations (pulse-cta, shimmer)
- `src/layouts/MarketingLayout.astro` — Single layout wrapping all pages, deferred scroll-reveal observer
- `src/components/Head.astro` — SEO meta, hreflang (en-CA/fr-CA), JSON-LD structured data, OG/Twitter cards, font preloading, Microsoft Clarity tracking, dynamic noindex for thank-you pages
- `src/components/CateringForm.astro` — Catering inquiry form (POSTs to `/api/catering`)
- `src/i18n/utils.ts` — Locale helpers, slug mapping (exported for use in Head.astro and astro.config.mjs)
- `astro.config.mjs` — Sitemap config with `serialize` callback for hreflang on all translated slug pairs, filters out thank-you pages
- `vercel.json` — Cache headers, security headers, redirects (root, review, legacy /promo)

### Brand Tokens (in `@theme`)

- Krong Red: `#E31B23`, Golden Saffron: `#D4AF37`, Jade Green: `#008BB8`
- Display font: `Playfair Display` (`font-display`) — self-hosted woff2
- Body font: `DM Sans` (`font-body`) — self-hosted woff2
- Dark surfaces: `night-950` (#050505), `night-900` (#0A0A0A)

### Forms

Contact and catering forms POST to Vercel serverless API routes:
- `/api/contact` — name, email, phone, message
- `/api/catering` — name, email, phone, date, guests, message
- Honeypot field (`website`) rejects bots silently
- Emails sent via **Resend** to `restaurantkrongthai@gmail.com`
- `RESEND_API_KEY` environment variable required (set in Vercel dashboard)
- On success: redirects to locale-specific thank-you page
- On error: redirects back with `?error=missing` or `?error=send` query param

### SEO

- **Sitemap**: `astro.config.mjs` generates sitemap with hreflang `xhtml:link` for all 9 EN/FR page pairs using `serialize` callback. Thank-you pages are filtered out.
- **hreflang**: `en-CA` / `fr-CA` in both HTML `<link>` tags and sitemap — must stay consistent
- **JSON-LD**: Restaurant schema (no aggregateRating — Google rejects self-declared ratings), WebSite, WebPage, BreadcrumbList, FAQPage (contact), Menu (menu page)
- **robots.txt**: `public/robots.txt` with sitemap reference
- **Canonical URLs**: All use `https://restaurantkrongthai.com` (no www) — Vercel primary domain is bare, www redirects
- **noindex**: Thank-you pages (`canonicalPath === "thanks" || canonicalPath === "merci"`)
- **Google Place ID**: `ChIJu476UxUbzkwRSV2u84dWyWk` — used in `/review` and `/avis` redirects

### Performance

- **PageSpeed scores**: Mobile 97, Desktop 100 (100/100/100 for Accessibility, Best Practices, SEO)
- **Fonts**: Self-hosted Playfair Display + DM Sans with `font-display: swap`, preloaded in Head.astro
- **Images**: All optimized (WebP + JPG fallback via `<picture>`), directory ~20MB total
- **Animations**: All composited (opacity/transform only) — pulse-cta uses pseudo-element opacity, shimmer uses translateX
- **CLS fixes**: Fixed-height hero container, Tailwind `h-16` on header, font preloading
- **TBT**: Deferred scroll-reveal observer with `requestAnimationFrame`, `scrollIntoView({ behavior: 'auto' })`
- **Caching**: Immutable 1yr for `/images/`, `/fonts/`, `/_astro/`; 1day with stale-while-revalidate for pages

### Deployment

- **Hosting**: Vercel (auto-deploys from `main` branch on GitHub)
- **CDN/DNS**: Cloudflare proxy (orange cloud) with Full (Strict) SSL/TLS
- **Domain**: `restaurantkrongthai.com` is primary on Vercel, `www` redirects to bare
- **Adapter**: `@astrojs/vercel` in `astro.config.mjs`
- **Environment variables**: `RESEND_API_KEY` (set in Vercel project settings)
- **Headers/redirects**: `vercel.json` (cache control, security headers, review redirects, `/promo/*` legacy redirects)
- **Search engines**: Google Search Console + Bing Webmaster Tools configured, sitemaps submitted
- **Analytics**: Microsoft Clarity (project `vmmvlbgflf`) — loaded async in Head.astro

### External Links (all in `business.ts`)

| Service | URL |
|---------|-----|
| Ordering | `krongthai.order-online.ai` |
| Facebook | `facebook.com/restaurantkrongthai` |
| Instagram | `instagram.com/restaurantkrongthai` |
| TripAdvisor | `tripadvisor.ca/Restaurant_Review-g182166-d4852692-...` |
| Yelp | `yelp.ca/biz/krong-thai-gatineau-2` |
| UberEats | `ubereats.com/ca/store/restaurant-krong-thai/lJfuf...` |
| DoorDash | `doordash.com/en-CA/store/28750609` |
| SkipTheDishes | `skipthedishes.com/restaurant-krong-thai` |
| Google Maps | Place ID `ChIJu476UxUbzkwRSV2u84dWyWk` |

### Menu Strategy

The website menu is currently synced 1:1 with the physical restaurant menu (68 items, 10 categories). This is **temporary**. The long-term goal is a streamlined, curated menu (~30 best sellers, 6 categories, flat pricing, no item codes).

- **`docs/menu-current-pdf.md`** — Full physical restaurant menu (what's live now). Temporary.
- **`docs/menu-old-website.md`** — Streamlined future target menu. Switch to this once the physical menu is updated to match.
- **`src/data/menu.ts`** — Source of truth for the website. Currently contains the full PDF menu.

When switching back to the streamlined menu: rewrite `menuCategories` in `menu.ts` using `docs/menu-old-website.md` as the blueprint, update prices in i18n files, and update combo banner in both menu pages.

## Conventions

- All images served from `/images/` with WebP + JPG fallback
- All external links centralized in `src/data/business.ts` — never hardcode URLs elsewhere
- WCAG 2.1 AA: 44x44px touch targets, focus-visible outlines, skip-to-content link, reduced-motion support
- Each new page needs both EN and FR versions with matching translations in `src/i18n/`
- Add new slug mappings to BOTH `src/i18n/utils.ts` AND `astro.config.mjs` slugMap
- No `base` path in astro.config — site serves from root
- XSS protection: all user inputs in API routes are escaped via `escapeHtml()` before inclusion in email HTML
- CSS animations must be composited (opacity/transform only) — avoid animating box-shadow, background-position, or using expensive CSS attribute selectors
- Do not add `aggregateRating` to JSON-LD — Google rejects self-declared ratings for restaurants

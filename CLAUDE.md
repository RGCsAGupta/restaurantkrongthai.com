# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Conversion-optimized marketing hub for **Krong Thai Restaurant** — a separate site from the main restaurant website (`krong-thai-website`). Serves as ad landing pages, catering promotion, and specials hub. Deploys under `krongthairestaurant.ca/promo/`.

## Commands

```bash
npm run dev       # Astro dev server at http://localhost:4321/promo/
npm run build     # Static build to dist/
npm run preview   # Preview production build
```

## Tech Stack

- **Astro 5** — static site generation, zero JS by default
- **Tailwind CSS 4** — via `@tailwindcss/vite` plugin (NOT `@astrojs/tailwind`)
- **TypeScript** — strict mode
- **Netlify** — static hosting, forms, redirects
- No frontend framework (React/Vue/Svelte) — pure Astro components + vanilla JS

## Architecture

### i18n

Path-based routing with `prefixDefaultLocale: true` — all pages require a locale prefix:
- `/promo/en/` and `/promo/fr/`
- French uses translated slugs: `catering` → `traiteur`, `specials` → `speciaux`, `thanks` → `merci`

Translation files: `src/i18n/en.ts` and `src/i18n/fr.ts` — flat TypeScript objects.
Helpers in `src/i18n/utils.ts`: `t(locale)` returns translations, `localizedPath(locale, slug)` builds correct URLs with slug mapping.

### Pages

| EN path | FR path | Purpose |
|---------|---------|---------|
| `/promo/en/` | `/promo/fr/` | Landing page (hero, social proof, value props, featured dishes, combo, order CTAs) |
| `/promo/en/catering/` | `/promo/fr/traiteur/` | Catering services, menus, pricing, inquiry form |
| `/promo/en/specials/` | `/promo/fr/speciaux/` | Combo deals and seasonal promotions |
| `/promo/en/thanks/` | `/promo/fr/merci/` | Form submission confirmation |

### Key Files

- `src/data/business.ts` — Restaurant contact info, ordering URLs, delivery platform links
- `src/styles/global.css` — Tailwind 4 `@theme` with brand tokens (colors, fonts, shadows)
- `src/layouts/MarketingLayout.astro` — Single layout wrapping all pages
- `src/components/Head.astro` — SEO meta, hreflang, JSON-LD structured data
- `src/components/CateringForm.astro` — Netlify Forms integration with honeypot spam protection

### Brand Tokens (in `@theme`)

- Krong Red: `#E31B23`, Golden Saffron: `#D4AF37`, Jade Green: `#008BB8`
- Display font: `Berlin Sans FB Demi` (`font-display`)
- Body font: `Inter` (`font-body`)
- Dark surfaces: `surface-dark` (#0A0A0A), `surface-card` (#141414)

### Forms

Catering inquiry uses **Netlify Forms** — no JS required:
- `data-netlify="true"` on the `<form>` element
- Hidden `form-name` input for Netlify detection
- Honeypot field (`bot-field`) for spam protection
- Redirects to locale-specific thank-you page

## Conventions

- All images served from `/promo/images/` (base path prefix required)
- WCAG 2.1 AA: 44x44px touch targets, focus-visible outlines, skip-to-content link, reduced-motion support
- Each new page needs both EN and FR versions with matching translations in `src/i18n/`
- `base: "/promo"` in astro.config — all asset paths must include `/promo/` prefix

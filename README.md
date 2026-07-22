# COFFEE ROOTS — Portfolio Redesign Concept

A trilingual (EN / RU / KZ), fully static marketing site for a specialty
coffee shop in Almaty, Kazakhstan — built as an independent portfolio
redesign concept. **Not the official website of COFFEE ROOTS** (official
Instagram: [@coffeeroots.kz](https://www.instagram.com/coffeeroots.kz)).

## Highlights

- **Next.js 15** (App Router, static export), **TypeScript strict**, **Tailwind v4**, **shadcn/ui**, **Motion**
- **Client-side i18n** — EN/RU/KZ with lazy-loaded message files, localStorage persistence, and a key-parity check script; Kazakh glyphs covered via `cyrillic-ext` subsets of Manrope/Inter
- **Filterable menu** (26 items, 6 categories), masonry **gallery with keyboard-accessible lightbox**, **reservations + contact forms** (react-hook-form + zod, validation messages that re-translate live)
- **Official photography supplied by the café owners**, cropped and optimized for the web by [`scripts/process-owner-photos.mjs`](scripts/process-owner-photos.mjs) (EXIF, including GPS, is stripped on export)
- **SEO**: per-route metadata, Open Graph, `CafeOrCoffeeShop` JSON-LD, sitemap, robots
- **A11y**: skip link, focus management, aria-labelled controls, `prefers-reduced-motion` respected throughout

## Development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export → out/
node scripts/check-translations.mjs   # i18n key parity
```

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the static export with the correct base path and publishes to
**GitHub Pages** (enable Pages → Source: GitHub Actions in repo settings).

## Project documents

- [SPEC.md](SPEC.md) — the master build spec (phases, standards, constraints)
- [CLAUDE.md](CLAUDE.md) — project conventions
- [PHOTOGRAPHY_BRIEF.md](PHOTOGRAPHY_BRIEF.md) / [IMAGE_PROMPTS.md](IMAGE_PROMPTS.md) — art direction and the prompt package behind the image set

## Legal

Photography © COFFEE ROOTS — supplied by the café owners for use in this
project. Original files are not committed to this repository; regenerate the
web set with `PHOTOS_SRC=/path/to/originals node scripts/process-owner-photos.mjs`.

Reviews and story copy remain illustrative placeholders pending the owners'
own wording. The footer carries the portfolio disclaimer on every page — see
SPEC.md §0 before removing it.

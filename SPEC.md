# COFFEE ROOTS — Portfolio Redesign Concept — Master Spec

> How to use this document: don't paste it all as one instruction and expect a finished site. Reference it phase by phase — build, review, then move on. This is a source of truth, not a single prompt to fire and forget.

## 0. Legal / Framing Constraints (non-negotiable)

- This is an independent portfolio redesign concept, not the official Coffee Roots website.
- No copyrighted or scraped photos of the real business — placeholder / AI-generated generic coffee-shop photography only.
- Footer must include, verbatim: "This website is an independent portfolio redesign concept created for demonstration purposes. It is not the official website of COFFEE ROOTS."

## 1. Business Reference Data

| Field | Value |
|---|---|
| Name | COFFEE ROOTS |
| Location | Bogenbai Batyr Street, Almaty, Kazakhstan |
| Rating | 4.9 ★ (17 reviews) |
| Price range | 1,000–4,000 ₸ |
| Services | Dine-in, Takeaway, Delivery |
| Personality | Modern, minimalist, cozy, premium, warm, remote-work friendly, specialty coffee, natural lighting, comfortable atmosphere |

## 2. Tech Stack

- Next.js 15 (App Router), TypeScript (strict mode)
- Tailwind CSS
- Framer Motion
- shadcn/ui
- next/image for all imagery — lazy loading, code splitting
- Metadata API for SEO — per-route metadata exports, OpenGraph, LocalBusiness structured data

## 3. Folder Structure

```
/app
  /(marketing)
    /about /menu /gallery /reservations /contact
  page.tsx (home)
  layout.tsx
/components
  /ui
  /layout
  /sections
/lib
/hooks
/public/images
/styles
/types
```

## 4. Design System

### Colors (CSS variables)

- `--cream` — background base
- `--warm-beige` — secondary surfaces
- `--coffee-brown` — primary text / accents
- `--charcoal` — dark mode base / headings
- `--caramel` — accent (CTAs, hover states, active links)

### Typography

Manrope or Plus Jakarta Sans for headings, Inter for body — load via next/font/google.

### Aesthetic

Scandinavian luxury minimalism, warm wood textures, generous whitespace, subtle glassmorphism (frosted nav on scroll, modal backdrops) — not overused.

### Dark mode

Class-based (next-themes), charcoal/coffee-brown dominant, caramel accent stays consistent across both modes.

## 5. Pages & Required Content

### Home
Hero (headline + CTA) → Featured drinks → Short brand story → Review highlights → Instagram preview grid → Location teaser → Footer.

### About
Founding story (fictional, realistic), mission, values, sourcing philosophy (direct trade, single-origin rotations), interior design philosophy (natural light, reclaimed wood, quiet remote-work corners).

### Menu
Categories: Coffee, Tea, Pastries, Desserts, Breakfast, Lunch. Each item: name, description, price (₸). Stylish shadcn Card components, filterable by category.

### Gallery
Pinterest-style masonry grid, hover zoom/overlay, lightbox with Framer Motion scale/fade transition. Placeholder images only.

### Reservations
Form: name, contact, date picker, time selector, guest count. Client-side validation (zod + react-hook-form). On submit → confirmation modal (mock submission, no real backend).

### Contact
Opening hours table, address, placeholder email, Instagram link, embedded Google Maps placeholder, contact form.

## 6. Shared Components

- Sticky navbar (transparent → frosted on scroll)
- Animated hamburger (Framer Motion morph icon)
- Floating action button (e.g. "Reserve a table")
- Testimonials carousel
- FAQ accordion (shadcn Accordion)
- Newsletter signup section
- Animated counters (years open, cups served, etc.)
- Footer — sitemap, social links, portfolio notice
- Loading screen
- Scroll progress bar
- Back-to-top button

## 7. Extras

- Fake customer testimonials (write 5–6, varied tone, Kazakh / Russian / English names)
- Fake Instagram feed (6–9 placeholder tiles, hover overlay)
- Seasonal specials section
- Coffee subscription section (tiered plans, mock pricing)
- Loyalty rewards section (points system explainer)
- Events section (cupping sessions, latte art workshops)
- Gift cards section (mock "buy" CTA — demo state, no real payment)
- "Work From Coffee Roots" section for freelancers/remote workers (wifi speed, outlets, quiet hours)

## 8. Animation Requirements (Framer Motion)

Fade in, slide up, blur reveal, scale on hover, stagger children (menu cards, gallery tiles, testimonial cards), smooth scroll, page transition wrapper in layout.tsx.

## 9. Quality Bar

- Lighthouse: aim 90+ across Performance / Accessibility / Best Practices / SEO
- Full keyboard navigation + ARIA labels on interactive components
- No `any` types, no unused exports, no duplicated logic
- Responsive: mobile < 640px, tablet 640–1024px, desktop > 1024px

## 10. Image Assets — Higgsfield Generation Instructions

Higgsfield is connected as an MCP app in claude.ai chat, but Claude Code uses a separate MCP configuration. To connect it inside Claude Code:

```
claude mcp add-json higgsfield '{"type":"http","url":"https://mcp.higgsfield.ai/mcp","authorization_token":"YOUR_TOKEN"}'
```

Recommended workflow: generate the full image set once, save to `/public/images/`, and reference them as static files during the build — don't regenerate images on every code iteration.

### Style guardrail (prepend to every generation prompt)

"Warm minimalist specialty coffee shop, natural window light, cream and warm wood tones, shallow depth of field, editorial food/interior photography style, no text, no logos, no visible signage, generic/unbranded — not depicting any real business."

### Required image set

| File | Prompt subject |
|---|---|
| hero-interior.jpg | Wide shot of a minimalist café interior, wooden tables, morning light |
| hero-cup.jpg | Close-up latte with subtle latte art on a ceramic cup |
| drink-espresso.jpg | Single espresso shot in a small ceramic cup |
| drink-latte.jpg | Latte in a glass cup, rosetta art |
| drink-coldbrew.jpg | Cold brew in a tall glass with ice |
| pastry-croissant.jpg | Butter croissant on a plate, natural light |
| dessert-tiramisu.jpg | Slice of tiramisu, minimalist plating |
| breakfast-avocado-toast.jpg | Avocado toast, minimalist plating, wooden board |
| interior-seating.jpg | Cozy seating corner, plants, warm lighting |
| interior-counter.jpg | Coffee bar/counter, barista equipment |
| gallery-01…09.jpg | Varied: beans, pour-over, pastry case, hands + cup, laptop + coffee, plants, textures |

Generate at consistent aspect ratios: hero images 16:9, gallery images mixed 4:5 / 1:1 / 3:4 for masonry rhythm.

## 11. Suggested Execution Order

1. Scaffold + design tokens + fonts
2. Layout shell (navbar, footer, scroll progress, loading screen)
3. Home page
4. Menu + About
5. Gallery (masonry + lightbox)
6. Reservations + Contact (forms / state logic)
7. Extras + polish pass (Lighthouse, a11y, SEO metadata)

// Single source of truth for site-wide values used across layout chrome.
// Keeping these out of components makes the template reusable for another
// client without touching component code.

export const SITE = {
  name: "COFFEE ROOTS",
  tagline: "Specialty coffee · Almaty",
  /** Official address (as listed publicly). */
  address: "улица Богенбай Батыра, Алматы 050000",
  /** Latin transliteration for non-Cyrillic readers. */
  addressLatin: "Bogenbai Batyr Street, Almaty, Kazakhstan",
  /** Official Instagram profile. */
  instagramUrl: "https://www.instagram.com/coffeeroots.kz",
  // PLACEHOLDER — no publicly verified business email exists yet. Replace
  // with the official address if one becomes available.
  email: "hello@coffeeroots.kz",
  // PLACEHOLDER hours — confirm with the business before launch.
  hours: "Open daily · 8:00 – 22:00",
} as const;

/** Public rating (SPEC.md §1). */
export const RATING = { score: "4.9", count: 17 } as const;

// SPEC.md §0 — must appear in the footer verbatim.
export const PORTFOLIO_DISCLAIMER =
  "This website is an independent portfolio redesign concept created for demonstration purposes. It is not the official website of COFFEE ROOTS.";

export interface NavLink {
  label: string;
  href: string;
}

// Real routes as pages ship; Reservations/Contact stay home-anchor
// placeholders until their pages exist (SPEC.md §11 step 6).
export const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reservations", href: "/#reservations" },
  { label: "Contact", href: "/#contact" },
] as const;

export const SCROLL = {
  /** px scrolled before the navbar switches to its frosted background */
  navFrostThreshold: 24,
  /** px scrolled before the back-to-top button appears */
  backToTopThreshold: 400,
} as const;

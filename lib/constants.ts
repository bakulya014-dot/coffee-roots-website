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
  instagramHandle: "@coffeeroots.kz",
  // PLACEHOLDER — no publicly verified business email exists yet. Replace
  // with the official address if one becomes available.
  email: "hello@coffeeroots.kz",
  // PLACEHOLDER hours — confirm with the business before launch.
  hours: "Open daily · 8:00 – 22:00",
} as const;

/** Public rating (SPEC.md §1). */
export const RATING = { score: "4.9", count: 17 } as const;

// PLACEHOLDER hours — confirm per-day times with the business before launch.
// Day labels come from days.* in /messages; times are language-independent.
export const OPENING_HOURS: readonly { dayKey: string; hours: string }[] = [
  { dayKey: "days.mon", hours: "8:00 – 22:00" },
  { dayKey: "days.tue", hours: "8:00 – 22:00" },
  { dayKey: "days.wed", hours: "8:00 – 22:00" },
  { dayKey: "days.thu", hours: "8:00 – 22:00" },
  { dayKey: "days.fri", hours: "8:00 – 22:00" },
  { dayKey: "days.sat", hours: "9:00 – 22:00" },
  { dayKey: "days.sun", hours: "9:00 – 21:00" },
] as const;

const MAPS_QUERY = encodeURIComponent(
  "улица Богенбай Батыра, Алматы 050000",
);
/** Keyless embed + external link for the Contact page map. */
export const MAPS = {
  embedUrl: `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`,
  linkUrl: `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`,
} as const;

// SPEC.md §0 — must appear in the footer verbatim.
export const PORTFOLIO_DISCLAIMER =
  "This website is an independent portfolio redesign concept created for demonstration purposes. It is not the official website of COFFEE ROOTS.";

export interface NavLink {
  /** Translation key under nav.* in /messages */
  labelKey: string;
  href: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { labelKey: "nav.home", href: "/" },
  { labelKey: "nav.menu", href: "/menu" },
  { labelKey: "nav.about", href: "/about" },
  { labelKey: "nav.gallery", href: "/gallery" },
  { labelKey: "nav.reservations", href: "/reservations" },
  { labelKey: "nav.contact", href: "/contact" },
] as const;

export const SCROLL = {
  /** px scrolled before the navbar switches to its frosted background */
  navFrostThreshold: 24,
  /** px scrolled before the back-to-top button appears */
  backToTopThreshold: 400,
} as const;

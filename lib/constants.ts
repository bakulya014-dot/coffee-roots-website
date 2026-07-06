// Single source of truth for site-wide values used across layout chrome.
// Keeping these out of components makes the template reusable for another
// client without touching component code.

export const SITE = {
  name: "COFFEE ROOTS",
  tagline: "Specialty coffee · Almaty",
  location: "Bogenbai Batyr Street, Almaty, Kazakhstan",
  // Placeholders — this is a portfolio concept, not a real business site.
  instagramUrl: "https://www.instagram.com/",
  email: "hello@coffeeroots-concept.example",
} as const;

// SPEC.md §0 — must appear in the footer verbatim.
export const PORTFOLIO_DISCLAIMER =
  "This website is an independent portfolio redesign concept created for demonstration purposes. It is not the official website of COFFEE ROOTS.";

export interface NavLink {
  label: string;
  href: string;
}

// Placeholder anchors until the real routes exist (SPEC.md §5).
export const NAV_LINKS: readonly NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reservations", href: "#reservations" },
  { label: "Contact", href: "#contact" },
] as const;

export const SCROLL = {
  /** px scrolled before the navbar switches to its frosted background */
  navFrostThreshold: 24,
  /** px scrolled before the back-to-top button appears */
  backToTopThreshold: 400,
} as const;

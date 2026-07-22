import { MAPS, OPENING_HOURS, RATING, SITE } from "@/lib/constants";

/** Deploy URL — the Pages workflow sets NEXT_PUBLIC_SITE_URL. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// CafeOrCoffeeShop structured data (SPEC.md §2 — LocalBusiness schema).
// Marked as a demonstration concept via disambiguatingDescription so the
// markup itself stays honest about SPEC.md §0.
export const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: SITE.name,
  disambiguatingDescription:
    "Independent portfolio redesign concept — not the official website.",
  url: SITE_URL,
  image: `${SITE_URL}${BASE_PATH}/images/cafe-mural.jpg`,
  servesCuisine: ["Coffee", "Pastries", "Breakfast", "Lunch"],
  priceRange: "₸₸",
  address: {
    "@type": "PostalAddress",
    streetAddress: "улица Богенбай Батыра",
    addressLocality: "Алматы",
    postalCode: "050000",
    addressCountry: "KZ",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: RATING.score,
    reviewCount: RATING.count,
  },
  openingHoursSpecification: OPENING_HOURS.map((row) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: row.dayKey.replace("days.", ""),
    opens: row.hours.split(" – ")[0],
    closes: row.hours.split(" – ")[1],
  })),
  hasMap: MAPS.linkUrl,
  sameAs: [SITE.instagramUrl],
} as const;

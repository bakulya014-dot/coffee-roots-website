import type { LucideIcon } from "lucide-react";
import { Coffee, Croissant, Laptop, Leaf, CakeSlice, Sprout } from "lucide-react";

// All content below is concept copy for the portfolio demo. Prices sit inside
// the real business's published 1,000–4,000 ₸ range (SPEC.md §1); reviews are
// fictional per SPEC.md §7 — nothing is quoted from real customers.

export interface FeaturedDrink {
  name: string;
  description: string;
  /** Pre-formatted to avoid locale-dependent hydration mismatches. */
  price: string;
}

export const FEATURED_DRINKS: readonly FeaturedDrink[] = [
  {
    name: "Espresso",
    description: "Single-origin shot from this month's rotation.",
    price: "1 200 ₸",
  },
  {
    name: "Latte",
    description: "Silky microfoam rosetta on hand-thrown ceramic.",
    price: "1 800 ₸",
  },
  {
    name: "Raf",
    description: "Almaty's favourite — vanilla cream, gently steamed.",
    price: "2 000 ₸",
  },
  {
    name: "Cold brew",
    description: "Steeped 18 hours, served over clear ice.",
    price: "2 200 ₸",
  },
] as const;

export interface ReviewHighlight {
  quote: string;
  name: string;
}

export const REVIEW_HIGHLIGHTS: readonly ReviewHighlight[] = [
  {
    quote:
      "The calmest place to work on Bogenbai Batyr — fast wifi, outlets at every table, and a flat white that never misses.",
    name: "Aizhan",
  },
  {
    quote:
      "Наконец-то спешелти без пафоса. Раф здесь лучший в городе, и всегда есть свободное место у окна.",
    name: "Дмитрий",
  },
  {
    quote:
      "Found it on my second day in Almaty and came back every morning after. The croissants deserve their own review.",
    name: "Emma",
  },
] as const;

export interface InstagramTile {
  /** Decorative stand-in until licensed/generated photos exist (SPEC.md §10). */
  icon: LucideIcon;
  label: string;
  gradient: string;
}

export const INSTAGRAM_TILES: readonly InstagramTile[] = [
  { icon: Coffee, label: "Latte art", gradient: "from-warm-beige to-cream" },
  { icon: Croissant, label: "Fresh pastry", gradient: "from-caramel/30 to-warm-beige" },
  { icon: Laptop, label: "Work corner", gradient: "from-cream to-warm-beige" },
  { icon: Leaf, label: "Green corner", gradient: "from-warm-beige to-caramel/20" },
  { icon: CakeSlice, label: "Dessert case", gradient: "from-caramel/25 to-cream" },
  { icon: Sprout, label: "Fresh beans", gradient: "from-cream to-caramel/30" },
] as const;

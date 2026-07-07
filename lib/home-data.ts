import type { LucideIcon } from "lucide-react";
import { Coffee, Croissant, Laptop, Leaf, CakeSlice, Sprout } from "lucide-react";

// All content below is concept copy for the portfolio demo. Reviews are
// fictional per SPEC.md §7 — nothing is quoted from real customers.
// (Featured drinks moved to lib/menu-data.ts — single source for menu items.)

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

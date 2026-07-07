import type { LucideIcon } from "lucide-react";
import { Coffee, Croissant, Laptop, Leaf, CakeSlice, Sprout } from "lucide-react";

// Language-independent home page data. All user-facing text lives in
// /messages (reviews under reviews.*, section copy under home.*).

export interface InstagramTile {
  id: string;
  /** Decorative stand-in until licensed/generated photos exist (SPEC.md §10). */
  icon: LucideIcon;
  gradient: string;
}

export const INSTAGRAM_TILES: readonly InstagramTile[] = [
  { id: "latte-art", icon: Coffee, gradient: "from-warm-beige to-cream" },
  { id: "pastry", icon: Croissant, gradient: "from-caramel/30 to-warm-beige" },
  { id: "work-corner", icon: Laptop, gradient: "from-cream to-warm-beige" },
  { id: "plants", icon: Leaf, gradient: "from-warm-beige to-caramel/20" },
  { id: "dessert-case", icon: CakeSlice, gradient: "from-caramel/25 to-cream" },
  { id: "beans", icon: Sprout, gradient: "from-cream to-caramel/30" },
] as const;

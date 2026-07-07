// Menu structure (SPEC.md §5). Names/descriptions live in /messages under
// menu.items.<id> so every language stays in the translation files; this
// module keeps only language-independent data. Prices sit inside the
// business's published 1,000–4,000 ₸ range, pre-formatted to avoid
// locale-dependent hydration mismatches.

export const MENU_CATEGORIES = [
  "Coffee",
  "Tea",
  "Pastries",
  "Desserts",
  "Breakfast",
  "Lunch",
] as const;

export type MenuCategory = (typeof MENU_CATEGORIES)[number];

export interface MenuItem {
  /** Key into menu.items.* in /messages */
  id: string;
  price: string;
  category: MenuCategory;
  /** Shown in the home page "Featured drinks" strip. */
  featured?: boolean;
}

export const MENU_ITEMS: readonly MenuItem[] = [
  // Coffee
  { id: "espresso", price: "1 200 ₸", category: "Coffee", featured: true },
  { id: "latte", price: "1 800 ₸", category: "Coffee", featured: true },
  { id: "raf", price: "2 000 ₸", category: "Coffee", featured: true },
  { id: "coldBrew", price: "2 200 ₸", category: "Coffee", featured: true },
  { id: "flatWhite", price: "1 900 ₸", category: "Coffee" },
  { id: "filterV60", price: "1 700 ₸", category: "Coffee" },
  // Tea
  { id: "blackTea", price: "1 400 ₸", category: "Tea" },
  { id: "sencha", price: "1 500 ₸", category: "Tea" },
  { id: "seaBuckthorn", price: "1 800 ₸", category: "Tea" },
  { id: "herbal", price: "1 400 ₸", category: "Tea" },
  // Pastries
  { id: "croissant", price: "1 200 ₸", category: "Pastries" },
  { id: "almondCroissant", price: "1 600 ₸", category: "Pastries" },
  { id: "cardamomBun", price: "1 400 ₸", category: "Pastries" },
  { id: "bananaBread", price: "1 300 ₸", category: "Pastries" },
  // Desserts
  { id: "tiramisu", price: "2 400 ₸", category: "Desserts" },
  { id: "basqueCheesecake", price: "2 200 ₸", category: "Desserts" },
  { id: "medovik", price: "2 000 ₸", category: "Desserts" },
  { id: "chocolateTart", price: "2 300 ₸", category: "Desserts" },
  // Breakfast
  { id: "avocadoToast", price: "2 800 ₸", category: "Breakfast" },
  { id: "syrniki", price: "2 400 ₸", category: "Breakfast" },
  { id: "granola", price: "2 200 ₸", category: "Breakfast" },
  { id: "omelette", price: "2 600 ₸", category: "Breakfast" },
  // Lunch
  { id: "pestoSandwich", price: "3 200 ₸", category: "Lunch" },
  { id: "grainBowl", price: "3 000 ₸", category: "Lunch" },
  { id: "soup", price: "2 200 ₸", category: "Lunch" },
  { id: "caesar", price: "3 400 ₸", category: "Lunch" },
] as const;

/** Drinks highlighted on the home page. */
export const FEATURED_DRINKS: readonly MenuItem[] = MENU_ITEMS.filter(
  (item) => item.featured,
);

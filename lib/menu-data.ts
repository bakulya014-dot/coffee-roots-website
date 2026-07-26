// Menu structure. Names and descriptions live in /messages under
// menu.items.<id> so every language stays in the translation files; this
// module keeps only language-independent data (prices, weights, markers).
//
// FOOD (salads, snacks, sandwiches, breakfast, pizza, pasta) is transcribed
// from the café's own printed menu supplied by the owners — prices in ₸.
// DRINKS (coffee, tea) are still placeholders: the owners have not yet
// supplied the bar list, so those items and prices need replacing before
// the site is presented as authoritative.

export const MENU_CATEGORIES = [
  "Coffee",
  "Tea",
  "Breakfast",
  "Salads",
  "Snacks",
  "Sandwiches",
  "Pizza",
  "Pasta",
] as const;

export type MenuCategory = (typeof MENU_CATEGORIES)[number];

/** Legend markers printed on the café's menu. */
export type MenuTag = "spicy" | "veg" | "hit";

export interface MenuItem {
  /** Key into menu.items.* in /messages */
  id: string;
  /** Pre-formatted so no locale-dependent number formatting can drift. */
  price: string;
  /** Pizzas are sold in two sizes: `price` is 25 cm, this is 30 cm. */
  priceLarge?: string;
  /** Portion weight as printed on the menu. */
  weight?: string;
  category: MenuCategory;
  tags?: readonly MenuTag[];
  /** Shown in the home page "Featured drinks" strip. */
  featured?: boolean;
}

export const MENU_ITEMS: readonly MenuItem[] = [
  // ── Coffee — PLACEHOLDER, awaiting the café's bar list ──
  { id: "espresso", price: "1 200 ₸", category: "Coffee", featured: true },
  { id: "latte", price: "1 800 ₸", category: "Coffee", featured: true },
  { id: "raf", price: "2 000 ₸", category: "Coffee", featured: true },
  { id: "coldBrew", price: "2 200 ₸", category: "Coffee", featured: true },
  { id: "flatWhite", price: "1 900 ₸", category: "Coffee" },
  { id: "filterV60", price: "1 700 ₸", category: "Coffee" },

  // ── Tea — PLACEHOLDER, awaiting the café's bar list ──
  { id: "blackTea", price: "1 400 ₸", category: "Tea" },
  { id: "sencha", price: "1 500 ₸", category: "Tea" },
  { id: "seaBuckthorn", price: "1 800 ₸", category: "Tea" },
  { id: "herbal", price: "1 400 ₸", category: "Tea", tags: ["veg"] },

  // ── Завтраки · served until 13:00 ──
  { id: "ricePorridge", price: "1 850 ₸", weight: "170 г", category: "Breakfast", tags: ["veg"] },
  { id: "breakfastRoastBeef", price: "3 950 ₸", weight: "320 г", category: "Breakfast" },
  { id: "breakfastSalmon", price: "3 950 ₸", weight: "320 г", category: "Breakfast" },
  { id: "morningBun", price: "3 650 ₸", weight: "280 г", category: "Breakfast" },
  { id: "croissantSalmon", price: "3 350 ₸", weight: "220 г", category: "Breakfast" },

  // ── Салаты ──
  { id: "caesar", price: "3 450 ₸", weight: "230 г", category: "Salads" },
  { id: "caesarShrimp", price: "3 950 ₸", weight: "230 г", category: "Salads" },
  { id: "falafelSalad", price: "3 250 ₸", weight: "230 г", category: "Salads", tags: ["veg"] },
  { id: "salmonSalad", price: "3 950 ₸", weight: "230 г", category: "Salads" },
  { id: "goatCheeseSalad", price: "3 450 ₸", weight: "200 г", category: "Salads", tags: ["veg"] },
  { id: "freshVegSalad", price: "3 450 ₸", weight: "230 г", category: "Salads", tags: ["veg"] },
  { id: "pakChoiSalad", price: "2 650 ₸", weight: "200 г", category: "Salads", tags: ["veg"] },
  { id: "parmesanSalad", price: "2 950 ₸", weight: "200 г", category: "Salads", tags: ["veg"] },

  // ── Закуски ──
  { id: "chickenChips", price: "2 650 ₸", weight: "220 г", category: "Snacks", tags: ["spicy"] },
  { id: "vitelloTonnato", price: "3 950 ₸", weight: "160 г", category: "Snacks" },
  { id: "hummusVeg", price: "2 450 ₸", weight: "160 г", category: "Snacks", tags: ["veg"] },
  { id: "truffleFries", price: "1 950 ₸", weight: "230 г", category: "Snacks", tags: ["veg"] },

  // ── Сэндвичи · on pizza dough ──
  { id: "chickenKimchiSand", price: "2 250 ₸", weight: "265 г", category: "Sandwiches" },
  { id: "roastBeefSand", price: "3 650 ₸", weight: "265 г", category: "Sandwiches" },
  { id: "salmonSand", price: "3 650 ₸", weight: "265 г", category: "Sandwiches" },
  { id: "falafelSand", price: "2 550 ₸", weight: "265 г", category: "Sandwiches", tags: ["veg"] },

  // ── Пиццы · 25 cm / 30 cm, dough proved 72 hours ──
  { id: "pizzaMarge", price: "2 850 ₸", priceLarge: "3 450 ₸", category: "Pizza", tags: ["veg"] },
  { id: "pizzaOldSchool", price: "3 250 ₸", priceLarge: "3 950 ₸", category: "Pizza", tags: ["hit"] },
  { id: "pizzaSinger", price: "3 250 ₸", priceLarge: "3 950 ₸", category: "Pizza", tags: ["veg"] },
  { id: "pizzaClash", price: "3 250 ₸", priceLarge: "3 950 ₸", category: "Pizza" },
  { id: "pizzaKennedy", price: "3 650 ₸", priceLarge: "4 950 ₸", category: "Pizza" },
  { id: "pizzaForeva", price: "3 650 ₸", priceLarge: "4 850 ₸", category: "Pizza" },
  { id: "pizzaSgtPepper", price: "3 450 ₸", priceLarge: "4 650 ₸", category: "Pizza", tags: ["spicy"] },
  { id: "pizzaWoodstock", price: "3 950 ₸", priceLarge: "4 950 ₸", category: "Pizza" },
  { id: "pizzaSurf", price: "3 650 ₸", priceLarge: "4 950 ₸", category: "Pizza" },
  { id: "pizzaVicious", price: "4 450 ₸", priceLarge: "6 050 ₸", category: "Pizza" },
  { id: "pizzaOasis", price: "4 250 ₸", priceLarge: "5 650 ₸", category: "Pizza" },
  { id: "pizzaGravity", price: "4 850 ₸", priceLarge: "6 950 ₸", category: "Pizza", tags: ["hit"] },
  { id: "pizzaRedHot", price: "4 850 ₸", priceLarge: "6 250 ₸", category: "Pizza", tags: ["spicy"] },
  { id: "pizzaMagicMushrooms", price: "3 650 ₸", priceLarge: "4 950 ₸", category: "Pizza", tags: ["veg"] },
  { id: "pizzaBombora", price: "4 450 ₸", priceLarge: "5 650 ₸", category: "Pizza", tags: ["hit"] },
  { id: "pizzaCheese", price: "3 950 ₸", priceLarge: "4 950 ₸", category: "Pizza", tags: ["veg"] },
  { id: "pizzaAquarium", price: "4 850 ₸", priceLarge: "5 850 ₸", category: "Pizza" },
  { id: "pizzaYoko", price: "3 850 ₸", priceLarge: "4 850 ₸", category: "Pizza", tags: ["veg"] },
  { id: "pizzaElvis", price: "4 250 ₸", priceLarge: "5 850 ₸", category: "Pizza", tags: ["hit"] },

  // ── Пасты ──
  { id: "pastaBolognese", price: "3 650 ₸", weight: "350 г", category: "Pasta" },
  { id: "pastaJamaica", price: "2 850 ₸", weight: "250 г", category: "Pasta" },
  { id: "pastaNemo", price: "3 850 ₸", weight: "250 г", category: "Pasta" },
  { id: "pastaForest", price: "2 850 ₸", weight: "350 г", category: "Pasta", tags: ["veg"] },
] as const;

/** Crust-dip sauces, sold alongside any pizza. */
export const CRUST_SAUCE_PRICE = "300 ₸";

/** Drinks highlighted on the home page. */
export const FEATURED_DRINKS: readonly MenuItem[] = MENU_ITEMS.filter(
  (item) => item.featured,
);

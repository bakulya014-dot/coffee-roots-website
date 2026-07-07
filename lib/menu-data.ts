// Menu content (SPEC.md §5). All prices sit inside the business's published
// 1,000–4,000 ₸ range; strings are pre-formatted to avoid locale-dependent
// hydration mismatches. Concept copy — confirm real menu with the client.

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
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  /** Shown in the home page "Featured drinks" strip. */
  featured?: boolean;
}

export const MENU_ITEMS: readonly MenuItem[] = [
  // Coffee
  {
    name: "Espresso",
    description: "Single-origin shot from this month's rotation.",
    price: "1 200 ₸",
    category: "Coffee",
    featured: true,
  },
  {
    name: "Latte",
    description: "Silky microfoam rosetta on hand-thrown ceramic.",
    price: "1 800 ₸",
    category: "Coffee",
    featured: true,
  },
  {
    name: "Raf",
    description: "Almaty's favourite — vanilla cream, gently steamed.",
    price: "2 000 ₸",
    category: "Coffee",
    featured: true,
  },
  {
    name: "Cold brew",
    description: "Steeped 18 hours, served over clear ice.",
    price: "2 200 ₸",
    category: "Coffee",
    featured: true,
  },
  {
    name: "Flat white",
    description: "Double ristretto under a thin veil of milk.",
    price: "1 900 ₸",
    category: "Coffee",
  },
  {
    name: "Filter V60",
    description: "Hand-poured, bright and tea-like. Ask what's on the bar.",
    price: "1 700 ₸",
    category: "Coffee",
  },

  // Tea
  {
    name: "Taezhny black tea",
    description: "Full-bodied loose leaf with wild thyme.",
    price: "1 400 ₸",
    category: "Tea",
  },
  {
    name: "Sencha",
    description: "Steamed green tea, grassy and clean.",
    price: "1 500 ₸",
    category: "Tea",
  },
  {
    name: "Sea buckthorn tea",
    description: "House favourite — tart, golden, served hot.",
    price: "1 800 ₸",
    category: "Tea",
  },
  {
    name: "Herbal infusion",
    description: "Chamomile, mint, and lemon balm. Naturally caffeine-free.",
    price: "1 400 ₸",
    category: "Tea",
  },

  // Pastries
  {
    name: "Butter croissant",
    description: "Laminated over three days, baked every morning.",
    price: "1 200 ₸",
    category: "Pastries",
  },
  {
    name: "Almond croissant",
    description: "Twice-baked with frangipane and toasted flakes.",
    price: "1 600 ₸",
    category: "Pastries",
  },
  {
    name: "Cardamom bun",
    description: "Scandinavian-style knot, warm spice, light glaze.",
    price: "1 400 ₸",
    category: "Pastries",
  },
  {
    name: "Banana bread",
    description: "Dense, dark, and toasted to order with butter.",
    price: "1 300 ₸",
    category: "Pastries",
  },

  // Desserts
  {
    name: "Tiramisu",
    description: "Classic recipe with our own espresso soak.",
    price: "2 400 ₸",
    category: "Desserts",
  },
  {
    name: "Basque cheesecake",
    description: "Burnt top, molten centre, no crust.",
    price: "2 200 ₸",
    category: "Desserts",
  },
  {
    name: "Medovik",
    description: "Honey layer cake, the way grandmothers make it.",
    price: "2 000 ₸",
    category: "Desserts",
  },
  {
    name: "Dark chocolate tart",
    description: "70% chocolate, sea salt, espresso pastry shell.",
    price: "2 300 ₸",
    category: "Desserts",
  },

  // Breakfast
  {
    name: "Avocado toast",
    description: "Sourdough, poached egg, chili oil, pickled onion.",
    price: "2 800 ₸",
    category: "Breakfast",
  },
  {
    name: "Syrniki",
    description: "Cottage-cheese pancakes, sour cream, berry compote.",
    price: "2 400 ₸",
    category: "Breakfast",
  },
  {
    name: "Granola bowl",
    description: "House granola, yogurt, seasonal fruit, mountain honey.",
    price: "2 200 ₸",
    category: "Breakfast",
  },
  {
    name: "Omelette",
    description: "Three eggs, aged cheese, herbs, toasted sourdough.",
    price: "2 600 ₸",
    category: "Breakfast",
  },

  // Lunch
  {
    name: "Chicken pesto sandwich",
    description: "Grilled ciabatta, basil pesto, roasted peppers.",
    price: "3 200 ₸",
    category: "Lunch",
  },
  {
    name: "Grain bowl",
    description: "Bulgur, roasted vegetables, tahini, soft egg.",
    price: "3 000 ₸",
    category: "Lunch",
  },
  {
    name: "Soup of the day",
    description: "Made each morning — ask the bar what's simmering.",
    price: "2 200 ₸",
    category: "Lunch",
  },
  {
    name: "Caesar salad",
    description: "Romaine, parmesan, sourdough croutons, soft egg.",
    price: "3 400 ₸",
    category: "Lunch",
  },
] as const;

/** Drinks highlighted on the home page. */
export const FEATURED_DRINKS: readonly MenuItem[] = MENU_ITEMS.filter(
  (item) => item.featured,
);

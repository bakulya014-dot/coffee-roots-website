"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Flame, Leaf, Star } from "lucide-react";

import { useLanguage } from "@/hooks/useLanguage";
import {
  CRUST_SAUCE_PRICE,
  MENU_CATEGORIES,
  MENU_ITEMS,
  type MenuCategory,
  type MenuItem,
  type MenuTag,
} from "@/lib/menu-data";
import { cn } from "@/lib/utils";

type Filter = MenuCategory | "All";

const FILTERS: readonly Filter[] = ["All", ...MENU_CATEGORIES];

/** Legend markers printed on the café's own menu. */
const TAG_ICON: Record<MenuTag, typeof Flame> = {
  spicy: Flame,
  veg: Leaf,
  hit: Star,
};
const TAG_LABEL: Record<MenuTag, string> = {
  spicy: "menu.tagSpicy",
  veg: "menu.tagVeg",
  hit: "menu.tagHit",
};

/** Per-category note printed under the heading, where the menu has one. */
const CATEGORY_NOTE: Partial<Record<MenuCategory, string>> = {
  Breakfast: "menu.breakfastNote",
  Sandwiches: "menu.sandwichNote",
  Pizza: "menu.pizzaNote",
  Coffee: "menu.drinksNote",
};

function MenuRow({ item }: { item: MenuItem }) {
  const { t } = useLanguage();

  return (
    <li className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 border-b border-border/60 py-4 last:border-0">
      <p className="flex flex-wrap items-center gap-x-2 gap-y-1 font-heading text-base font-semibold">
        {t(`menu.items.${item.id}.name`)}
        {item.tags?.map((tag) => {
          const Icon = TAG_ICON[tag];
          return (
            <span key={tag} title={t(TAG_LABEL[tag])} className="inline-flex">
              <Icon aria-hidden="true" className="h-3.5 w-3.5 text-caramel" />
              <span className="sr-only">{t(TAG_LABEL[tag])}</span>
            </span>
          );
        })}
      </p>

      {/* Prices sit in their own column so every row lines up. */}
      <p className="text-right font-semibold whitespace-nowrap tabular-nums">
        {item.price}
        {item.priceLarge && (
          <span className="text-muted-foreground"> · {item.priceLarge}</span>
        )}
      </p>

      <p className="col-start-1 max-w-[62ch] text-sm text-muted-foreground">
        {t(`menu.items.${item.id}.description`)}
      </p>

      {(item.weight || item.priceLarge) && (
        <p className="col-start-2 text-right text-xs whitespace-nowrap text-muted-foreground tabular-nums">
          {item.weight ??
            `${t("menu.sizeSmall")} · ${t("menu.sizeLarge")}`}
        </p>
      )}
    </li>
  );
}

export function MenuBrowser() {
  const [filter, setFilter] = useState<Filter>("All");
  const reducedMotion = useReducedMotion();
  const { t } = useLanguage();

  const shownCategories =
    filter === "All" ? MENU_CATEGORIES : [filter as MenuCategory];
  const visibleCount = MENU_ITEMS.filter(
    (i) => filter === "All" || i.category === filter,
  ).length;

  const filterLabel = (f: Filter) =>
    f === "All" ? t("menu.filterAll") : t(`menu.categories.${f}`);

  return (
    <div>
      {/* Toggle buttons (not tabs): filtering one list, aria-pressed conveys
          the active state to assistive tech. */}
      <div
        role="group"
        aria-label={t("menu.filterAria")}
        className="flex flex-wrap gap-2"
      >
        {FILTERS.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={filter === category}
            onClick={() => setFilter(category)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
              "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
              filter === category
                ? "border-transparent bg-primary text-primary-foreground"
                : "border-border bg-transparent hover:border-caramel hover:text-caramel",
            )}
          >
            {filterLabel(category)}
          </button>
        ))}
      </div>

      <p aria-live="polite" className="sr-only">
        {filter === "All"
          ? t("menu.showingAll", { count: visibleCount })
          : t("menu.showingCategory", {
              count: visibleCount,
              category: filterLabel(filter),
            })}
      </p>

      <div className="mt-10 space-y-14">
        {shownCategories.map((category) => {
          const items = MENU_ITEMS.filter((i) => i.category === category);
          if (items.length === 0) return null;
          const noteKey = CATEGORY_NOTE[category];

          return (
            <motion.section
              key={category}
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.3, ease: "easeOut" }}
            >
              <h2 className="font-heading text-2xl font-bold tracking-tight">
                {t(`menu.categories.${category}`)}
              </h2>
              {noteKey && (
                <p className="mt-1.5 max-w-[68ch] text-sm text-muted-foreground">
                  {t(noteKey)}
                </p>
              )}

              <ul className="mt-5 list-none p-0">
                {items.map((item) => (
                  <MenuRow key={item.id} item={item} />
                ))}
              </ul>

              {/* Crust dips are sold with any pizza. */}
              {category === "Pizza" && (
                <div className="mt-5 rounded-xl bg-warm-beige px-5 py-4 dark:bg-card">
                  <p className="flex items-baseline justify-between gap-4 font-heading text-sm font-semibold">
                    {t("menu.crustSauce")}
                    <span className="tabular-nums">{CRUST_SAUCE_PRICE}</span>
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t("menu.crustSauceList")}
                  </p>
                </div>
              )}
            </motion.section>
          );
        })}
      </div>

      {/* Legend, as printed on the café's menu */}
      <ul className="mt-14 flex list-none flex-wrap gap-x-6 gap-y-2 border-t border-border p-0 pt-6 text-sm text-muted-foreground">
        {(["spicy", "veg", "hit"] as const).map((tag) => {
          const Icon = TAG_ICON[tag];
          return (
            <li key={tag} className="flex items-center gap-2">
              <Icon aria-hidden="true" className="h-3.5 w-3.5 text-caramel" />
              {t(TAG_LABEL[tag])}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

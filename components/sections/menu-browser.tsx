"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { MenuItemCard } from "@/components/sections/menu-item-card";
import { useLanguage } from "@/hooks/useLanguage";
import {
  MENU_CATEGORIES,
  MENU_ITEMS,
  type MenuCategory,
} from "@/lib/menu-data";
import { cn } from "@/lib/utils";

type Filter = MenuCategory | "All";

const FILTERS: readonly Filter[] = ["All", ...MENU_CATEGORIES];

export function MenuBrowser() {
  const [filter, setFilter] = useState<Filter>("All");
  const reducedMotion = useReducedMotion();
  const { t } = useLanguage();

  const items =
    filter === "All"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === filter);

  const filterLabel = (f: Filter) =>
    f === "All" ? t("menu.filterAll") : t(`menu.categories.${f}`);

  return (
    <div>
      {/* Toggle buttons (not tabs): filtering one grid, aria-pressed conveys
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
          ? t("menu.showingAll", { count: items.length })
          : t("menu.showingCategory", {
              count: items.length,
              category: filterLabel(filter),
            })}
      </p>

      <motion.ul
        layout={!reducedMotion}
        className="mt-8 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {items.map((item) => (
            <motion.li
              key={item.id}
              layout={!reducedMotion}
              initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{ duration: reducedMotion ? 0 : 0.25, ease: "easeOut" }}
            >
              <MenuItemCard item={item} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}

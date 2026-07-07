"use client";

import Link from "next/link";

import { MenuItemCard } from "@/components/sections/menu-item-card";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/hooks/useLanguage";
import { FEATURED_DRINKS } from "@/lib/menu-data";

export function FeaturedDrinks() {
  const { t } = useLanguage();

  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal>
        <h2 className="text-3xl font-bold tracking-tight">
          {t("home.featuredTitle")}
        </h2>
        <p className="mt-2 text-muted-foreground">
          {t("home.featuredSubtitle")}{" "}
          <Link
            href="/menu"
            className="font-medium text-caramel underline-offset-4 hover:underline"
          >
            {t("home.featuredLink")}
          </Link>
          .
        </p>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURED_DRINKS.map((drink, i) => (
          <Reveal key={drink.id} delay={i * 0.1}>
            <MenuItemCard item={drink} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

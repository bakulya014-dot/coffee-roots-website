import Link from "next/link";

import { MenuItemCard } from "@/components/sections/menu-item-card";
import { Reveal } from "@/components/ui/reveal";
import { FEATURED_DRINKS } from "@/lib/menu-data";

export function FeaturedDrinks() {
  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal>
        <h2 className="text-3xl font-bold tracking-tight">Featured drinks</h2>
        <p className="mt-2 text-muted-foreground">
          A small taste of the board —{" "}
          <Link
            href="/menu"
            className="font-medium text-caramel underline-offset-4 hover:underline"
          >
            see the full menu
          </Link>
          .
        </p>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURED_DRINKS.map((drink, i) => (
          <Reveal key={drink.name} delay={i * 0.1}>
            <MenuItemCard item={drink} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

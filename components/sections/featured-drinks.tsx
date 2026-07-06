import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { FEATURED_DRINKS } from "@/lib/home-data";

export function FeaturedDrinks() {
  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal>
        <h2 className="text-3xl font-bold tracking-tight">Featured drinks</h2>
        <p className="mt-2 text-muted-foreground">
          A small taste of the board — the full menu arrives with the Menu
          page.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURED_DRINKS.map((drink, i) => (
          <Reveal key={drink.name} delay={i * 0.1}>
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="flex items-baseline justify-between gap-2">
                  <CardTitle className="font-heading">{drink.name}</CardTitle>
                  <span className="shrink-0 font-semibold text-caramel">
                    {drink.price}
                  </span>
                </div>
                <CardDescription>{drink.description}</CardDescription>
              </CardHeader>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

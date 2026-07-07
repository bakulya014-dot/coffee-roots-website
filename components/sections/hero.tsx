import Link from "next/link";
import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { RATING, SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-4 text-center"
    >
      {/* Decorative warm wash until the hero photo exists (SPEC.md §10) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-warm-beige via-cream to-cream dark:from-secondary dark:via-charcoal dark:to-charcoal"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 right-[-10%] -z-10 h-96 w-96 rounded-full bg-caramel/15 blur-3xl"
      />

      <Reveal immediate>
        <p className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-cream/60 px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm dark:bg-charcoal/60">
          <Star aria-hidden="true" className="h-3.5 w-3.5 fill-caramel text-caramel" />
          {RATING.score} · {RATING.count} reviews · {SITE.tagline}
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-6xl">
          Rooted in craft, brewed for the neighbourhood
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          Single-origin specialty coffee, natural light, and a quiet corner to
          work — in the heart of Almaty.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" asChild>
            {/* Resolves once the Reservations page exists (SPEC.md §11 step 6) */}
            <Link href="/#reservations">Reserve a table</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/menu">View the menu</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

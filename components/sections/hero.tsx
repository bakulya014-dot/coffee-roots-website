"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/hooks/useLanguage";
import { RATING } from "@/lib/constants";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-4 text-center"
    >
      {/* Interior photograph with a legibility scrim over it — text stays
          readable in both themes without hiding the room. */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-interior.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/85 via-cream/60 to-cream/85 dark:from-charcoal/85 dark:via-charcoal/65 dark:to-charcoal/85" />
      </div>

      <Reveal immediate>
        <p className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-cream/70 px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm dark:bg-charcoal/70">
          <Star aria-hidden="true" className="h-3.5 w-3.5 fill-caramel text-caramel" />
          {RATING.score} · {RATING.count} {t("hero.reviews")} ·{" "}
          {t("hero.tagline")}
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-6xl">
          {t("hero.title")}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          {t("hero.subtitle")}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" asChild>
            <Link href="/reservations">{t("hero.reserveCta")}</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/menu">{t("hero.menuCta")}</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

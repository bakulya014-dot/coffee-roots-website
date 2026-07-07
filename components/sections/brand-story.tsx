"use client";

import { Coffee } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/hooks/useLanguage";

export function BrandStory() {
  const { t } = useLanguage();

  return (
    <section id="about" className="bg-warm-beige py-20 dark:bg-card">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight">
            {t("home.storyTitle")}
          </h2>
          {/* Fictional founding story per SPEC.md §5 — realistic, not factual. */}
          <p className="mt-4 text-muted-foreground">{t("home.storyP1")}</p>
          <p className="mt-3 text-muted-foreground">{t("home.storyP2")}</p>
        </Reveal>
        <Reveal delay={0.15}>
          {/* Interior photo placeholder — replaced in the imagery pass (§10) */}
          <div
            aria-hidden="true"
            className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-cream to-caramel/20 dark:from-secondary dark:to-caramel/10"
          >
            <Coffee className="h-12 w-12 text-caramel/60" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

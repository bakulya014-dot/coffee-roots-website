"use client";

import Image from "next/image";

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
          <Image
            src="/images/cafe-vinyl.jpg"
            alt={t("home.storyImageAlt")}
            width={1600}
            height={1200}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="aspect-[4/3] w-full rounded-2xl object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/hooks/useLanguage";
import { SITE } from "@/lib/constants";
import { INSTAGRAM_TILES } from "@/lib/home-data";

export function InstagramPreview() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="bg-warm-beige py-20 dark:bg-card">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight">
            {t("home.instagramTitle")}
          </h2>
          <p className="mt-2 text-muted-foreground">
            {/* Tiles are decorative placeholders — no photos are reproduced
                from the real profile without permission (SPEC.md §0). */}
            {t("home.instagramSubtitle")}
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {INSTAGRAM_TILES.map((tile, i) => (
            <Reveal key={tile.id} delay={i * 0.08}>
              <div
                aria-hidden="true"
                className={`flex aspect-square items-center justify-center rounded-xl bg-gradient-to-br ${tile.gradient} transition-transform hover:scale-[1.02] dark:from-secondary dark:to-charcoal`}
              >
                <tile.icon className="h-8 w-8 text-caramel/60" />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-center">
          <Button size="lg" asChild>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="h-4 w-4" />
              {t("home.followCta")}
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

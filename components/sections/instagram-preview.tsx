"use client";

import Image from "next/image";

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
            {/* Concept preview tiles — original AI photography in the real
                feed's spirit; nothing reproduced from the profile (SPEC §0). */}
            {t("home.instagramSubtitle")}{" "}
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-caramel underline-offset-4 hover:underline"
            >
              {SITE.instagramHandle}
            </a>
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {INSTAGRAM_TILES.map((tile, i) => (
            <Reveal key={tile.id} delay={i * 0.08}>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t(`home.tiles.${tile.id}`)} — Instagram`}
                className="group block overflow-hidden rounded-xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <Image
                  src={tile.src}
                  alt={t(`home.tiles.${tile.id}`)}
                  width={1200}
                  height={1200}
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="aspect-square w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"
                />
              </a>
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

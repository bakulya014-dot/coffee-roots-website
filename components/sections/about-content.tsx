"use client";

import Image from "next/image";
import { Handshake, Lamp, Sprout } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/hooks/useLanguage";

// Fictional-but-realistic brand copy per SPEC.md §5 — keys into about.*.
const VALUE_IDS = [
  { id: "v1", icon: Sprout },
  { id: "v2", icon: Lamp },
  { id: "v3", icon: Handshake },
] as const;

export function AboutContent() {
  const { t } = useLanguage();

  return (
    <main className="pt-28 pb-20">
      {/* Story */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal immediate>
          <h1 className="text-4xl font-bold tracking-tight">
            {t("about.title")}
          </h1>
          <div className="mt-5 max-w-2xl space-y-4 text-muted-foreground">
            <p>{t("about.story1")}</p>
            <p>{t("about.story2")}</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Image
            src="/images/about-mural.jpg"
            alt={t("about.muralAlt")}
            width={1600}
            height={1202}
            sizes="(min-width: 1152px) 1100px, 100vw"
            className="mt-10 aspect-[16/9] w-full rounded-2xl object-cover"
          />
        </Reveal>
      </section>

      {/* Mission */}
      <section className="mt-20 bg-warm-beige py-16 dark:bg-card">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-sm font-semibold tracking-wide text-caramel uppercase">
              {t("about.missionLabel")}
            </h2>
            <p className="mt-4 max-w-3xl font-heading text-2xl font-semibold text-balance sm:text-3xl">
              {t("about.missionText")}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight">
            {t("about.valuesTitle")}
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {VALUE_IDS.map((value, i) => (
            <Reveal key={value.id} delay={i * 0.1}>
              <Card className="h-full">
                <CardHeader>
                  <value.icon
                    aria-hidden="true"
                    className="mb-2 h-6 w-6 text-caramel"
                  />
                  <CardTitle className="font-heading">
                    {t(`about.values.${value.id}.title`)}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {t(`about.values.${value.id}.body`)}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Sourcing + interior */}
      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight">
              {t("about.sourcingTitle")}
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>{t("about.sourcing1")}</p>
              <p>{t("about.sourcing2")}</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="text-3xl font-bold tracking-tight">
              {t("about.roomTitle")}
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>{t("about.room1")}</p>
              <p>{t("about.room2")}</p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <Image
            src="/images/about-pastry.jpg"
            alt={t("about.pastryAlt")}
            width={1600}
            height={1201}
            sizes="(min-width: 1152px) 1100px, 100vw"
            className="mt-12 aspect-[16/9] w-full rounded-2xl object-cover"
          />
        </Reveal>
      </section>
    </main>
  );
}

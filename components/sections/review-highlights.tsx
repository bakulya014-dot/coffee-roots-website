"use client";

import { Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/hooks/useLanguage";
import { RATING } from "@/lib/constants";

// Fictional reviews per SPEC.md §7 — ids into reviews.* in /messages.
const REVIEW_IDS = ["r1", "r2", "r3"] as const;

export function ReviewHighlights() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <Reveal>
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-3xl font-bold tracking-tight">
            {t("home.reviewsTitle")}
          </h2>
          <p className="inline-flex items-center gap-1.5 rounded-full bg-warm-beige px-3 py-1 text-sm font-medium dark:bg-secondary">
            <Star
              aria-hidden="true"
              className="h-3.5 w-3.5 fill-caramel text-caramel"
            />
            {RATING.score} · {RATING.count} {t("hero.reviews")}
          </p>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {REVIEW_IDS.map((id, i) => (
          <Reveal key={id} delay={i * 0.1}>
            <Card className="h-full">
              <CardContent className="flex h-full flex-col justify-between gap-4">
                <blockquote className="text-sm leading-relaxed">
                  &ldquo;{t(`reviews.${id}.quote`)}&rdquo;
                </blockquote>
                <p className="text-sm font-semibold text-caramel">
                  — {t(`reviews.${id}.name`)}
                </p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

"use client";

import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/hooks/useLanguage";

interface PageIntroProps {
  titleKey: string;
  introKey: string;
}

/** Shared h1 + lede block used by the top of each subpage. */
export function PageIntro({ titleKey, introKey }: PageIntroProps) {
  const { t } = useLanguage();

  return (
    <Reveal immediate>
      <h1 className="text-4xl font-bold tracking-tight">{t(titleKey)}</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">{t(introKey)}</p>
    </Reveal>
  );
}

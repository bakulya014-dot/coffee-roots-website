"use client";

import { motion, useReducedMotion } from "motion/react";

import { useLanguage } from "@/hooks/useLanguage";
import { LANGUAGES } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * EN | RU | KZ pill group. The active highlight is a shared-layout motion
 * element that slides between options.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage, t } = useLanguage();
  const reducedMotion = useReducedMotion();

  return (
    <div
      role="group"
      aria-label={t("common.languageSwitcher")}
      className={cn(
        "flex items-center gap-0.5 rounded-full border border-border bg-cream/60 p-0.5 backdrop-blur-sm dark:bg-charcoal/60",
        className,
      )}
    >
      {LANGUAGES.map((lang) => {
        const active = lang.code === language;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLanguage(lang.code)}
            aria-pressed={active}
            aria-label={lang.nativeName}
            className={cn(
              "relative rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors",
              "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:outline-none",
              active
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-caramel",
            )}
          >
            {active && (
              <motion.span
                layoutId="language-pill"
                aria-hidden="true"
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 400, damping: 32 }
                }
                className="absolute inset-0 -z-10 rounded-full bg-primary"
              />
            )}
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}

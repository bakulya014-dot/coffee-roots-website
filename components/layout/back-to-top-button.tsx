"use client";

import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { useLanguage } from "@/hooks/useLanguage";
import { SCROLL } from "@/lib/constants";
import { useScrollPast } from "@/hooks/use-scroll-past";

export function BackToTopButton() {
  const visible = useScrollPast(SCROLL.backToTopThreshold);
  const reducedMotion = useReducedMotion();
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label={t("common.backToTop")}
          data-back-to-top
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: reducedMotion ? 0 : 0.2 }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: reducedMotion ? "auto" : "smooth",
            })
          }
          className="fixed right-5 bottom-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-caramel text-cream shadow-lg transition-colors hover:bg-coffee-brown focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:text-charcoal dark:hover:bg-cream"
        >
          <ArrowUp aria-hidden="true" className="h-5 w-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

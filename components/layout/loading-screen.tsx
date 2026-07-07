"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { useLanguage } from "@/hooks/useLanguage";
import { SITE } from "@/lib/constants";

/**
 * Branded overlay shown while the initial page load settles.
 *
 * "Initial load only" is guaranteed by architecture: this component lives in
 * the root layout, which mounts once per full page load — App Router
 * client-side navigations re-render pages, not the root layout, so the
 * overlay never replays between routes.
 */
const DISPLAY_MS = 900;

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const reducedMotion = useReducedMotion();
  const { t } = useLanguage();

  useEffect(() => {
    // Under reduced motion, dismiss immediately: a decorative hold with a
    // fade is exactly the kind of motion the preference asks us to skip.
    const timer = setTimeout(() => setDone(true), reducedMotion ? 0 : DISPLAY_MS);
    return () => clearTimeout(timer);
  }, [reducedMotion]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          data-loading-screen
          role="status"
          aria-label={t("common.loading")}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-cream dark:bg-charcoal"
        >
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.4, ease: "easeOut" }}
            className="font-heading text-2xl font-bold tracking-tight"
          >
            {SITE.name}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

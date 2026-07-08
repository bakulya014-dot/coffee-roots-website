"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarCheck } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { useLanguage } from "@/hooks/useLanguage";
import { useScrollPast } from "@/hooks/use-scroll-past";
import { SCROLL } from "@/lib/constants";

/** Floating "Reserve a table" action (SPEC.md §6); hidden on the
 *  reservations page itself and until the visitor starts reading. */
export function FloatingReserveButton() {
  const visible = useScrollPast(SCROLL.backToTopThreshold);
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const { t } = useLanguage();

  if (pathname === "/reservations") return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: reducedMotion ? 0 : 0.2 }}
          className="fixed bottom-5 left-5 z-50"
        >
          <Link
            href="/reservations"
            className="flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg transition-colors hover:bg-caramel focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            <CalendarCheck aria-hidden="true" className="h-4 w-4" />
            {t("hero.reserveCta")}
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

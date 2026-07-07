"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { useLanguage } from "@/hooks/useLanguage";
import { NAV_LINKS, SCROLL, SITE } from "@/lib/constants";
import { useScrollPast } from "@/hooks/use-scroll-past";
import { cn } from "@/lib/utils";

/** Hamburger line offsets: top/bottom lines rotate into an X, middle fades. */
const LINE_CLASS = "absolute left-0 h-0.5 w-6 rounded-full bg-current";

export function Navbar() {
  const scrolled = useScrollPast(SCROLL.navFrostThreshold);
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const { t } = useLanguage();

  const close = useCallback(() => setOpen(false), []);

  // Escape closes the mobile menu and returns focus to the trigger,
  // matching disclosure-widget keyboard expectations.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  const frosted = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        frosted
          ? "border-b border-border bg-cream/80 shadow-sm backdrop-blur-md dark:bg-charcoal/80"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label={t("common.mainNav")}
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
      >
        <Link
          href="/"
          className="font-heading text-lg font-bold tracking-tight transition-colors hover:text-caramel"
        >
          {SITE.name}
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-caramel"
              >
                {t(link.labelKey)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden md:flex" />

          {/* Mobile hamburger — three lines morph into an X */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("common.closeMenu") : t("common.openMenu")}
            className="relative flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:text-caramel md:hidden"
          >
            <span className="relative block h-4 w-6">
              <motion.span
                className={LINE_CLASS}
                style={{ top: 0 }}
                animate={open ? { y: 7, rotate: 45 } : { y: 0, rotate: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.25 }}
              />
              <motion.span
                className={LINE_CLASS}
                style={{ top: 7 }}
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: reducedMotion ? 0 : 0.15 }}
              />
              <motion.span
                className={LINE_CLASS}
                style={{ top: 14 }}
                animate={open ? { y: -7, rotate: -45 } : { y: 0, rotate: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.25 }}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label={t("common.mobileNav")}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.25, ease: "easeOut" }}
            className="overflow-hidden border-b border-border bg-cream/95 backdrop-blur-md md:hidden dark:bg-charcoal/95"
          >
            <ul className="flex flex-col gap-1 px-4 py-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={close}
                    className="block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-warm-beige hover:text-coffee-brown dark:hover:bg-secondary dark:hover:text-cream"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
              <li className="mt-2 border-t border-border pt-3 pb-1">
                <LanguageSwitcher className="w-fit" />
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

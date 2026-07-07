"use client";

import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

import { InstagramIcon } from "@/components/ui/instagram-icon";
import { useLanguage } from "@/hooks/useLanguage";
import { NAV_LINKS, PORTFOLIO_DISCLAIMER, SITE } from "@/lib/constants";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-warm-beige dark:bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        {/* Brand */}
        <div className="space-y-3">
          <p className="font-heading text-lg font-bold tracking-tight">
            {SITE.name}
          </p>
          <p className="text-sm text-muted-foreground">{t("footer.tagline")}</p>
          <p className="flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
            {SITE.address}
          </p>
        </div>

        {/* Sitemap */}
        <nav aria-label={t("common.footerNav")}>
          <h2 className="mb-3 text-sm font-semibold tracking-wide uppercase">
            {t("footer.explore")}
          </h2>
          <ul className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-caramel"
                >
                  {t(link.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social / contact */}
        <div>
          <h2 className="mb-3 text-sm font-semibold tracking-wide uppercase">
            {t("footer.connect")}
          </h2>
          <ul className="space-y-2">
            <li>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-caramel"
              >
                <InstagramIcon className="h-4 w-4" />
                {t("footer.instagram")}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-caramel"
              >
                <Mail aria-hidden="true" className="h-4 w-4" />
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl space-y-2 px-4 py-6 sm:px-6">
          {/* SPEC.md §0: must appear verbatim — deliberately not translated. */}
          <p className="text-xs text-muted-foreground">
            {PORTFOLIO_DISCLAIMER}
          </p>
          <p className="text-xs text-muted-foreground">
            {t("common.copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}

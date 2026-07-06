import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

import { InstagramIcon } from "@/components/ui/instagram-icon";
import { NAV_LINKS, PORTFOLIO_DISCLAIMER, SITE } from "@/lib/constants";

// Server component — purely static content, no browser APIs needed.
export function Footer() {
  return (
    <footer className="border-t border-border bg-warm-beige dark:bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        {/* Brand */}
        <div className="space-y-3">
          <p className="font-heading text-lg font-bold tracking-tight">
            {SITE.name}
          </p>
          <p className="text-sm text-muted-foreground">{SITE.tagline}</p>
          <p className="flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
            {SITE.address}
          </p>
        </div>

        {/* Sitemap */}
        <nav aria-label="Footer">
          <h2 className="mb-3 text-sm font-semibold tracking-wide uppercase">
            Explore
          </h2>
          <ul className="grid grid-cols-2 gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-caramel"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social / contact */}
        <div>
          <h2 className="mb-3 text-sm font-semibold tracking-wide uppercase">
            Connect
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
                Instagram
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
          <p className="text-xs text-muted-foreground">
            {PORTFOLIO_DISCLAIMER}
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE.name} portfolio concept.
          </p>
        </div>
      </div>
    </footer>
  );
}

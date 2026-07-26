import type { Metadata } from "next";

import { MenuBrowser } from "@/components/sections/menu-browser";
import { PageBanner } from "@/components/ui/page-banner";
import { PageIntro } from "@/components/ui/page-intro";

// Metadata stays English for now — localized metadata arrives with
// locale-aware routing (SEO section of the i18n plan).
export const metadata: Metadata = {
  title: "Menu",
  description:
    "Specialty coffee, loose-leaf tea, pastries, and all-day breakfast and lunch at COFFEE ROOTS, Almaty. Prices in tenge.",
};

export default function MenuPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pt-28 pb-20 sm:px-6">
      <PageIntro titleKey="menu.title" introKey="menu.intro" />
      <div className="mt-8">
        <PageBanner
          src="/images/menu-banner.jpg"
          altKey="menu.bannerAlt"
          width={1800}
          height={834}
          priority
        />
      </div>
      <div className="mt-10">
        <MenuBrowser />
      </div>
    </main>
  );
}

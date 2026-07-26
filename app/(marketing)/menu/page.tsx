import type { Metadata } from "next";

import { MenuBrowser } from "@/components/sections/menu-browser";
import { PageIntro } from "@/components/ui/page-intro";

// Metadata stays English for now — localized metadata arrives with
// locale-aware routing (SEO section of the i18n plan).
export const metadata: Metadata = {
  title: "Menu",
  description:
    "Pizza proved 72 hours, pasta, salads, sandwiches and all-day breakfast at COFFEE ROOTS, Almaty. Prices in tenge.",
};

// No banner image here on purpose: the menu is a reading page, and the
// photography lives on Home, About, Gallery and Contact.
export default function MenuPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 pt-28 pb-20 sm:px-6">
      <PageIntro titleKey="menu.title" introKey="menu.intro" />
      <div className="mt-10">
        <MenuBrowser />
      </div>
    </main>
  );
}

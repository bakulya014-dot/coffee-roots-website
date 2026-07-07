import type { Metadata } from "next";

import { MenuBrowser } from "@/components/sections/menu-browser";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Specialty coffee, loose-leaf tea, pastries, and all-day breakfast and lunch at COFFEE ROOTS, Almaty. Prices in tenge.",
};

export default function MenuPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pt-28 pb-20 sm:px-6">
      <Reveal immediate>
        <h1 className="text-4xl font-bold tracking-tight">Menu</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Everything is made on the bar or in our kitchen each morning. Prices
          in tenge; the coffee rotation changes with the season.
        </p>
      </Reveal>
      <div className="mt-10">
        <MenuBrowser />
      </div>
    </main>
  );
}

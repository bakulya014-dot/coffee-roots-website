import type { Metadata } from "next";

import { GalleryGrid } from "@/components/sections/gallery-grid";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Inside COFFEE ROOTS — the room, the bar, and the coffee. Portfolio concept gallery with placeholder artwork.",
};

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pt-28 pb-20 sm:px-6">
      <Reveal immediate>
        <h1 className="text-4xl font-bold tracking-tight">Gallery</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Placeholder artwork for now — the real photo set replaces these
          tiles without touching the layout. Click any tile to view it large.
        </p>
      </Reveal>
      <div className="mt-10">
        <GalleryGrid />
      </div>
    </main>
  );
}

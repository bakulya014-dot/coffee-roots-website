import type { Metadata } from "next";

import { GalleryGrid } from "@/components/sections/gallery-grid";
import { PageIntro } from "@/components/ui/page-intro";

// Metadata stays English for now — localized metadata arrives with
// locale-aware routing (SEO section of the i18n plan).
export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Inside COFFEE ROOTS — the room, the bar, and the coffee. Portfolio concept gallery with placeholder artwork.",
};

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pt-28 pb-20 sm:px-6">
      <PageIntro titleKey="gallery.title" introKey="gallery.intro" />
      <div className="mt-10">
        <GalleryGrid />
      </div>
    </main>
  );
}

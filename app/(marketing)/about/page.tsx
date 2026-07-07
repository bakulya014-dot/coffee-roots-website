import type { Metadata } from "next";

import { AboutContent } from "@/components/sections/about-content";

// Metadata stays English for now — localized metadata arrives with
// locale-aware routing (SEO section of the i18n plan).
export const metadata: Metadata = {
  title: "About",
  description:
    "The story, values, and sourcing philosophy behind COFFEE ROOTS — a specialty coffee room on Bogenbai Batyr Street, Almaty.",
};

export default function AboutPage() {
  return <AboutContent />;
}

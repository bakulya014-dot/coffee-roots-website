import type { Metadata } from "next";

import { ContactContent } from "@/components/sections/contact-content";
import { PageIntro } from "@/components/ui/page-intro";

// Metadata stays English for now — localized metadata arrives with
// locale-aware routing (SEO section of the i18n plan).
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Find COFFEE ROOTS on Bogenbai Batyr Street, Almaty — opening hours, map, Instagram, and a contact form.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pt-28 pb-20 sm:px-6">
      <PageIntro titleKey="contact.title" introKey="contact.intro" />
      <div className="mt-10">
        <ContactContent />
      </div>
    </main>
  );
}

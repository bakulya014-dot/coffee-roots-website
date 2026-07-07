import type { Metadata } from "next";

import { ReservationForm } from "@/components/sections/reservation-form";
import { PageIntro } from "@/components/ui/page-intro";

// Metadata stays English for now — localized metadata arrives with
// locale-aware routing (SEO section of the i18n plan).
export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Reserve a table at COFFEE ROOTS on Bogenbai Batyr Street, Almaty — window seats, quiet corners, and remote-work-friendly mornings.",
};

export default function ReservationsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pt-28 pb-20 sm:px-6">
      <PageIntro titleKey="reservations.title" introKey="reservations.intro" />
      <div className="mt-10">
        <ReservationForm />
      </div>
    </main>
  );
}

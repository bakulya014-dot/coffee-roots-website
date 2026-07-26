// ─────────────────────────────────────────────────────────────────────────────
//  HOW RESERVATIONS AND MESSAGES REACH THE CAFÉ
// ─────────────────────────────────────────────────────────────────────────────
//  The site is a static export (no server of our own), so submissions are
//  delivered through channels that work straight from the browser:
//
//    1. EMAIL  — posted to Web3Forms, which forwards it to the café's inbox.
//    2. WHATSAPP — opens WhatsApp with the booking pre-filled; the guest taps
//       send, so it arrives from their own number and the café can reply.
//
//  Both are optional and independent. With neither configured the forms stay
//  in demo mode: they validate and confirm, but nothing is transmitted.
//
//  ── TO GO LIVE (two things the café owners need to provide) ────────────────
//
//  A. WHATSAPP — set `whatsappNumber` to the café's number in international
//     format, digits only, no "+" and no spaces. Kazakhstan numbers start 7:
//        whatsappNumber: "77011234567"
//
//  B. EMAIL — get a free access key at https://web3forms.com (enter the café's
//     email; the key arrives by mail — it is a public submission key, safe to
//     commit, it only allows sending TO that address). Then set:
//        web3formsKey: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
//     and set `notifyEmail` to the address that should receive bookings.
// ─────────────────────────────────────────────────────────────────────────────

export const BOOKING = {
  /** Café WhatsApp, international digits only (e.g. "77011234567"). Empty = off. */
  whatsappNumber: "",
  /** Web3Forms access key. Empty = email delivery off. */
  web3formsKey: "",
  /** Where bookings should land. Update once the café confirms the address. */
  notifyEmail: "hello@coffeeroots.kz",
} as const;

export const emailEnabled = BOOKING.web3formsKey.length > 0;
export const whatsappEnabled = BOOKING.whatsappNumber.length > 0;
/** True when nothing is wired up yet — forms then say so plainly. */
export const isDemoMode = !emailEnabled && !whatsappEnabled;

export interface ReservationDetails {
  name: string;
  contact: string;
  date: string;
  time: string;
  guests: string;
}

/**
 * Plain-text booking summary. Labels come from the caller so the message is
 * written in whatever language the guest was using.
 */
export function formatReservation(
  values: ReservationDetails,
  labels: {
    heading: string;
    name: string;
    contact: string;
    date: string;
    time: string;
    guests: string;
  },
): string {
  return [
    labels.heading,
    "",
    `${labels.name}: ${values.name}`,
    `${labels.contact}: ${values.contact}`,
    `${labels.date}: ${values.date}`,
    `${labels.time}: ${values.time}`,
    `${labels.guests}: ${values.guests}`,
  ].join("\n");
}

/** Deep link that opens WhatsApp with the message ready to send. */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${BOOKING.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Sends a submission to the café's inbox via Web3Forms.
 * Resolves false (never throws) so the UI can fall back gracefully — a guest
 * should never see a stack trace because a third party had a bad minute.
 */
export async function sendEmail(payload: {
  subject: string;
  message: string;
  replyTo?: string;
}): Promise<boolean> {
  if (!emailEnabled) return false;
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: BOOKING.web3formsKey,
        subject: payload.subject,
        from_name: "COFFEE ROOTS website",
        replyto: payload.replyTo,
        message: payload.message,
      }),
    });
    const data: unknown = await res.json();
    return (
      res.ok &&
      typeof data === "object" &&
      data !== null &&
      (data as { success?: boolean }).success === true
    );
  } catch {
    return false;
  }
}

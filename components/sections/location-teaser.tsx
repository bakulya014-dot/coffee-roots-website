import { Clock, MapPin } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SITE } from "@/lib/constants";

export function LocationTeaser() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight">Find us</h2>
          <address className="mt-4 space-y-2 text-muted-foreground not-italic">
            <p className="flex items-start gap-2">
              <MapPin
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-caramel"
              />
              <span>
                {SITE.address}
                <br />
                <span className="text-sm">{SITE.addressLatin}</span>
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Clock aria-hidden="true" className="h-4 w-4 shrink-0 text-caramel" />
              {SITE.hours}
            </p>
          </address>
          <p className="mt-4 text-sm text-muted-foreground">
            Directions, the map, and the contact form live on the Contact page
            — coming in a later phase.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          {/* Google Maps placeholder — real embed ships with the Contact page */}
          <div
            aria-hidden="true"
            className="flex aspect-video items-center justify-center rounded-2xl border border-border bg-gradient-to-br from-warm-beige to-cream dark:from-secondary dark:to-charcoal"
          >
            <MapPin className="h-10 w-10 text-caramel/60" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

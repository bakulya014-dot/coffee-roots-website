import type { Metadata } from "next";
import { Handshake, Lamp, Sprout } from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story, values, and sourcing philosophy behind COFFEE ROOTS — a specialty coffee room on Bogenbai Batyr Street, Almaty.",
};

// Fictional-but-realistic brand copy per SPEC.md §5. Not factual claims
// about the real business.
const VALUES = [
  {
    icon: Sprout,
    title: "Craft without ceremony",
    body: "Precision in the cup, none of the gatekeeping. If you want to know why your filter tastes like apricot, we'll tell you — if you just want good coffee, that's the whole point.",
  },
  {
    icon: Lamp,
    title: "Room to stay",
    body: "Nobody hovers over your table. Long mornings, slow laptops, second refills — the room is designed for people who settle in, not pass through.",
  },
  {
    icon: Handshake,
    title: "Direct to the grower",
    body: "We pay producers directly and publish what's in the hopper. Better prices at origin make better coffee here — it's not charity, it's how quality works.",
  },
] as const;

export default function AboutPage() {
  return (
    <main className="pt-28 pb-20">
      {/* Story */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal immediate>
          <h1 className="text-4xl font-bold tracking-tight">
            A small room with tall windows
          </h1>
          <div className="mt-5 max-w-2xl space-y-4 text-muted-foreground">
            <p>
              Coffee Roots opened on Bogenbai Batyr Street with one machine,
              four tables, and a conviction that Almaty didn&apos;t need
              another place to grab coffee — it needed a place to stay with
              it. The first winter, regulars outnumbered chairs. We took the
              hint and knocked through to the room next door.
            </p>
            <p>
              What hasn&apos;t changed: beans roasted light enough to taste
              where they grew, milk steamed to order rather than by habit,
              and a room that runs on morning light for most of the day.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Mission */}
      <section className="mt-20 bg-warm-beige py-16 dark:bg-card">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-sm font-semibold tracking-wide text-caramel uppercase">
              Our mission
            </h2>
            <p className="mt-4 max-w-3xl font-heading text-2xl font-semibold text-balance sm:text-3xl">
              Make specialty coffee feel ordinary — something you have every
              day, in a room that treats your time as well as your cup.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight">What we stand by</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.1}>
              <Card className="h-full">
                <CardHeader>
                  <value.icon
                    aria-hidden="true"
                    className="mb-2 h-6 w-6 text-caramel"
                  />
                  <CardTitle className="font-heading">{value.title}</CardTitle>
                  <CardDescription className="leading-relaxed">
                    {value.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Sourcing */}
      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight">
              How we source
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                Two single origins rotate through the hopper every season —
                one washed, one natural — bought through direct-trade
                relationships rather than the commodity market. When a lot
                runs out, it&apos;s gone; we&apos;d rather change the card on
                the grinder than stretch a coffee past its best.
              </p>
              <p>
                Espresso stays consistent; filter is where we experiment. If
                something unusual lands — a honey-processed lot, an
                experimental fermentation — it shows up on the V60 bar first.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="text-3xl font-bold tracking-tight">The room</h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              <p>
                Natural light over fixtures, reclaimed wood over laminate,
                and acoustics tuned so a full room still sounds like a
                murmur. The window bench catches sun until mid-afternoon;
                the back corners stay quiet, with outlets at every seat.
              </p>
              <p>
                It&apos;s deliberately a room for remote workers as much as
                for dates and долгие разговоры — stay as long as the coffee
                keeps coming.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

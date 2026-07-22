"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/hooks/useLanguage";
import { SITE } from "@/lib/constants";

export function LocationTeaser() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight">
            {t("home.findUsTitle")}
          </h2>
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
              {t("footer.hours")}
            </p>
          </address>
          <p className="mt-4 text-sm text-muted-foreground">
            <Link
              href="/contact"
              className="font-medium text-caramel underline-offset-4 hover:underline"
            >
              {t("home.contactNote")}
            </Link>
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <Image
            src="/images/cafe-bar.jpg"
            alt={t("home.locationAlt")}
            width={1600}
            height={900}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="aspect-video w-full rounded-2xl border border-border object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

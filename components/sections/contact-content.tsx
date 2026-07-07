"use client";

import { Clock, ExternalLink, Mail, MapPin } from "lucide-react";

import { ContactForm } from "@/components/sections/contact-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/hooks/useLanguage";
import { MAPS, OPENING_HOURS, SITE } from "@/lib/constants";

export function ContactContent() {
  const { t } = useLanguage();

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {/* Form */}
      <Reveal>
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          {t("contact.formTitle")}
        </h2>
        <ContactForm />
      </Reveal>

      {/* Address, hours, map */}
      <div className="space-y-6">
        <Reveal delay={0.1}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-heading">
                <MapPin aria-hidden="true" className="h-5 w-5 text-caramel" />
                {t("contact.addressTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <address className="text-muted-foreground not-italic">
                {SITE.address}
                <br />
                <span className="text-sm">{SITE.addressLatin}</span>
              </address>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" asChild>
                  <a
                    href={MAPS.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink aria-hidden="true" className="h-4 w-4" />
                    {t("contact.openInMaps")}
                  </a>
                </Button>
              </div>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href={SITE.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-caramel"
                  >
                    <InstagramIcon className="h-4 w-4" />
                    {t("footer.instagram")}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-caramel"
                  >
                    <Mail aria-hidden="true" className="h-4 w-4" />
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={0.15}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-heading">
                <Clock aria-hidden="true" className="h-5 w-5 text-caramel" />
                {t("contact.hoursTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full text-sm">
                <tbody>
                  {OPENING_HOURS.map((row) => (
                    <tr
                      key={row.dayKey}
                      className="border-b border-border last:border-0"
                    >
                      <th
                        scope="row"
                        className="py-2 pr-4 text-left font-medium"
                      >
                        {t(row.dayKey)}
                      </th>
                      <td className="py-2 text-right text-muted-foreground">
                        {row.hours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={0.2}>
          {/* Keyless Google Maps embed; lazy so it never blocks first paint */}
          <iframe
            src={MAPS.embedUrl}
            title={t("contact.mapTitle")}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="aspect-video w-full rounded-2xl border border-border"
          />
        </Reveal>
      </div>
    </div>
  );
}

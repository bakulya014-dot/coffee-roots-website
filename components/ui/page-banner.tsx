"use client";

import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/hooks/useLanguage";

interface PageBannerProps {
  src: string;
  /** Translation key for the alt text. */
  altKey: string;
  width: number;
  height: number;
  /** Tailwind aspect ratio utility, e.g. "aspect-[21/9]". */
  aspect?: string;
  priority?: boolean;
}

/** Wide photographic band used at the top of a subpage. */
export function PageBanner({
  src,
  altKey,
  width,
  height,
  aspect = "aspect-[21/9]",
  priority = false,
}: PageBannerProps) {
  const { t } = useLanguage();

  return (
    <Reveal immediate>
      <Image
        src={src}
        alt={t(altKey)}
        width={width}
        height={height}
        priority={priority}
        sizes="(min-width: 1152px) 1100px, 100vw"
        className={`w-full rounded-2xl object-cover ${aspect}`}
      />
    </Reveal>
  );
}

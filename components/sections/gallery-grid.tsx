"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Expand } from "lucide-react";

import { Lightbox } from "@/components/sections/lightbox";
import { useLanguage } from "@/hooks/useLanguage";
import { GALLERY_IMAGES } from "@/lib/gallery-data";

export function GalleryGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const tileRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const { t } = useLanguage();

  const close = () => {
    // Return focus to the tile that opened the lightbox (a11y).
    const trigger = openIndex !== null ? tileRefs.current[openIndex] : null;
    setOpenIndex(null);
    trigger?.focus();
  };

  return (
    <>
      {/* CSS-columns masonry: no JS measuring, responsive breakpoints via
          column counts (SPEC.md §5 "Pinterest-style"). */}
      <div className="columns-2 gap-3 sm:columns-3">
        {GALLERY_IMAGES.map((image, i) => {
          const alt = t(`gallery.images.${image.id}.alt`);
          return (
            <button
              key={image.id}
              ref={(el) => {
                tileRefs.current[i] = el;
              }}
              type="button"
              onClick={() => setOpenIndex(i)}
              aria-label={t("gallery.openImage", { alt })}
              className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded-xl focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <Image
                src={image.src}
                alt={alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 640px) 33vw, 50vw"
                className="h-auto w-full transition-transform duration-300 motion-safe:group-hover:scale-105"
              />
              {/* Hover/focus overlay */}
              <span
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/30 group-focus-visible:bg-charcoal/30"
              >
                <Expand className="h-6 w-6 text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
              </span>
            </button>
          );
        })}
      </div>

      <Lightbox
        images={GALLERY_IMAGES}
        index={openIndex}
        onClose={close}
        onNavigate={setOpenIndex}
      />
    </>
  );
}

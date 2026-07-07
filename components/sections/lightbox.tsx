"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { useLanguage } from "@/hooks/useLanguage";
import type { GalleryImage } from "@/lib/gallery-data";

interface LightboxProps {
  images: readonly GalleryImage[];
  /** Index of the open image, or null when closed. */
  index: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const reducedMotion = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const open = index !== null;

  const step = useCallback(
    (delta: number) => {
      if (index === null) return;
      onNavigate((index + delta + images.length) % images.length);
    },
    [index, images.length, onNavigate],
  );

  // Keyboard: Escape closes, arrows navigate, Tab stays inside the dialog.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "Tab") {
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>("button");
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose, step]);

  // Lock body scroll and move focus into the dialog while open; the
  // gallery grid restores focus to the trigger tile on close.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector("button")?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const image = index !== null ? images[index] : null;
  const alt = image ? t(`gallery.images.${image.id}.alt`) : "";
  const duration = reducedMotion ? 0 : 0.25;

  return (
    <AnimatePresence>
      {image && index !== null && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={t("gallery.dialogLabel", {
            current: index + 1,
            total: images.length,
            alt,
          })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration }}
          onClick={onClose}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal/90 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label={t("gallery.close")}
            onClick={onClose}
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 focus-visible:ring-2 focus-visible:ring-caramel focus-visible:outline-none"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label={t("gallery.previous")}
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 focus-visible:ring-2 focus-visible:ring-caramel focus-visible:outline-none"
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>

          {/* Scale/fade transition per SPEC.md §5; key remounts on navigate */}
          <motion.figure
            key={image.id}
            initial={{ opacity: 0, scale: reducedMotion ? 1 : 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[85svh] flex-col items-center gap-3"
          >
            <Image
              src={image.src}
              alt={alt}
              width={image.width}
              height={image.height}
              sizes="90vw"
              className="max-h-[75svh] w-auto rounded-lg object-contain"
            />
            <figcaption className="text-sm text-cream/80">
              {alt} · {index + 1} / {images.length}
            </figcaption>
          </motion.figure>

          <button
            type="button"
            aria-label={t("gallery.next")}
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 focus-visible:ring-2 focus-visible:ring-caramel focus-visible:outline-none"
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

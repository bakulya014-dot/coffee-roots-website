// Gallery images (SPEC.md §5) — official COFFEE ROOTS photography supplied by
// the café owners and optimized by scripts/process-owner-photos.mjs.
// Alt text lives in /messages under gallery.images.<id>.alt.

export interface GalleryImage {
  /** Key into gallery.images.* in /messages */
  id: string;
  src: string;
  width: number;
  height: number;
}

// Mixed portrait proportions keep the masonry rhythm lively.
export const GALLERY_IMAGES: readonly GalleryImage[] = [
  { id: "mural", src: "/images/gallery-mural.jpg", width: 1200, height: 1810 },
  { id: "drinks", src: "/images/gallery-drinks.jpg", width: 1200, height: 1559 },
  { id: "pastry", src: "/images/gallery-pastry.jpg", width: 1300, height: 1398 },
  { id: "vinyl", src: "/images/gallery-vinyl.jpg", width: 1200, height: 1600 },
  { id: "record", src: "/images/gallery-record.jpg", width: 1200, height: 1600 },
] as const;

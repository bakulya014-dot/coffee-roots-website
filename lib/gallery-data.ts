// Gallery images (SPEC.md §5, §10) — AI-generated editorial photography
// (Higgsfield Soul 2.0), art-directed to match the real business's visual
// identity. Produced by scripts/fetch-and-optimize.mjs; alt text lives in
// /messages under gallery.images.<id>.alt.

export interface GalleryImage {
  /** Key into gallery.images.* in /messages */
  id: string;
  src: string;
  width: number;
  height: number;
}

// Aspect ratios alternate 2:3 / 1:1 / 3:4 for masonry rhythm (§10).
export const GALLERY_IMAGES: readonly GalleryImage[] = [
  { id: "g1", src: "/images/gallery-01.jpg", width: 1067, height: 1600 },
  { id: "g2", src: "/images/gallery-02.jpg", width: 1600, height: 1600 },
  { id: "g3", src: "/images/gallery-03.jpg", width: 1200, height: 1600 },
  { id: "g4", src: "/images/gallery-04.jpg", width: 1067, height: 1600 },
  { id: "g5", src: "/images/gallery-05.jpg", width: 1600, height: 1600 },
  { id: "g6", src: "/images/gallery-06.jpg", width: 1200, height: 1600 },
  { id: "g7", src: "/images/gallery-07.jpg", width: 1067, height: 1600 },
  { id: "g8", src: "/images/gallery-08.jpg", width: 1200, height: 1600 },
  { id: "g9", src: "/images/gallery-09.jpg", width: 1200, height: 1600 },
] as const;

// Language-independent home page data. All user-facing text lives in
// /messages (tile alts under home.tiles.*, reviews under reviews.*).

export interface InstagramTile {
  /** Key into home.tiles.* in /messages */
  id: string;
  src: string;
}

// Official COFFEE ROOTS photography supplied by the café owners, cropped to
// square by scripts/process-owner-photos.mjs.
export const INSTAGRAM_TILES: readonly InstagramTile[] = [
  { id: "matcha", src: "/images/tile-matcha.jpg" },
  { id: "pastry", src: "/images/tile-pastry.jpg" },
  { id: "mural", src: "/images/tile-mural.jpg" },
  { id: "coldbrew", src: "/images/tile-coldbrew.jpg" },
  { id: "vinyl", src: "/images/tile-vinyl.jpg" },
  { id: "record", src: "/images/tile-record.jpg" },
] as const;

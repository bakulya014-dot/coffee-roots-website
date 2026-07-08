// Language-independent home page data. All user-facing text lives in
// /messages (tile alts under home.tiles.*, reviews under reviews.*).

export interface InstagramTile {
  /** Key into home.tiles.* in /messages */
  id: string;
  src: string;
}

// AI-generated editorial photos matching the real feed's subjects.
export const INSTAGRAM_TILES: readonly InstagramTile[] = [
  { id: "latte", src: "/images/tile-latte.jpg" },
  { id: "pastry", src: "/images/tile-pastry.jpg" },
  { id: "work", src: "/images/tile-work.jpg" },
  { id: "plants", src: "/images/tile-plants.jpg" },
  { id: "dessert", src: "/images/tile-dessert.jpg" },
  { id: "beans", src: "/images/tile-beans.jpg" },
] as const;

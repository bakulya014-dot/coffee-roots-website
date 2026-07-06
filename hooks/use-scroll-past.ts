"use client";

import { useEffect, useState } from "react";

/**
 * Returns true once the window has scrolled past `threshold` px.
 * rAF-throttled so rapid scroll events collapse into one state check per
 * frame; React skips the re-render entirely when the boolean is unchanged.
 */
export function useScrollPast(threshold: number): boolean {
  const [past, setPast] = useState(false);

  useEffect(() => {
    let frame = 0;

    const check = () => setPast(window.scrollY > threshold);
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(check);
    };

    check(); // sync with current position on mount (e.g. reload mid-page)
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [threshold]);

  return past;
}

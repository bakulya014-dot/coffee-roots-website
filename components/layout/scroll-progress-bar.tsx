"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";

// scrollYProgress is a MotionValue — it drives the transform directly on the
// compositor without triggering React re-renders on scroll.
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const reducedMotion = useReducedMotion();
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
  });

  return (
    <motion.div
      aria-hidden="true"
      data-scroll-progress
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-caramel"
      // Springless when the user prefers reduced motion — the bar still
      // tracks, it just doesn't overshoot/settle.
      style={{ scaleX: reducedMotion ? scrollYProgress : smoothed }}
    />
  );
}

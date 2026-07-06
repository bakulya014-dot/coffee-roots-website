"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Seconds to wait before animating — use for staggering siblings. */
  delay?: number;
  /** Animate on mount (above-the-fold content) instead of on scroll into view. */
  immediate?: boolean;
}

/**
 * Fade-in / slide-up wrapper (SPEC.md §8). Client boundary is kept here so
 * sections themselves can stay server components.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  immediate = false,
}: RevealProps) {
  const reducedMotion = useReducedMotion();

  const initial = reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 };
  const visible = { opacity: 1, y: 0 };
  const transition = {
    duration: reducedMotion ? 0 : 0.6,
    delay: reducedMotion ? 0 : delay,
    ease: "easeOut" as const,
  };

  if (immediate) {
    return (
      <motion.div
        className={className}
        initial={initial}
        animate={visible}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={visible}
      viewport={{ once: true, amount: 0.2 }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

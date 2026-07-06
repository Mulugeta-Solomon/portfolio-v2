"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { EASE_OUT, VIEWPORT } from "@/lib/motion";

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

/** Scroll-reveal wrapper (replaces the design's Chrome-only CSS scroll-timeline). */
export function Reveal({ children, delay = 0, ...props }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: reduce ? 0.3 : 0.6, ease: EASE_OUT, delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

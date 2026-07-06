import type { Variants } from "motion/react";

/** Shared easing — a soft, modern "out" curve used across reveals. */
export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** whileInView viewport config matching the design's `entry 2%–34%` feel. */
export const VIEWPORT = { once: true, margin: "-12% 0px -12% 0px" } as const;

/** Hero entrance (on mount, above the fold) — stagger container + item. */
export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

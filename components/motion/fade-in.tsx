"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { fadeUpItem, staggerContainer } from "@/lib/motion";

/** Hero stagger container — animates children in on mount. */
export function FadeInStagger({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="show"
      variants={
        reduce
          ? { hidden: {}, show: { transition: { staggerChildren: 0 } } }
          : staggerContainer
      }
    >
      {children}
    </motion.div>
  );
}

/** A single staggered hero item. */
export function FadeInItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={reduce ? { hidden: { opacity: 0 }, show: { opacity: 1 } } : fadeUpItem}
    >
      {children}
    </motion.div>
  );
}

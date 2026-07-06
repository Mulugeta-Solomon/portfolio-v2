"use client";

import { useRef } from "react";
import type { PointerEvent, ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "motion/react";

/**
 * Tier-2 Liquid Glass — a specular sheen that lags the pointer via springs.
 * Compositor-only (background-position/opacity), gated to mouse + no-reduced-motion.
 */
export function GlassSheen({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(50);
  const y = useMotionValue(35);
  const sx = useSpring(x, { stiffness: 150, damping: 20, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 150, damping: 20, mass: 0.6 });
  const sheen = useMotionTemplate`radial-gradient(240px circle at ${sx}% ${sy}%, rgba(255,255,255,0.28), transparent 60%)`;

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set(((e.clientX - r.left) / r.width) * 100);
    y.set(((e.clientY - r.top) / r.height) * 100);
  }

  return (
    <div ref={ref} onPointerMove={onMove} className={className} style={{ position: "relative" }}>
      {children}
      {!reduce && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[3] mix-blend-soft-light"
          style={{ background: sheen, borderRadius: "inherit" }}
        />
      )}
    </div>
  );
}

"use client";

import { createContext, useContext, useId, useState, type ComponentPropsWithoutRef, type ReactNode } from "react";
import { clsx } from "clsx";
import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT } from "@/lib/motion";

/**
 * Sliding highlight ("magic move") — the site-wide hover treatment for lists.
 *
 * One plate per list glides from item to item via a shared `layoutId`, instead of
 * each item lifting on its own. Exactly one plate is ever mounted, so there are no
 * duplicate layout ids: it stays mounted on the last item it visited and fades to 0
 * when the pointer leaves, which is what gives the fade-out without <AnimatePresence>
 * (two elements sharing a layoutId mid-exit is what makes that approach stutter).
 *
 * Painting: the plate is `-z-10` inside an item that is `relative` with no stacking
 * context of its own, so it drops to the bottom of GlideList's `isolate` context —
 * beneath every item's content, including one it is travelling across. Wrap items
 * in <GlideItem> OUTSIDE any <Reveal>, or the plate gets trapped in that item's
 * transform and paints over its neighbours while gliding.
 */

interface GlideContextValue {
  /** the item under the pointer/focus right now — null once it leaves the list */
  activeId: string | null;
  /** the last item visited; keeps the plate mounted so it can fade out in place */
  restingId: string | null;
  activate: (id: string) => void;
  layoutId: string;
  spreadX: number;
  spreadY: number;
  radius: number;
  plateClassName: string;
}

const GlideContext = createContext<GlideContextValue | null>(null);

interface GlideListProps extends Omit<ComponentPropsWithoutRef<"div">, "onMouseLeave" | "onBlur"> {
  /** px the plate extends past each item on every side (a halo for bordered cards) */
  spread?: number;
  spreadX?: number;
  spreadY?: number;
  radius?: number;
  /** the plate's fill — a utility class, since `.glass` would beat one on the item */
  plateClassName?: string;
}

export function GlideList({
  children,
  className,
  spread = 0,
  spreadX = spread,
  spreadY = spread,
  radius = 14,
  plateClassName = "bg-surface-2",
  ...rest
}: GlideListProps) {
  const uid = useId();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [restingId, setRestingId] = useState<string | null>(null);

  const activate = (id: string) => {
    setActiveId(id);
    setRestingId(id);
  };

  return (
    <GlideContext.Provider
      value={{ activeId, restingId, activate, layoutId: `glide${uid}`, spreadX, spreadY, radius, plateClassName }}
    >
      <div
        className={clsx("relative isolate", className)}
        onMouseLeave={() => setActiveId(null)}
        // focusout bubbles; ignore the hops between items inside this list
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setActiveId(null);
        }}
        {...rest}
      >
        {children}
      </div>
    </GlideContext.Provider>
  );
}

interface GlideItemProps extends Omit<ComponentPropsWithoutRef<"div">, "id" | "onMouseEnter" | "onFocus"> {
  /** stable per item within its list */
  id: string;
  children: ReactNode;
}

export function GlideItem({ id, className, children, ...rest }: GlideItemProps) {
  const ctx = useContext(GlideContext);
  const reduce = useReducedMotion();

  // Renders bare outside a <GlideList> so an item is never coupled to the effect.
  if (!ctx) return <div className={className}>{children}</div>;

  const resting = ctx.restingId === id;
  const active = ctx.activeId === id;

  return (
    <div
      className={clsx("relative", className)}
      onMouseEnter={() => ctx.activate(id)}
      onFocus={() => ctx.activate(id)}
      {...rest}
    >
      {resting ? (
        <motion.span
          aria-hidden="true"
          layoutId={ctx.layoutId}
          initial={{ opacity: 0 }}
          animate={{ opacity: active ? 1 : 0 }}
          transition={{
            layout: reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 38, mass: 0.85 },
            opacity: { duration: reduce ? 0 : 0.18, ease: EASE_OUT },
          }}
          style={{
            top: -ctx.spreadY,
            right: -ctx.spreadX,
            bottom: -ctx.spreadY,
            left: -ctx.spreadX,
            borderRadius: ctx.radius,
          }}
          className={clsx("pointer-events-none absolute -z-10", ctx.plateClassName)}
        />
      ) : null}
      {children}
    </div>
  );
}

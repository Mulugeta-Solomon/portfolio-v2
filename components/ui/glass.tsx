import { clsx } from "clsx";
import type { ComponentPropsWithoutRef } from "react";

type GlassVariant = "card" | "chip" | "button" | "nav";

const variantClass: Record<GlassVariant, string> = {
  card: "glass glass-card",
  chip: "glass glass-chip",
  button: "glass glass-button",
  nav: "glass glass-nav",
};

/**
 * Baseline-tier Liquid Glass surface (pure CSS: frosted blur + specular rim + grain).
 * Server component — ships zero JS. The Tier-2 pointer sheen lives in <GlassSheen> (Phase 3).
 */
export function Glass({
  variant = "card",
  className,
  ...props
}: { variant?: GlassVariant } & ComponentPropsWithoutRef<"div">) {
  return <div className={clsx(variantClass[variant], className)} {...props} />;
}

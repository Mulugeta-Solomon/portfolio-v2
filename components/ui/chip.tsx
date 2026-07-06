import type { ReactNode } from "react";

/** Result chip — frosted Baseline glass pill (e.g. "Deployed · Mozambique"). */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="glass glass-chip inline-flex items-center whitespace-nowrap px-[10px] py-[5px] text-[12px] font-medium text-chip-text">
      {children}
    </span>
  );
}

/** Tech token — flat mono code pill (e.g. "FastAPI"). Kept flat: many per card, so cheap. */
export function TechToken({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center whitespace-nowrap rounded-md border border-code-border bg-code-bg px-2 py-1 font-mono text-[11.5px] text-code-text">
      {children}
    </span>
  );
}

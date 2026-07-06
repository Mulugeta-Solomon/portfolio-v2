import { clsx } from "clsx";
import { TechToken } from "@/components/ui/chip";
import type { JourneyEntry } from "@/lib/types";

export function TimelineEntry({ entry, last }: { entry: JourneyEntry; last?: boolean }) {
  const isNow = entry.variant === "now";
  return (
    <div className={clsx("relative flex gap-[22px]", !last && "pb-9")}>
      <div
        aria-hidden
        className={clsx(
          "relative z-[1] mt-[2px] size-[18px] flex-none rounded-full border-2",
          isNow
            ? "border-[color:var(--bg)] bg-accent shadow-[0_0_0_3px_var(--surface-2),0_0_14px_var(--accent)]"
            : "border-border-strong bg-surface",
        )}
      />
      <div className="min-w-0 flex-1 pt-px">
        <div
          className={clsx(
            "font-mono text-[11px] font-semibold uppercase tracking-[0.12em]",
            isNow ? "text-accent" : "text-text-3",
          )}
        >
          {entry.period}
        </div>
        <div className="mt-[6px] flex flex-wrap items-center gap-[9px]">
          <span className="text-[clamp(16px,1.9vw,18px)] font-semibold tracking-[-0.01em] text-text">
            {entry.title}
          </span>
          {entry.inlineBadge ? (
            <span
              className={clsx(
                "rounded-full border px-2 py-[3px] font-mono font-semibold uppercase",
                entry.inlineBadge.variant === "now"
                  ? "border-chip-border bg-chip-bg text-[9.5px] tracking-[0.12em] text-accent"
                  : "border-code-border bg-code-bg text-[9px] tracking-[0.1em] text-text-3",
              )}
            >
              {entry.inlineBadge.label}
            </span>
          ) : null}
        </div>
        <div className="mt-[3px] text-[13.5px] font-medium text-text-2">{entry.org}</div>
        <div className="mt-[9px] max-w-[62ch] text-[14px] leading-[1.6] text-text-2">{entry.blurb}</div>
        {entry.badges ? (
          <div className="mt-[11px] flex flex-wrap gap-[6px]">
            {entry.badges.map((b) => (
              <TechToken key={b}>{b}</TechToken>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

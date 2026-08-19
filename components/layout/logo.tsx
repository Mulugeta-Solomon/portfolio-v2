import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

/** Left-hand name pill in the floating nav. */
export function Logo() {
  return (
    <Link
      href="/"
      prefetch={false}
      className="glass glass-bar flex flex-none items-center gap-[10px] py-[7px] pl-[7px] pr-[16px] transition-[filter] duration-200 hover:brightness-[1.04]"
      aria-label={`${siteConfig.shortName} — home`}
    >
      <span
        aria-hidden="true"
        className="inline-flex size-[28px] flex-none items-center justify-center rounded-full border border-border bg-surface font-mono text-[10.5px] font-semibold tracking-[0.06em] text-accent"
      >
        MA
      </span>
      <span className="text-[14.5px] font-semibold tracking-[-0.01em] text-text">
        {siteConfig.shortName}
      </span>
    </Link>
  );
}

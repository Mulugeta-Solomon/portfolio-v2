import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Logo() {
  return (
    <Link
      href="/"
      prefetch={false}
      className="flex flex-none items-center gap-[11px]"
      aria-label={`${siteConfig.shortName} — home`}
    >
      <span
        aria-hidden="true"
        className="inline-flex size-[30px] flex-none items-center justify-center rounded-[9px] border border-border bg-surface font-mono text-[11px] font-semibold tracking-[0.06em] text-accent"
      >
        MA
      </span>
      <span className="text-[15px] font-semibold tracking-[-0.01em] text-text">{siteConfig.shortName}</span>
    </Link>
  );
}

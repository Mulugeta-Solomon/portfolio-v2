import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

/** Shared footer for the notes index and article pages: a back-link + contact. */
export function NotesFooter({
  backHref = "/",
  backLabel = "Back to portfolio",
}: {
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <div className="mt-[clamp(48px,7vw,72px)] flex flex-wrap items-center justify-between gap-4 border-t border-divider pb-10 pt-[26px]">
      <Link
        href={backHref}
        prefetch={false}
        className="inline-flex items-center gap-2 rounded-[10px] border border-border-strong px-4 py-[10px] text-[13.5px] font-medium text-text transition-colors hover:bg-surface-2"
      >
        <span aria-hidden="true">←</span>
        {backLabel}
      </Link>
      <div className="flex flex-wrap items-center gap-4 font-mono text-[12.5px] text-text-3">
        <a
          href={`mailto:${siteConfig.email}`}
          className="text-text-2 transition-colors hover:text-text"
        >
          {siteConfig.email}
        </a>
        <span>© 2026</span>
      </div>
    </div>
  );
}

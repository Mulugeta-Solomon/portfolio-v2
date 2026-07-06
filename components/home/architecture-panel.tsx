import Image from "next/image";
import { LayerGrid } from "./layer-grid";
import type { Project } from "@/lib/types";

export function ArchitecturePanel({
  architecture,
  title,
}: {
  architecture: Project["architecture"];
  title: string;
}) {
  const { eyebrow, note, heading, paragraph, diagram, layers } = architecture;

  return (
    <div className="border-t border-divider p-[clamp(24px,3.4vw,40px)]">
      <div className="mb-2 flex flex-wrap items-baseline gap-3">
        <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-accent">
          {eyebrow}
        </span>
        <span className="font-mono text-[10.5px] font-medium tracking-[0.05em] text-text-3">{note}</span>
      </div>
      <h4 className="m-0 text-[clamp(18px,2vw,21px)] font-semibold tracking-[-0.02em] text-text">
        {heading}
      </h4>
      <p className="mt-[10px] max-w-[76ch] text-[14.5px] leading-[1.62] text-text-2">{paragraph}</p>

      {diagram ? (
        <>
          <a
            href={diagram.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} — open the full-size architecture diagram (opens in a new tab)`}
            className="mt-5 block rounded-[14px] border border-[color:var(--frame-border)] bg-[var(--frame-bg)] p-[clamp(10px,1.4vw,16px)] shadow-[var(--frame-shadow)] transition-[filter] duration-200 hover:brightness-[1.03]"
          >
            <Image
              src={diagram.src}
              alt={diagram.alt}
              width={diagram.width}
              height={diagram.height}
              sizes="(max-width: 768px) 92vw, 760px"
              className="block h-auto w-full"
            />
          </a>
          <div className="mt-[9px] text-right font-mono text-[10.5px] font-medium tracking-[0.05em] text-text-3">
            {diagram.caption}
          </div>
        </>
      ) : null}

      {layers ? <LayerGrid layers={layers} /> : null}
    </div>
  );
}

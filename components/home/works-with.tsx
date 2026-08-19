import { Reveal } from "@/components/motion/reveal";
import { GlideList, GlideItem } from "@/components/motion/glide";
import { SectionHeading } from "./section-heading";
import { techLogos } from "@/lib/tech-logos";

/**
 * The tools behind the work — a monochrome mark per technology, named on hover.
 * Marks are inlined at build time (see scripts/generate-tech-logos.mjs), so the
 * strip costs no request and renders with the page.
 */
export function WorksWith() {
  return (
    <section aria-labelledby="works-with-heading">
      <div className="mx-auto max-w-[1180px] px-[clamp(18px,5vw,48px)] pt-[clamp(52px,7.5vw,86px)]">
        <Reveal className="mb-[26px]">
          <SectionHeading number="00" title="Works with" headingId="works-with-heading" />
        </Reveal>
        <Reveal>
          <GlideList
            radius={13}
            className="flex flex-wrap items-center gap-x-[clamp(8px,2vw,26px)] gap-y-[10px]"
          >
            {techLogos.map((logo) => (
              <GlideItem key={logo.id} id={logo.id} className="group p-[11px]">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-[calc(100%-2px)] left-1/2 z-10 -translate-x-1/2 translate-y-[3px] whitespace-nowrap rounded-[7px] border border-border bg-surface-2 px-[9px] py-[5px] font-mono text-[10.5px] font-medium tracking-[0.03em] text-text opacity-0 shadow-[var(--frame-shadow)] transition-[opacity,transform] duration-150 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  {logo.label}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  width="25"
                  height="25"
                  fill="currentColor"
                  aria-hidden="true"
                  className="block text-text opacity-[0.72] transition-opacity duration-200 group-hover:opacity-100"
                >
                  <path d={logo.path} />
                </svg>
                <span className="sr-only">{logo.label}</span>
              </GlideItem>
            ))}
          </GlideList>
        </Reveal>
      </div>
    </section>
  );
}

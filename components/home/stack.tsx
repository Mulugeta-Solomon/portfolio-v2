import { clsx } from "clsx";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "./section-heading";
import { stack } from "@/lib/stack";

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-20">
      <div className="mx-auto max-w-[1180px] px-[clamp(18px,5vw,48px)] pt-[clamp(60px,9vw,104px)]">
        <Reveal className="mb-6">
          <SectionHeading number="04" title="Stack" headingId="stack-heading" />
        </Reveal>
        <Reveal className="flex flex-col">
          {stack.map((row, i) => (
            <div
              key={row.label}
              className={clsx(
                "grid grid-cols-[minmax(120px,150px)_1fr] gap-[clamp(16px,3vw,32px)] border-t border-divider py-[18px]",
                i === stack.length - 1 && "border-b",
              )}
            >
              <div className="pt-[2px] font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-text-3">
                {row.label}
              </div>
              <div className="text-[14px] font-medium leading-[1.75] text-text">{row.value}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

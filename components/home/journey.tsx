import { Reveal } from "@/components/motion/reveal";
import { GlideList, GlideItem } from "@/components/motion/glide";
import { SectionHeading } from "./section-heading";
import { TimelineEntry } from "./timeline-entry";
import { journey } from "@/lib/journey";

export function Journey() {
  return (
    <section id="journey" className="scroll-mt-20">
      <div className="mx-auto max-w-[1180px] px-[clamp(18px,5vw,48px)] pt-[clamp(60px,9vw,104px)]">
        <Reveal>
          <SectionHeading
            number="03"
            title="Journey"
            headingId="journey-heading"
            lead="From a bachelor's in Ethiopia to graduate robotics in Japan to shipping production ML — the path in five steps."
          />
        </Reveal>
        <Reveal className="mt-[42px]">
          {/* the rail lives inside GlideList so the plate lands under it, not over it */}
          <GlideList spreadX={15} spreadY={9} radius={15} className="flex flex-col gap-9">
            <div aria-hidden className="absolute bottom-[34px] left-[9px] top-3 w-[2px] bg-divider" />
            {journey.map((entry) => (
              <GlideItem key={entry.period} id={entry.period}>
                <TimelineEntry entry={entry} />
              </GlideItem>
            ))}
          </GlideList>
        </Reveal>
      </div>
    </section>
  );
}

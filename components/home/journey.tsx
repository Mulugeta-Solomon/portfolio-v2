import { Reveal } from "@/components/motion/reveal";
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
        <Reveal className="relative mt-[42px]">
          <div aria-hidden className="absolute bottom-[34px] left-[9px] top-3 w-[2px] bg-divider" />
          {journey.map((entry, i) => (
            <TimelineEntry key={entry.period} entry={entry} last={i === journey.length - 1} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

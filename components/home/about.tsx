import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "./section-heading";

const paragraphs = [
  "I started in robotics — an M.Sc. at Ritsumeikan, a teaching assistantship, and a published paper on semantic line detection. Control theory, math, and sensor systems are where my instinct for infrastructure comes from.",
  "Today I work across the whole stack: the interface people touch, the APIs and data models behind it, the ML that powers the hard parts, and the cloud that holds it up. I’ve written production SQL against real datasets, shipped real‑time features, and owned services end to end — from schema design to deploy. Startup pace taught me to go deep fast: not a little of everything, but whole systems, built to hold.",
  "I grew up in Ethiopia and build with the East African market in mind — software for the places default tools forget. I care about systems that hold up when the stakes are real: a flood, an outbreak, a restaurant's Friday night.",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="mx-auto max-w-[1180px] px-[clamp(18px,5vw,48px)] pt-[clamp(60px,9vw,104px)]">
        <Reveal>
          <SectionHeading number="02" title="About" headingId="about-heading" />
        </Reveal>
        <Reveal className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-[clamp(28px,5vw,64px)]">
          <p className="m-0 max-w-[18ch] text-[clamp(21px,2.9vw,28px)] font-medium leading-[1.32] tracking-[-0.02em] text-text">
            Robotics gave me systems thinking. Now I point it at the whole stack.
          </p>
          <div className="pt-[3px]">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "m-0 text-[15.5px] leading-[1.72] text-text-2"
                    : "mt-4 text-[15.5px] leading-[1.72] text-text-2"
                }
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

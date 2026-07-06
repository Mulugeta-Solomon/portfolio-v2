import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "./section-heading";
import { ProjectCard } from "./project-card";
import { projects } from "@/lib/projects";

export function Work() {
  return (
    <section id="work" className="scroll-mt-20">
      <div className="mx-auto max-w-[1180px] px-[clamp(18px,5vw,48px)] pt-[clamp(60px,9vw,104px)]">
        <Reveal>
          <SectionHeading
            number="01"
            title="Selected work"
            headingId="work-heading"
            lead="Production systems in climate, public health, and hospitality — the problem, my role, the stack, and what shipped."
          />
        </Reveal>
        <div className="mt-10 flex flex-col gap-[26px]">
          {projects.map((project) => (
            <Reveal key={project.slug}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

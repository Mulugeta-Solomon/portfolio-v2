import Image from "next/image";
import { clsx } from "clsx";
import { Chip, TechToken } from "@/components/ui/chip";
import { LockIcon } from "@/components/ui/icons";
import { ArchitecturePanel } from "./architecture-panel";
import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  const media = project.images[0];
  const isDiagramMedia = media.kind === "diagram";
  const mediaLast = project.mediaOrder === "media-last";

  const mediaBlock = (
    <div
      className={clsx(
        "flex min-h-[320px] bg-[var(--frame-bg)] p-[clamp(20px,3vw,30px)]",
        isDiagramMedia ? "flex-col items-stretch justify-center gap-[11px]" : "items-center justify-center",
        mediaLast && "order-first",
      )}
    >
      {isDiagramMedia ? (
        <>
          <a
            href={media.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} — open the full-size diagram (opens in a new tab)`}
            className="block w-full rounded-[14px] border border-[color:var(--frame-border)] bg-[var(--frame-bg)] p-[clamp(10px,1.4vw,16px)] shadow-[var(--frame-shadow)] transition-[filter] duration-200 hover:brightness-[1.03]"
          >
            <Image
              src={media.src}
              alt={media.alt}
              width={media.width}
              height={media.height}
              sizes="(max-width: 768px) 90vw, 520px"
              className="block h-auto w-full"
            />
          </a>
          {media.caption ? (
            <div className="text-right font-mono text-[10.5px] font-medium tracking-[0.05em] text-text-3">
              {media.caption}
            </div>
          ) : null}
        </>
      ) : (
        <div className="w-full overflow-hidden rounded-[11px] border border-[color:var(--frame-border)] shadow-[var(--frame-shadow)]">
          <Image
            src={media.src}
            alt={media.alt}
            width={media.width}
            height={media.height}
            sizes="(max-width: 768px) 90vw, 520px"
            className="block h-auto w-full"
          />
        </div>
      )}
    </div>
  );

  const copyBlock = (
    <div className={clsx("flex flex-col p-[clamp(28px,3.4vw,40px)]", mediaLast && "order-last")}>
      <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-accent">
        {project.category}
      </span>
      <h3 className="mt-[13px] text-[clamp(23px,2.6vw,27px)] font-semibold tracking-[-0.02em] text-text">
        {project.title}
      </h3>
      <p className="mt-3 text-[15.5px] leading-[1.58] text-text-2">{project.blurb}</p>

      <div className="mt-[22px]">
        <div className="mb-[7px] font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-text-3">
          My role
        </div>
        <div className="text-[14px] leading-[1.55] text-text">{project.role}</div>
      </div>

      <div className="mt-5 flex flex-wrap gap-[7px]">
        {project.resultChips.map((c) => (
          <Chip key={c}>{c}</Chip>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-[6px] pt-6">
        {project.techTokens.map((t) => (
          <TechToken key={t}>{t}</TechToken>
        ))}
        {project.badge ? (
          <span className="ml-auto inline-flex items-center gap-[5px] self-center font-mono text-[10.5px] font-medium tracking-[0.05em] text-text-3">
            <LockIcon />
            {project.badge.label}
          </span>
        ) : null}
        {project.liveUrl ? (
          <a
            href={project.liveUrl.href}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto font-mono text-[11.5px] font-semibold text-accent hover:underline"
          >
            {project.liveUrl.label}
          </a>
        ) : null}
      </div>
    </div>
  );

  return (
    <article className="overflow-hidden rounded-[18px] border border-border bg-surface transition-[border-color,box-shadow,background-color] duration-[250ms] hover:border-border-strong hover:shadow-[var(--frame-shadow)]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))]">
        {mediaLast ? (
          <>
            {copyBlock}
            {mediaBlock}
          </>
        ) : (
          <>
            {mediaBlock}
            {copyBlock}
          </>
        )}
      </div>
      <ArchitecturePanel architecture={project.architecture} title={project.title} />
    </article>
  );
}

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { AuroraBackdrop } from "./aurora-backdrop";
import { siteConfig } from "@/lib/site-config";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative mt-[clamp(60px,9vw,104px)] scroll-mt-20 overflow-hidden border-t border-divider"
    >
      <AuroraBackdrop variant="contact" />
      <div className="relative mx-auto max-w-[1180px] px-[clamp(18px,5vw,48px)] pb-10 pt-[clamp(56px,8vw,90px)]">
        <Reveal className="flex flex-wrap items-end justify-between gap-10">
          <div>
            <div className="mb-5 flex items-center gap-[14px]">
              <span className="font-mono text-[13px] font-semibold tracking-[0.05em] text-accent">05</span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-text-3">
                Contact
              </span>
            </div>
            <h2 className="m-0 max-w-[16ch] text-[clamp(30px,4.4vw,42px)] font-semibold leading-[1.08] tracking-[-0.03em] text-text">
              {"Let's build something that matters."}
            </h2>
            <p className="mt-[18px] max-w-[52ch] text-[16px] leading-[1.6] text-text-2">
              Open to full‑stack and backend engineering roles where the work has real stakes — and
              the occasional ambitious collaboration.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 font-mono text-[11.5px] font-medium tracking-[0.05em] text-text-3">
              <span className="size-[6px] rounded-full bg-dot" />
              {siteConfig.availability}
            </div>
          </div>

          <div className="flex flex-col items-start gap-[11px]">
            <Button href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Button>
            <div className="flex flex-wrap gap-[10px]">
              <Button href={siteConfig.github} external variant="outline" size="sm" icon={<GitHubIcon />}>
                GitHub
              </Button>
              <Button
                href={siteConfig.linkedin}
                external
                variant="outline"
                size="sm"
                icon={<LinkedInIcon />}
              >
                LinkedIn
              </Button>
              <Button href={siteConfig.resumePath} external variant="outline" size="sm" arrow>
                Resume
              </Button>
            </div>
          </div>
        </Reveal>

        <div className="mt-[52px] flex flex-wrap items-center justify-between gap-4 border-t border-divider pt-[22px] font-mono text-[12.5px] text-text-3">
          <span>
            {siteConfig.name} — {siteConfig.location}
          </span>
          <span>© 2026</span>
        </div>
      </div>
    </section>
  );
}

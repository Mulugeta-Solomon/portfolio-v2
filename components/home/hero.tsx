import { FadeInItem, FadeInStagger } from "@/components/motion/fade-in";
import { GlassSheen } from "@/components/ui/glass-sheen";
import { Picture } from "@/components/ui/picture";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { AuroraBackdrop } from "./aurora-backdrop";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-divider">
      <AuroraBackdrop variant="hero" />
      <div className="relative mx-auto flex max-w-[1180px] flex-wrap items-center gap-[clamp(28px,5vw,60px)] px-[clamp(18px,5vw,48px)] py-[clamp(52px,8vw,88px)] pt-[calc(var(--nav-h)+clamp(44px,8vw,108px))]">
        <FadeInStagger className="min-w-0 max-w-[660px] flex-[1_1_480px]">
          <FadeInItem>
            <div className="mb-[30px] flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono text-[12px] font-medium uppercase tracking-[0.18em] text-text-3">
                {siteConfig.name}
              </span>
              <span className="inline-flex items-center gap-[7px] whitespace-nowrap rounded-full border border-border bg-surface px-[11px] py-[5px] font-mono text-[11.5px] font-medium tracking-[0.08em] text-text-2">
                <span className="size-[6px] rounded-full bg-dot shadow-[0_0_8px_var(--dot)]" />
                TOKYO, JAPAN
              </span>
            </div>
          </FadeInItem>

          <FadeInItem>
            <h1 className="m-0 max-w-[18ch] text-[clamp(33px,5.6vw,56px)] font-semibold leading-[1.05] tracking-[-0.035em] text-text">
              I build full‑stack systems for problems that matter.
            </h1>
          </FadeInItem>

          <FadeInItem>
            <p className="mt-[26px] max-w-[62ch] text-[clamp(16px,2vw,18.5px)] leading-[1.6] text-text-2">
              End to end — the APIs, data models, and services (FastAPI, NestJS), the ML inside, and
              the cloud it runs on, with a React and Next.js front end on top. Flood‑simulation and
              disease‑risk platforms deployed across Africa, plus a SaaS product for the East African
              market.
            </p>
          </FadeInItem>

          <FadeInItem>
            <div className="mb-[30px] mt-8 font-mono text-[11.5px] font-medium uppercase tracking-[0.14em] text-text-3">
              Currently · Software Engineer, ML &amp; AI — Sora Technology, Tokyo
            </div>
          </FadeInItem>

          <FadeInItem>
            <div className="flex flex-wrap items-center gap-[11px]">
              <Button href={`mailto:${siteConfig.email}`}>Email me</Button>
              <Button href={siteConfig.github} external variant="outline" icon={<GitHubIcon />}>
                GitHub
              </Button>
              <Button href={siteConfig.linkedin} external variant="outline" icon={<LinkedInIcon />}>
                LinkedIn
              </Button>
            </div>
          </FadeInItem>

          <FadeInItem>
            <div className="mt-[22px] font-mono text-[11.5px] font-medium tracking-[0.05em] text-text-3">
              Based in Tokyo, Japan · open to on-site &amp; remote
            </div>
          </FadeInItem>
        </FadeInStagger>

        <div className="relative min-w-[236px] max-w-[400px] flex-[0_1_380px]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-[-14%_-10%_-10%_-10%] blur-[30px]"
            style={{ background: "radial-gradient(58% 58% at 50% 42%, var(--aurora-1), transparent 70%)" }}
          />
          <GlassSheen className="relative overflow-hidden rounded-[18px] border border-[color:var(--frame-border)] shadow-[var(--frame-shadow)]">
            <Picture
              src="/assets/portrait.jpg"
              alt={siteConfig.name}
              priority
              sizes="(max-width: 768px) 90vw, 400px"
              className="block h-auto w-full"
            />
          </GlassSheen>
        </div>
      </div>
    </section>
  );
}

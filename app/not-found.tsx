import type { Metadata } from "next";
import { AuroraBackdrop } from "@/components/home/aurora-backdrop";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      id="main"
      className="relative flex min-h-[72vh] items-center overflow-hidden border-b border-divider"
    >
      <AuroraBackdrop variant="hero" />
      <div className="relative mx-auto w-full max-w-[1180px] px-[clamp(18px,5vw,48px)] py-[clamp(60px,12vw,120px)]">
        <div className="font-mono text-[12px] font-medium uppercase tracking-[0.18em] text-accent">
          Error 404
        </div>
        <h1 className="mt-4 text-[clamp(40px,9vw,84px)] font-semibold leading-[1] tracking-[-0.04em] text-text">
          Page not found
        </h1>
        <p className="mt-5 max-w-[52ch] text-[clamp(15px,2vw,17px)] leading-[1.6] text-text-2">
          The page you’re looking for doesn’t exist or may have moved — let’s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-[11px]">
          <Button href="/">Back home</Button>
          <Button href="/notes" variant="outline">
            Read the notes
          </Button>
        </div>
      </div>
    </main>
  );
}

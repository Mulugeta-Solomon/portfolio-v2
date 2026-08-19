import { AuroraBackdrop } from "@/components/home/aurora-backdrop";

/** The "Writing / Notes" hero at the top of the /notes index. */
export function NotesHeader() {
  return (
    <section className="relative overflow-hidden border-b border-divider">
      <AuroraBackdrop variant="notes" />
      <div className="relative mx-auto max-w-[860px] px-[clamp(18px,5vw,48px)] pb-[clamp(40px,6vw,64px)] pt-[calc(var(--nav-h)+clamp(40px,7vw,96px))]">
        <div className="mb-5 font-mono text-[12px] font-medium uppercase tracking-[0.18em] text-accent">
          Writing
        </div>
        <h1 className="m-0 text-[clamp(34px,6vw,54px)] font-semibold leading-[1.05] tracking-[-0.035em] text-text">
          Notes
        </h1>
        <p className="mt-[22px] max-w-[60ch] text-[clamp(16px,2vw,18.5px)] leading-[1.62] text-text-2">
          Field notes on what I build and what it teaches me — ML infrastructure, geospatial
          systems, and shipping software for hard places. Short and practical; more as I write them.
        </p>
      </div>
    </section>
  );
}

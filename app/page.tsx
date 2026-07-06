/**
 * TEMPORARY foundation showcase (Phases 1–2).
 * Header/nav/theme now live globally via the layout. This page is replaced by
 * the real Hero (Phase 3) and the rest of the home sections (Phases 3–4).
 */
const swatches: { name: string; token: string }[] = [
  { name: "bg", token: "--bg" },
  { name: "surface", token: "--surface" },
  { name: "surface-2", token: "--surface-2" },
  { name: "accent", token: "--accent" },
  { name: "accent-2", token: "--accent-2" },
  { name: "border-strong", token: "--border-strong" },
];

export default function Home() {
  return (
    <main id="main" className="relative min-h-screen overflow-hidden">
      {/* ambient aurora + grid (previews the hero material) */}
      <div
        data-aurora
        aria-hidden
        className="pointer-events-none absolute inset-x-[-10%] top-[-34%] h-[640px] blur-[46px]"
        style={{
          background:
            "radial-gradient(48% 60% at 28% 32%, var(--aurora-1), transparent 68%), radial-gradient(46% 56% at 74% 42%, var(--aurora-2), transparent 70%)",
          animation: "auroraDrift 24s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "58px 58px",
          WebkitMaskImage: "radial-gradient(70% 62% at 46% 20%, #000, transparent)",
          maskImage: "radial-gradient(70% 62% at 46% 20%, #000, transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1000px] px-6 py-16">
        <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
          Phase 2 · Header &amp; chrome
        </div>
        <h1 className="mt-3 max-w-[18ch] text-[clamp(30px,5vw,48px)] font-semibold leading-[1.05] tracking-[-0.035em]">
          The header is live.
        </h1>
        <p className="mt-5 max-w-[60ch] text-[16px] leading-[1.6] text-text-2">
          Frosted sticky nav, desktop links, the theme toggle, the résumé button, and a fully
          keyboard-accessible mobile menu (resize below&nbsp;769px). Foundation below.
        </p>

        {/* Glass cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { t: "Design tokens", d: "Full dark + light sets, bridged to Tailwind utilities." },
            { t: "Liquid Glass", d: "Frosted blur, specular rim, grain — pure CSS Baseline." },
            { t: "Theme engine", d: "next-themes · data-theme · no-flash · localStorage." },
          ].map((c) => (
            <div key={c.t} className="glass glass-card p-5">
              <h2 className="text-[15px] font-semibold">{c.t}</h2>
              <p className="mt-2 text-[13.5px] leading-[1.55] text-text-2">{c.d}</p>
            </div>
          ))}
        </div>

        {/* Token swatches */}
        <div className="mt-10">
          <div className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-text-3">
            Token swatches
          </div>
          <div className="flex flex-wrap gap-3">
            {swatches.map((s) => (
              <div
                key={s.name}
                className="flex items-center gap-3 rounded-[12px] border border-border bg-surface px-3 py-2"
              >
                <span
                  className="size-8 flex-none rounded-lg border border-border-strong"
                  style={{ background: `var(${s.token})` }}
                />
                <span className="font-mono text-[12px] text-text-2">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-12 font-mono text-[11.5px] tracking-[0.03em] text-text-3">
          portfolio-v2 · phase 2 gate · Hero replaces this in phase 3
        </p>
      </div>
    </main>
  );
}

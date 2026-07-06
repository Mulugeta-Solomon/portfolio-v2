import { ThemeToggle } from "@/components/theme-toggle";

/**
 * PHASE 1 GATE PAGE — temporary.
 * Proves: design tokens flip on [data-theme], Liquid Glass renders,
 * theme persists across reload (next-themes + localStorage).
 * Replaced by the real Header (Phase 2) + Hero (Phase 3).
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
    <main className="relative min-h-screen overflow-hidden">
      {/* ambient aurora + grid (previews the hero material) */}
      <div
        data-aurora
        aria-hidden
        className="pointer-events-none absolute inset-x-[-10%] top-[-30%] h-[640px] blur-[46px]"
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

      <div className="relative z-10 mx-auto max-w-[900px] px-6 py-16">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="glass glass-chip inline-flex size-[30px] flex-none items-center justify-center font-mono text-[11px] font-semibold tracking-[0.06em] text-accent">
              MA
            </span>
            <span className="text-[15px] font-semibold tracking-[-0.01em]">Portfolio V2</span>
          </div>
          <ThemeToggle />
        </header>

        <div className="mt-14">
          <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
            Phase 1 · Foundation
          </div>
          <h1 className="mt-3 max-w-[18ch] text-[clamp(30px,5vw,48px)] font-semibold leading-[1.05] tracking-[-0.035em]">
            Tokens, theme &amp; Liquid Glass are live.
          </h1>
          <p className="mt-5 max-w-[60ch] text-[16px] leading-[1.6] text-text-2">
            Toggle the theme (top-right) — every token cross-fades, and the choice persists across
            reload. The cards below run the real Baseline-tier glass primitive.
          </p>
        </div>

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

        {/* Text scale */}
        <div className="glass glass-card mt-10 p-6">
          <p className="text-[18px] font-medium text-text">Primary text — --text</p>
          <p className="mt-1 text-[15px] text-text-2">Secondary text — --text-2</p>
          <p className="mt-1 text-[13px] text-text-3">Tertiary / mono labels — --text-3</p>
          <p className="mt-1 text-[15px] text-accent">Accent link color — --accent</p>
        </div>

        <p className="mt-12 font-mono text-[11.5px] tracking-[0.03em] text-text-3">
          portfolio-v2 · phase 1 gate · replace with Header (P2) + Hero (P3)
        </p>
      </div>
    </main>
  );
}

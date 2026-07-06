import { clsx } from "clsx";

type AuroraVariant = "hero" | "notes" | "contact";

interface AuroraConfig {
  pos: string;
  bg: string;
  blur: string;
  drift: boolean;
  grid: boolean;
  gridMask?: string;
}

const configs: Record<AuroraVariant, AuroraConfig> = {
  hero: {
    pos: "left-[-10%] right-[-10%] top-[-34%] h-[640px]",
    bg: "radial-gradient(48% 60% at 28% 32%, var(--aurora-1), transparent 68%), radial-gradient(46% 56% at 74% 42%, var(--aurora-2), transparent 70%)",
    blur: "38px",
    drift: true,
    grid: true,
    gridMask: "radial-gradient(70% 62% at 46% 24%, #000, transparent)",
  },
  notes: {
    pos: "left-[-10%] right-[-10%] top-[-40%] h-[520px]",
    bg: "radial-gradient(46% 60% at 30% 34%, var(--aurora-1), transparent 68%), radial-gradient(44% 54% at 76% 44%, var(--aurora-2), transparent 70%)",
    blur: "38px",
    drift: true,
    grid: true,
    gridMask: "radial-gradient(70% 62% at 42% 20%, #000, transparent)",
  },
  contact: {
    pos: "left-[15%] right-[-10%] bottom-[-70%] h-[460px]",
    bg: "radial-gradient(50% 60% at 60% 60%, var(--aurora-1), transparent 70%)",
    blur: "44px",
    drift: false,
    grid: false,
  },
};

export function AuroraBackdrop({ variant = "hero" }: { variant?: AuroraVariant }) {
  const c = configs[variant];
  return (
    <>
      <div
        {...(c.drift ? { "data-aurora": "" } : {})}
        aria-hidden
        className={clsx("pointer-events-none absolute", c.pos)}
        style={{
          background: c.bg,
          filter: `blur(${c.blur})`,
          animation: c.drift ? "auroraDrift 24s ease-in-out infinite" : undefined,
        }}
      />
      {c.grid && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
            backgroundSize: "58px 58px",
            WebkitMaskImage: c.gridMask,
            maskImage: c.gridMask,
          }}
        />
      )}
    </>
  );
}

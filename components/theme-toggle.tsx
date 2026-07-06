"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@/components/icons";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme !== "light";

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} theme` : "Toggle theme"}
      title="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex size-[38px] flex-none items-center justify-center rounded-[10px] border border-border bg-surface text-text-2 transition-colors hover:border-border-strong hover:text-text"
    >
      {/* stable placeholder pre-hydration to avoid a mismatch/flash */}
      {mounted ? isDark ? <SunIcon /> : <MoonIcon /> : <span className="block size-[17px]" />}
    </button>
  );
}

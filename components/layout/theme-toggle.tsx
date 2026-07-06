"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@/components/ui/icons";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      title="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="inline-flex size-[38px] flex-none items-center justify-center rounded-[10px] border border-border bg-surface text-text-2 transition-colors hover:border-border-strong hover:text-text"
    >
      {/* Both render; CSS shows one based on [data-theme] — hydration-safe, no mount flag. */}
      <SunIcon className="theme-icon-sun" />
      <MoonIcon className="theme-icon-moon" />
    </button>
  );
}

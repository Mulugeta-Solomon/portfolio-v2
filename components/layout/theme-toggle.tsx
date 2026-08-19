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
      className="glass glass-bar inline-flex size-[40px] flex-none items-center justify-center text-text-2 transition-[color,filter] duration-200 hover:text-text hover:brightness-[1.06]"
    >
      {/* Both render; CSS shows one based on [data-theme] — hydration-safe, no mount flag. */}
      <SunIcon className="theme-icon-sun" />
      <MoonIcon className="theme-icon-moon" />
    </button>
  );
}

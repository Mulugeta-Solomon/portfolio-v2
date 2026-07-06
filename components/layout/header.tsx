"use client";

import { useState } from "react";
import { Logo } from "./logo";
import { DesktopNav } from "./desktop-nav";
import { ThemeToggle } from "./theme-toggle";
import { MobileMenu } from "./mobile-menu";
import { Button } from "@/components/ui/button";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site-config";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-divider bg-[var(--nav-bg)] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-[16px] backdrop-saturate-[160%] transition-colors duration-[350ms]">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between gap-4 px-[clamp(18px,5vw,48px)]">
        <Logo />
        <div className="flex items-center gap-[10px]">
          <DesktopNav />
          <ThemeToggle />
          <div className="hidden nav:block">
            <Button variant="outline" size="sm" href={siteConfig.resumePath} external>
              Résumé
            </Button>
          </div>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex size-[38px] flex-none items-center justify-center rounded-[10px] border border-border bg-surface text-text transition-colors hover:border-border-strong nav:hidden"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}

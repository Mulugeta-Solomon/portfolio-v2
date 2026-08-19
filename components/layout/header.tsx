"use client";

import { useState } from "react";
import { Logo } from "./logo";
import { DesktopNav } from "./desktop-nav";
import { ThemeToggle } from "./theme-toggle";
import { MobileMenu } from "./mobile-menu";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site-config";

/**
 * Floating glass nav: the bar itself is transparent and the page scrolls through it —
 * the frosted surfaces are the pills. The link pill is absolutely centred so it stays
 * on the page's midline no matter how wide the name and the right-hand cluster get.
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 py-[clamp(10px,1.5vw,16px)]">
      <div className="relative mx-auto flex max-w-[1180px] items-center justify-between gap-3 px-[clamp(18px,5vw,48px)]">
        <Logo />

        <div className="pointer-events-none absolute inset-0 hidden items-center justify-center nav:flex">
          <div className="pointer-events-auto">
            <DesktopNav />
          </div>
        </div>

        <div className="flex flex-none items-center gap-[9px]">
          <ThemeToggle />
          <a
            href={siteConfig.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="glass glass-bar hidden items-center gap-[6px] px-[17px] py-[11px] text-[13px] font-semibold text-text transition-[filter] duration-200 hover:brightness-[1.06] nav:inline-flex"
          >
            Resume
            <span aria-hidden="true">↗</span>
          </a>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="glass glass-bar inline-flex size-[40px] flex-none items-center justify-center text-text transition-[filter] duration-200 hover:brightness-[1.06] nav:hidden"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}

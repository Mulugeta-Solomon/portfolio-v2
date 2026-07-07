"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { navLinks } from "@/lib/nav";
import { siteConfig } from "@/lib/site-config";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const reduce = useReducedMotion();
  const pathname = usePathname();
  const closed = reduce ? { opacity: 0 } : { opacity: 0, y: -8 };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          initial={closed}
          animate={{ opacity: 1, y: 0 }}
          exit={closed}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-0 top-full flex flex-col border-b border-divider bg-[var(--nav-bg)] px-[clamp(18px,5vw,48px)] pb-[18px] pt-1 shadow-[var(--frame-shadow)] backdrop-blur-[16px] backdrop-saturate-[160%] nav:hidden"
        >
          {navLinks.map((link) => {
            const active = link.href === "/notes" && pathname.startsWith("/notes");
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                aria-current={active ? "page" : undefined}
                className={clsx(
                  "border-t border-divider py-[14px] text-[16px] transition-colors",
                  active ? "font-semibold text-accent" : "font-medium text-text hover:text-accent",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={siteConfig.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[14px] rounded-[10px] bg-[var(--btn-bg)] px-[18px] py-[14px] text-center text-[15px] font-semibold text-[var(--btn-text)] transition-colors hover:bg-[var(--btn-hover)]"
          >
            Resume ↗
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

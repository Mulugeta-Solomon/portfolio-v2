"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { GlideList, GlideItem } from "@/components/motion/glide";
import { navLinks } from "@/lib/nav";
import { siteConfig } from "@/lib/site-config";

/** Floating glass panel below the nav — the small-screen counterpart to the link pill. */
export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const reduce = useReducedMotion();
  const pathname = usePathname();
  const closed = reduce ? { opacity: 0 } : { opacity: 0, y: -10, scale: 0.985 };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          initial={closed}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={closed}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "top center" }}
          className="glass glass-panel absolute inset-x-[clamp(18px,5vw,48px)] top-full mt-[10px] p-[9px] nav:hidden"
        >
          <GlideList radius={13} className="flex flex-col">
            {navLinks.map((link) => {
              const active = link.href === "/notes" && pathname.startsWith("/notes");
              return (
                <GlideItem key={link.href} id={link.href}>
                  <Link
                    href={link.href}
                    prefetch={false}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={clsx(
                      "block rounded-[13px] px-[15px] py-[13px] text-[15.5px] transition-colors",
                      active ? "font-semibold text-accent" : "font-medium text-text hover:text-accent",
                    )}
                  >
                    {link.label}
                  </Link>
                </GlideItem>
              );
            })}
          </GlideList>
          <a
            href={siteConfig.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-[9px] block rounded-[13px] bg-[var(--btn-bg)] px-[18px] py-[13px] text-center text-[15px] font-semibold text-[var(--btn-text)] transition-colors hover:bg-[var(--btn-hover)]"
          >
            Resume ↗
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { GlideList, GlideItem } from "@/components/motion/glide";
import { navLinks } from "@/lib/nav";

/** Centre link pill in the floating nav — hover slides one soft pill between links. */
export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="hidden nav:block">
      <GlideList radius={999} className="glass glass-bar flex items-center gap-[1px] px-[6px] py-[5px]">
        {navLinks.map((link) => {
          const active = link.href === "/notes" && pathname.startsWith("/notes");
          return (
            <GlideItem key={link.href} id={link.href}>
              <Link
                href={link.href}
                prefetch={false}
                aria-current={active ? "page" : undefined}
                className={clsx(
                  "block rounded-full px-[13px] py-[7px] text-[13px] transition-colors duration-200",
                  active ? "font-semibold text-text" : "font-medium text-text-2 hover:text-text",
                )}
              >
                {link.label}
              </Link>
            </GlideItem>
          );
        })}
      </GlideList>
    </nav>
  );
}

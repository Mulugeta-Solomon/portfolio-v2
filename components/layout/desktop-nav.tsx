"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { navLinks } from "@/lib/nav";

export function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="mr-[10px] hidden items-center gap-[22px] nav:flex">
      {navLinks.map((link) => {
        const active = link.href === "/notes" && pathname.startsWith("/notes");
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={clsx(
              "text-[13px] transition-colors",
              active ? "font-semibold text-text" : "font-medium text-text-2 hover:text-text",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

import Link from "next/link";
import { navLinks } from "@/lib/nav";

export function DesktopNav() {
  return (
    <nav aria-label="Primary" className="mr-[10px] hidden items-center gap-[22px] nav:flex">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-[13px] font-medium text-text-2 transition-colors hover:text-text"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

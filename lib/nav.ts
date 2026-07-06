export interface NavLink {
  label: string;
  href: string;
}

/** Primary nav — hash anchors resolve on the home page; Blog routes to /notes. */
export const navLinks: NavLink[] = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Journey", href: "/#journey" },
  { label: "Stack", href: "/#stack" },
  { label: "Blog", href: "/notes" },
  { label: "Contact", href: "/#contact" },
];

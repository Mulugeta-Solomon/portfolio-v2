export interface NavLink {
  label: string;
  href: string;
}

/**
 * Primary nav — hash anchors resolve on the home page; Blog routes to /notes.
 * Contact sits before Blog so the home-page anchors stay grouped and Blog (the
 * only off-home destination) is last — no round-trip from /notes to reach Contact.
 */
export const navLinks: NavLink[] = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Journey", href: "/#journey" },
  { label: "Stack", href: "/#stack" },
  { label: "Contact", href: "/#contact" },
  { label: "Blog", href: "/notes" },
];

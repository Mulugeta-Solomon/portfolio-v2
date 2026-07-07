import { notes as allNotes, type Note } from "#site/content";

export type { Note };

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
] as const;

/** ISO date → "Aug 2025". Locale-free + UTC, so SSG and client never disagree. */
export function formatNoteDate(iso: string): string {
  const d = new Date(iso);
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

/** Display order: manual `order` ascending, then newest date first. */
export const notes: Note[] = [...allNotes].sort((a, b) =>
  a.order !== b.order ? a.order - b.order : b.date.localeCompare(a.date),
);

export function getNote(slug: string): Note | undefined {
  return allNotes.find((n) => n.slug === slug);
}

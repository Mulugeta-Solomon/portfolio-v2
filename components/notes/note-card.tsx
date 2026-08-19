import Link from "next/link";
import { TechToken } from "@/components/ui/chip";
import { formatNoteDate, type Note } from "@/lib/notes";

/** A single post on the /notes index — the whole card links to the article. */
export function NoteCard({ note }: { note: Note }) {
  return (
    <Link
      href={note.url}
      prefetch={false}
      className="group block rounded-[15px] border border-border bg-surface p-[clamp(22px,3.2vw,32px)] transition-[border-color,background-color] duration-200 hover:border-border-strong focus-visible:border-border-strong"
    >
      <div className="flex flex-wrap items-center gap-[10px] font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-text-3">
        <span className="text-accent">{note.category}</span>
        <span aria-hidden="true">·</span>
        <span>{formatNoteDate(note.date)}</span>
        <span aria-hidden="true">·</span>
        <span>{note.readTime}</span>
      </div>
      <h2 className="mt-[13px] text-[clamp(20px,2.7vw,25px)] font-semibold tracking-[-0.02em] text-text transition-colors group-hover:text-text">
        {note.title}
      </h2>
      <p className="mt-[11px] max-w-[72ch] text-[15px] leading-[1.66] text-text-2">
        {note.summary}
      </p>
      <div className="mt-4 flex flex-wrap gap-[6px]">
        {note.tags.map((tag) => (
          <TechToken key={tag}>{tag}</TechToken>
        ))}
      </div>
    </Link>
  );
}

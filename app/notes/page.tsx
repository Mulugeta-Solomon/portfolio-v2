import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { NotesHeader } from "@/components/notes/notes-header";
import { NoteCard } from "@/components/notes/note-card";
import { NotesFooter } from "@/components/notes/notes-footer";
import { notes } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Field notes on ML infrastructure, geospatial systems, and shipping software for hard places — by Mulugeta Solomon Abate, full-stack engineer in Tokyo.",
};

export default function NotesPage() {
  return (
    <main id="main">
      <NotesHeader />
      <section className="mx-auto max-w-[860px] px-[clamp(18px,5vw,48px)] pt-[clamp(40px,6vw,64px)]">
        <div className="flex flex-col gap-[18px]">
          {notes.map((note, i) => (
            <Reveal key={note.slug} delay={i * 0.04}>
              <NoteCard note={note} />
            </Reveal>
          ))}
        </div>
        <NotesFooter />
      </section>
    </main>
  );
}

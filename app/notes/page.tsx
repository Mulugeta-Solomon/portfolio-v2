import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { GlideList, GlideItem } from "@/components/motion/glide";
import { NotesHeader } from "@/components/notes/notes-header";
import { NoteCard } from "@/components/notes/note-card";
import { NotesFooter } from "@/components/notes/notes-footer";
import { notes } from "@/lib/notes";
import { siteConfig } from "@/lib/site-config";

const notesDescription =
  "Field notes on ML infrastructure, geospatial systems, and shipping software for hard places — by Mulugeta Solomon Abate, software engineer in Tokyo.";

// Shared social card (metadataBase resolves the relative URL to absolute).
const ogImage = "/opengraph-image.png";
const ogImageAlt = `${siteConfig.shortName} — ${siteConfig.role}`;

export const metadata: Metadata = {
  title: "Notes",
  description: notesDescription,
  alternates: { canonical: "/notes" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/notes`,
    siteName: siteConfig.shortName,
    title: `Notes — ${siteConfig.shortName}`,
    description: notesDescription,
    images: [{ url: ogImage, width: 1200, height: 630, alt: ogImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Notes — ${siteConfig.shortName}`,
    description: notesDescription,
    images: [ogImage],
  },
};

export default function NotesPage() {
  return (
    <main id="main">
      <NotesHeader />
      <section className="mx-auto max-w-[860px] px-[clamp(18px,5vw,48px)] pt-[clamp(40px,6vw,64px)]">
        <GlideList spread={9} radius={23} className="flex flex-col gap-[18px]">
          {notes.map((note, i) => (
            <GlideItem key={note.slug} id={note.slug}>
              <Reveal delay={i * 0.04}>
                <NoteCard note={note} />
              </Reveal>
            </GlideItem>
          ))}
        </GlideList>
        <NotesFooter />
      </section>
    </main>
  );
}

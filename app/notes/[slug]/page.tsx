import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AuroraBackdrop } from "@/components/home/aurora-backdrop";
import { MDXContent } from "@/components/mdx/mdx-content";
import { NotesFooter } from "@/components/notes/notes-footer";
import { TechToken } from "@/components/ui/chip";
import { formatNoteDate, getNote, notes } from "@/lib/notes";
import { siteConfig } from "@/lib/site-config";

type PageParams = { params: Promise<{ slug: string }> };

/** All note slugs are known at build — no on-demand rendering for static export. */
export const dynamicParams = false;

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return {};
  return {
    title: note.title,
    description: note.summary,
    alternates: { canonical: note.url },
    openGraph: {
      type: "article",
      url: `${siteConfig.url}${note.url}`,
      siteName: siteConfig.shortName,
      title: note.title,
      description: note.summary,
      publishedTime: note.date,
      authors: [siteConfig.name],
      tags: note.tags,
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${siteConfig.role}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: note.title,
      description: note.summary,
      images: ["/opengraph-image.png"],
    },
  };
}

export default async function NotePage({ params }: PageParams) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  return (
    <main id="main">
      <article>
        <header className="relative overflow-hidden border-b border-divider">
          <AuroraBackdrop variant="notes" />
          <div className="relative mx-auto max-w-[760px] px-[clamp(18px,5vw,48px)] pb-[clamp(32px,5vw,48px)] pt-[clamp(48px,7vw,84px)]">
            <Link
              href="/notes"
              prefetch={false}
              className="inline-flex items-center gap-2 font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-text-3 transition-colors hover:text-text"
            >
              <span aria-hidden="true">←</span>
              Notes
            </Link>
            <div className="mt-[22px] flex flex-wrap items-center gap-[10px] font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-text-3">
              <span className="text-accent">{note.category}</span>
              <span aria-hidden="true">·</span>
              <span>{formatNoteDate(note.date)}</span>
              <span aria-hidden="true">·</span>
              <span>{note.readTime}</span>
            </div>
            <h1 className="mt-[14px] text-[clamp(28px,5vw,44px)] font-semibold leading-[1.08] tracking-[-0.03em] text-text">
              {note.title}
            </h1>
            <p className="mt-[18px] max-w-[62ch] text-[clamp(15.5px,1.8vw,17.5px)] leading-[1.6] text-text-2">
              {note.summary}
            </p>
            <div className="mt-[22px] flex flex-wrap gap-[6px]">
              {note.tags.map((tag) => (
                <TechToken key={tag}>{tag}</TechToken>
              ))}
            </div>
          </div>
        </header>

        <div className="prose-note mx-auto max-w-[720px] px-[clamp(18px,5vw,48px)] py-[clamp(36px,6vw,60px)]">
          <MDXContent code={note.code} />
        </div>
      </article>

      <div className="mx-auto max-w-[760px] px-[clamp(18px,5vw,48px)]">
        <NotesFooter backHref="/notes" backLabel="All notes" />
      </div>
    </main>
  );
}

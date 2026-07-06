import { defineConfig, defineCollection, s } from "velite";

/**
 * Notes — typed MDX content layer.
 * Each `.mdx` file under `content/notes/` becomes a `Note` with validated
 * frontmatter plus a compiled `code` string that <MDXContent> runs at build.
 * Output lands in `.velite/` (gitignored) and is imported via `#site/content`.
 */
const notes = defineCollection({
  name: "Note",
  pattern: "notes/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(120),
      category: s.string(),
      date: s.isodate(),
      readTime: s.string(),
      summary: s.string().max(400),
      tags: s.array(s.string()),
      /** manual sort key — lower shows first (falls back to date) */
      order: s.number().default(0),
      /** file path relative to content root, e.g. "notes/flood-simulation" */
      path: s.path(),
      /** compiled MDX (function-body) run by <MDXContent code={code} /> */
      code: s.mdx(),
    })
    .transform((data) => {
      const slug = data.path.replace(/^notes\//, "");
      return { ...data, slug, url: `/notes/${slug}` };
    }),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { notes },
});

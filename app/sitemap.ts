import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { notes } from "@/lib/notes";

// Emitted as a static /sitemap.xml at build (output: 'export').
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/notes/`, changeFrequency: "weekly", priority: 0.8 },
  ];

  const noteRoutes: MetadataRoute.Sitemap = notes.map((note) => ({
    url: `${base}${note.url}/`,
    lastModified: note.date,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...noteRoutes];
}

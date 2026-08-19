// Build-time logo extractor for the "Works with" strip.
//
// Pulls brand marks out of the `simple-icons` package (CC0) at author time and
// writes lib/generated/tech-logos.json, so the strip ships as inline SVG paths in
// the bundle — no CDN request, no network at page load, nothing to break offline
// or behind a strict CSP. This is a static export; a runtime <img src="cdn…"> would
// be the only external dependency on the whole page.
//
// A mark that simple-icons no longer carries (AWS was removed for trademark policy
// reasons, not licensing) is read from assets-src/logos/<slug>.svg instead — those
// files are the CC0 originals from an earlier simple-icons release.
//
// Re-run after changing the list or bumping simple-icons:  pnpm generate:logos
import * as simpleIcons from "simple-icons";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const LOCAL_DIR = "assets-src/logos";
const OUT_PATH = "lib/generated/tech-logos.json";

// Display order = how the strip reads left-to-right: languages, frontend, backend,
// data/ML, then infra — the same spine as the Stack section.
const LOGOS = [
  { slug: "typescript" },
  { slug: "python" },
  { slug: "go" },
  { slug: "cplusplus", label: "C++" },
  { slug: "react" },
  { slug: "nextdotjs", label: "Next.js" },
  { slug: "tailwindcss", label: "Tailwind CSS" },
  { slug: "maplibre", label: "MapLibre GL" },
  { slug: "nodedotjs", label: "Node.js" },
  { slug: "nestjs", label: "NestJS" },
  { slug: "fastapi", label: "FastAPI" },
  { slug: "celery", label: "Celery" },
  { slug: "pytorch", label: "PyTorch" },
  { slug: "tensorflow", label: "TensorFlow" },
  { slug: "opencv", label: "OpenCV" },
  { slug: "postgresql", label: "PostgreSQL" },
  { slug: "redis", label: "Redis" },
  { slug: "prisma", label: "Prisma" },
  { slug: "docker", label: "Docker" },
  // Not in simple-icons since v14 — read from assets-src/logos/.
  { slug: "amazonwebservices", label: "AWS" },
];

/** simple-icons exports each mark as siPascalCase, e.g. `nextdotjs` → `siNextdotjs`. */
const exportName = (slug) => `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;

async function localIcon(slug) {
  const svg = await readFile(path.join(LOCAL_DIR, `${slug}.svg`), "utf8");
  const d = svg.match(/<path[^>]*\sd="([^"]+)"/)?.[1];
  const title = svg.match(/<title>([^<]+)<\/title>/)?.[1];
  if (!d) throw new Error(`${slug}.svg has no <path d="…">`);
  return { path: d, title };
}

async function run() {
  const out = [];

  for (const entry of LOGOS) {
    const packaged = simpleIcons[exportName(entry.slug)];
    const source = packaged ?? (await localIcon(entry.slug));
    if (!packaged) console.log(`  ${entry.slug.padEnd(20)} (local — not in simple-icons)`);

    // No brand hex: the strip renders monochrome in currentColor. Half these marks
    // are near-black (Next.js, Vercel, Prisma, Railway) and would disappear on the
    // dark theme, and a strip of twenty brand colours fights the page either way.
    out.push({
      id: entry.slug,
      label: entry.label ?? source.title,
      path: source.path,
    });
  }

  await mkdir(path.dirname(OUT_PATH), { recursive: true });
  await writeFile(OUT_PATH, JSON.stringify(out, null, 2) + "\n");

  const bytes = out.reduce((n, l) => n + l.path.length, 0);
  console.log(`\nWrote ${OUT_PATH} · ${out.length} marks · ${Math.round(bytes / 102.4) / 10} KB of path data`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});

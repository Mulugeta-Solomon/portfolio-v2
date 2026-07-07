// Build-time image optimizer. Reads raw sources from assets-src/ (kept in git,
// not shipped) and emits responsive AVIF + WebP variants into public/assets/opt/,
// plus lib/generated/image-manifest.json consumed by <Picture>.
//
// Output filenames are content-hashed (`${base}-${w}.${hash}.ext`) so a changed
// source gets a new URL — safe to cache immutably, no stale images.
//
// Run manually when a source image changes:  pnpm optimize:images
import sharp from "sharp";
import { mkdir, writeFile, rm, stat, readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";

const SRC_DIR = "assets-src";
const OUT_DIR = "public/assets/opt";
const OUT_URL_BASE = "/assets/opt";
const MANIFEST_PATH = "lib/generated/image-manifest.json";

// Display-width ladders by role (retina-aware). Capped to each source's intrinsic
// width; the intrinsic width is always appended so the enlarge/`full` target and
// the top srcset entry are true full resolution.
const WIDTHS = {
  photo: [400, 600, 800],
  shot: [520, 780, 1040],
  diagram: [760, 1140, 1520],
};

const IMAGES = [
  { file: "portrait.jpg", src: "/assets/portrait.jpg", kind: "photo" },
  { file: "floodsight-map-crop.png", src: "/assets/floodsight-map-crop.png", kind: "shot" },
  { file: "karamu-dash.png", src: "/assets/karamu-dash.png", kind: "shot" },
  { file: "floodsight-architecture.png", src: "/assets/floodsight-architecture.png", kind: "diagram" },
  { file: "lsm-sequence.png", src: "/assets/lsm-sequence.png", kind: "diagram" },
  { file: "sora-architecture.png", src: "/assets/sora-architecture.png", kind: "diagram" },
];

const AVIF = { quality: 52, effort: 4 };
const WEBP = { quality: 80, effort: 4 };

const kb = (bytes) => Math.round(bytes / 102.4) / 10;

async function run() {
  await rm(OUT_DIR, { recursive: true, force: true });
  await mkdir(OUT_DIR, { recursive: true });
  await mkdir(path.dirname(MANIFEST_PATH), { recursive: true });

  const manifest = {};
  let totalOut = 0;

  for (const img of IMAGES) {
    const inputPath = path.join(SRC_DIR, img.file);
    const bytes = await readFile(inputPath);
    const hash = createHash("sha256").update(bytes).digest("hex").slice(0, 8);
    const meta = await sharp(bytes).metadata();
    const intrinsicW = meta.width;
    const intrinsicH = meta.height;
    const base = path.parse(img.file).name;

    const ladder = [...new Set(WIDTHS[img.kind].filter((w) => w <= intrinsicW))].sort((a, b) => a - b);
    const fallbackWidth = ladder.length ? ladder[ladder.length - 1] : intrinsicW;
    // Append the intrinsic width so `full` (enlarge) and the top srcset entry are true full-res.
    const widths = [...new Set([...ladder, intrinsicW])].sort((a, b) => a - b);

    const nameFor = (w, ext) => `${base}-${w}.${hash}.${ext}`;
    const avifSet = [];
    const webpSet = [];
    for (const w of widths) {
      const avifName = nameFor(w, "avif");
      const webpName = nameFor(w, "webp");
      await sharp(bytes).resize({ width: w }).avif(AVIF).toFile(path.join(OUT_DIR, avifName));
      await sharp(bytes).resize({ width: w }).webp(WEBP).toFile(path.join(OUT_DIR, webpName));
      avifSet.push(`${OUT_URL_BASE}/${avifName} ${w}w`);
      webpSet.push(`${OUT_URL_BASE}/${webpName} ${w}w`);
      totalOut += (await stat(path.join(OUT_DIR, avifName))).size;
      totalOut += (await stat(path.join(OUT_DIR, webpName))).size;
    }

    manifest[img.src] = {
      width: intrinsicW,
      height: intrinsicH,
      avif: avifSet.join(", "),
      webp: webpSet.join(", "),
      fallback: `${OUT_URL_BASE}/${nameFor(fallbackWidth, "webp")}`,
      full: `${OUT_URL_BASE}/${nameFor(intrinsicW, "webp")}`,
    };
    console.log(`  ${img.file.padEnd(30)} ${intrinsicW}×${intrinsicH}  → [${widths.join(", ")}]  (#${hash})`);
  }

  await writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`\nWrote ${MANIFEST_PATH} · ${IMAGES.length} images · total variants ${kb(totalOut)} KB`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});

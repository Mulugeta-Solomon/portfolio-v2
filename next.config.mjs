import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

// Content-hash the resume PDF so its download URL cache-busts automatically on every
// change: the link becomes …-Resume.pdf?v=<hash>, a fresh CDN cache key, so an updated
// resume goes live the moment the deploy lands — no stale edge cache, no manual bump.
const resumeVersion = (() => {
  try {
    const pdf = readFileSync(
      new URL("./public/assets/Mulugeta-Solomon-Abate-Resume.pdf", import.meta.url),
    );
    return createHash("sha256").update(pdf).digest("hex").slice(0, 10);
  } catch {
    return "dev";
  }
})();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export → Cloudflare Pages. No server runtime.
  output: "export",
  // next/image optimization requires a server; ship correctly-sized images instead.
  images: { unoptimized: true },
  // Emits /route/index.html — maps cleanly on Cloudflare Pages, avoids trailing-slash 404s.
  trailingSlash: true,
  reactStrictMode: true,
  // Dev-only: allow the LAN IP so fonts/HMR aren't blocked as cross-origin when
  // viewing from another device. Ignored by `next build` (static export).
  allowedDevOrigins: ["192.168.0.8"],
  // Inlined into the bundle at build; consumed by siteConfig.resumePath.
  env: { RESUME_V: resumeVersion },
};

// Velite content layer (Notes/MDX). Turbopack ignores webpack plugins, so we run
// Velite's build when Next loads this config — once per process — before dev/build
// proceeds. Watch mode in `next dev`; a clean one-shot build otherwise.
await runVelite();

async function runVelite() {
  if (process.env.VELITE_STARTED) return;
  const argv = process.argv;
  const isDev = argv.includes("dev");
  const isBuild = argv.includes("build");
  if (!isDev && !isBuild) return;
  process.env.VELITE_STARTED = "1";
  const { build } = await import("velite");
  await build({ watch: isDev, clean: !isDev });
}

export default nextConfig;

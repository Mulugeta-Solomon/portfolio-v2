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

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
  // NOTE: Velite content-layer build hook is wired here in Phase 5 (Notes/MDX).
};

export default nextConfig;

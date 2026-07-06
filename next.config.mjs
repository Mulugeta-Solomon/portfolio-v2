/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export → Cloudflare Pages. No server runtime.
  output: "export",
  // next/image optimization requires a server; ship correctly-sized images instead.
  images: { unoptimized: true },
  // Emits /route/index.html — maps cleanly on Cloudflare Pages, avoids trailing-slash 404s.
  trailingSlash: true,
  reactStrictMode: true,
  // NOTE: Velite content-layer build hook is wired here in Phase 5 (Notes/MDX).
};

export default nextConfig;

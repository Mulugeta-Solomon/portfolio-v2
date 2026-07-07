import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// Emitted as a static /robots.txt at build (output: 'export').
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}

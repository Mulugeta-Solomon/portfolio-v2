import type { SiteConfig } from "@/lib/types";

export const siteConfig: SiteConfig = {
  name: "Mulugeta Solomon Abate",
  shortName: "Mulugeta Abate",
  role: "Software Engineer · Backend, System Design & ML",
  tagline: "I build end-to-end systems for problems that matter.",
  description:
    "Software engineer in Tokyo specializing in backend, system design, and machine learning. I build production ML platforms, cloud infrastructure, and end-to-end products — from flood-simulation and malaria-detection AI services to a SaaS product for the East African market.",
  url: "https://mulugetaabate.com",
  email: "mulugetas.abate@gmail.com",
  github: "https://github.com/Mulugeta-Solomon",
  linkedin: "https://www.linkedin.com/in/mulugeta-solomon/",
  // Content-hashed at build (next.config.mjs env.RESUME_V) so the URL changes whenever the
  // PDF changes → the CDN serves the new file immediately, with no stale cache and no purge.
  resumePath: `/assets/Mulugeta-Solomon-Abate-Resume.pdf?v=${process.env.RESUME_V ?? "1"}`,
  location: "Tokyo, Japan",
  current: "Software Engineer, ML & AI — Sora Technology, Tokyo",
  availability: "Based in Tokyo, Japan · authorized to work in Japan · open to remote",
};

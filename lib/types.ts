export interface SiteConfig {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  github: string;
  linkedin: string;
  resumePath: string;
  location: string;
  current: string;
  availability: string;
}

export interface LayerRow {
  label: string;
  value: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  kind: "screenshot" | "diagram";
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  category: string;
  title: string;
  blurb: string;
  role: string;
  resultChips: string[];
  techTokens: string[];
  images: ProjectImage[];
  mediaOrder: "media-first" | "media-last";
  badge?: { label: string };
  liveUrl?: { label: string; href: string };
  architecture: {
    eyebrow: string;
    note: string;
    heading: string;
    paragraph: string;
    diagram?: { src: string; alt: string; caption: string; width: number; height: number };
    layers?: LayerRow[];
  };
}

export interface JourneyEntry {
  period: string;
  title: string;
  org: string;
  blurb: string;
  badges?: string[];
  inlineBadge?: { label: string; variant: "concurrent" | "now" };
  variant: "default" | "now";
}

export interface StackRow {
  label: string;
  value: string;
}

export interface NoteMeta {
  slug: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  tags: string[];
}

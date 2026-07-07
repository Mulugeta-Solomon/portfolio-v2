import manifest from "@/lib/generated/image-manifest.json";

/** One optimized image's variants, produced by scripts/optimize-images.mjs. */
export interface ImageVariant {
  /** intrinsic width/height of the source — used for the CLS aspect-ratio box */
  width: number;
  height: number;
  /** responsive srcset strings */
  avif: string;
  webp: string;
  /** single-file fallback for the <img> */
  fallback: string;
  /** largest variant — used for click-to-enlarge links */
  full: string;
}

const images: Record<string, ImageVariant> = manifest;

/** Look up an optimized image by its original `/assets/…` source path. */
export function getImage(src: string): ImageVariant | undefined {
  return images[src];
}

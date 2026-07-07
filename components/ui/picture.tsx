import { getImage } from "@/lib/images";

interface PictureProps {
  /** original `/assets/…` source path (manifest key) */
  src: string;
  alt: string;
  /** responsive `sizes` for the srcset */
  sizes: string;
  className?: string;
  /** eager + high fetch priority for an above-the-fold LCP element (e.g. hero) */
  priority?: boolean;
}

/**
 * Static-export image: a <picture> serving AVIF → WebP responsive variants with
 * a WebP fallback <img>. Replaces next/image (which can't emit an AVIF/WebP
 * picture under `output: 'export'`). Dimensions come from the manifest so the
 * browser reserves the aspect-ratio box (no layout shift).
 */
export function Picture({ src, alt, sizes, className, priority = false }: PictureProps) {
  const img = getImage(src);

  if (!img) {
    // Every rendered image must go through the pipeline. A miss means the source
    // isn't in scripts/optimize-images.mjs — fail the static build loudly rather
    // than ship a 404 (the raw original no longer exists; it lives in assets-src/).
    throw new Error(
      `No optimized image for "${src}". Add it to scripts/optimize-images.mjs and run \`pnpm optimize:images\`.`,
    );
  }

  return (
    <picture>
      <source type="image/avif" srcSet={img.avif} sizes={sizes} />
      <source type="image/webp" srcSet={img.webp} sizes={sizes} />
      <img
        src={img.fallback}
        alt={alt}
        width={img.width}
        height={img.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        className={className}
      />
    </picture>
  );
}

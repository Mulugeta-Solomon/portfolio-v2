import logos from "./generated/tech-logos.json";

export interface TechLogo {
  /** simple-icons slug */
  id: string;
  /** the name shown in the hover tooltip and read by screen readers */
  label: string;
  /** 24×24 viewBox path data */
  path: string;
}

/** Brand marks for the "Works with" strip — see scripts/generate-tech-logos.mjs. */
export const techLogos: TechLogo[] = logos;

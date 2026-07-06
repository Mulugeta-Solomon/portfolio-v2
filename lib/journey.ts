import type { JourneyEntry } from "@/lib/types";

export const journey: JourneyEntry[] = [
  {
    period: "2016 – 2021",
    title: "B.Sc. Electromechanical Engineering",
    org: "Addis Ababa Science & Technology University · Ethiopia",
    blurb:
      "Graduated 3.81 / 4.0. Foundations in embedded systems, control, data structures, and computer vision.",
    variant: "default",
  },
  {
    period: "2022 – 2024",
    title: "M.Sc. Robotics",
    org: "Ritsumeikan University · Kyoto, Japan",
    blurb:
      "MEXT Scholar. Robot control, AI, and security. Teaching assistant for 60+ graduate students, and co-authored an RSJ2024 paper on semantic line detection.",
    badges: ["MEXT Scholar", "RSJ2024"],
    variant: "default",
  },
  {
    period: "2024 – 2025",
    title: "A2SV — Backed by Google",
    inlineBadge: { label: "Concurrent", variant: "concurrent" },
    org: "Competitive Programming & Software Engineering",
    blurb:
      "1,500+ hours of algorithms and industry engineering practice with a program that has placed 80+ engineers at Google, Amazon, and Bloomberg.",
    variant: "default",
  },
  {
    period: "Jul – Oct 2024",
    title: "Software / ML Intern",
    org: "Sora Technology · Tokyo, Japan",
    blurb:
      "Optimized drone path-planning (−33% acquisition time) and migrated object detection from YOLOv5 to YOLOv8 (+22% accuracy).",
    variant: "default",
  },
  {
    period: "Oct 2024 – Present",
    title: "Software Engineer, ML & AI",
    inlineBadge: { label: "NOW", variant: "now" },
    org: "Sora Technology · Tokyo, Japan",
    blurb:
      "Architected the SORA platform backend on AWS, built Flood-Sight end-to-end, and shipped waterbody AI detection at >85% precision / recall.",
    badges: ["AWS", "Flood-Sight", "LSM"],
    variant: "now",
  },
];

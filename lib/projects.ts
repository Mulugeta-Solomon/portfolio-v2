import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "flood-sight",
    category: "Climate · Disaster response",
    title: "Flood-Sight",
    blurb:
      "A physics-based flood-simulation and early-warning platform, deployed for disaster preparedness in Mozambique through a JICA-linked program.",
    role: "ML & AWS infrastructure — backend architecture in private subnets, simulation-engine integration, and geospatial data pipelines.",
    resultChips: ["Deployed · Mozambique", "146+ automated tests", "i18n · 4 languages"],
    techTokens: ["FastAPI", "Celery", "Next.js", "MapLibre GL", "PostgreSQL", "AWS"],
    images: [
      {
        src: "/assets/floodsight-landing.png",
        alt: "Flood-Sight landing page — 'See the flood before it arrives': rainfall-driven inundation shown on a map with a flood-depth legend and peak-inundation figure, built by SORA Technology for national disaster-management agencies",
        kind: "screenshot",
      },
      {
        src: "/assets/floodsight-map-crop.png",
        alt: "Flood-Sight flood simulation map",
        kind: "screenshot",
      },
    ],
    mediaOrder: "media-first",
    liveUrl: { label: "flood-sight.com ↗", href: "https://flood-sight.com" },
    architecture: {
      eyebrow: "System architecture",
      note: "One engineer · every layer",
      heading: "Rainfall and terrain in, a flood‑depth map out — end to end.",
      paragraph:
        "A Next.js front end talks to a FastAPI control plane that enqueues long‑running simulations onto Celery workers through Redis, streams live progress back over WebSocket, and tracks every job in Postgres. The flood engine — Landlab, SCS‑CN runoff, shallow‑water flow — writes GeoTIFF and PNG outputs to S3. JWT auth, transactional email, and Sentry observability round it out, deployed on Railway.",
      diagram: {
        src: "/assets/floodsight-architecture.png",
        alt: "Flood-Sight system architecture: Next.js frontend, FastAPI backend, Celery workers on Redis, PostgreSQL, the flood-simulation engine, S3 storage, transactional email, and Sentry observability, deployed on Railway",
        caption: "Click to view full size ↗",      },
      layers: [
        { label: "Frontend", value: "Next.js 16 · React 19 · TypeScript · MapLibre GL · i18n (EN/FR/PT/JA)" },
        { label: "Backend", value: "FastAPI · SQLAlchemy 2 async · Pydantic · WebSocket progress · JWT auth" },
        { label: "Data", value: "PostgreSQL 16 · Alembic migrations · Redis 7 · async pipelines" },
        { label: "Simulation", value: "Python · Landlab · SCS‑CN runoff · shallow‑water (SWE) · rasterio" },
        { label: "Infra", value: "Railway · Docker · Celery · S3 / Cloudflare R2 · Resend · Sentry" },
      ],
    },
  },
  {
    slug: "lsm",
    category: "Public health · Applied ML",
    title: "LSM — Larval Source Management",
    blurb:
      "AI web services that detect mosquito breeding sites from drone imagery and model disease risk — a greenfield services line supporting malaria prevention across multiple countries.",
    role: "Architecting the detection services and inference pipeline — models, evaluation frameworks, and AWS job orchestration.",
    resultChips: [">85% precision / recall", "+20% accuracy", "mAP · IoU · F1 eval"],
    techTokens: ["Python", "PyTorch", "YOLOv8", "SQS", "EC2 · GPU", "S3"],
    images: [
      {
        src: "/assets/lsm-sequence.png",
        alt: "LSM inference job pipeline sequence diagram: client, FastAPI on ECS Fargate, RDS Postgres, S3, SQS, and a GPU worker on EC2",
        kind: "diagram",
        caption: "Request flow · click to enlarge ↗",      },
    ],
    mediaOrder: "media-last",
    badge: { label: "Internal platform" },
    architecture: {
      eyebrow: "Platform architecture",
      note: "SORA · AWS",
      heading: "The infrastructure the detection services run on.",
      paragraph:
        "A FastAPI control plane sits in a private subnet behind API Gateway; drone imagery lands in S3, and detection jobs are decoupled through SQS so GPU workers on EC2 pull and process them independently. Job state and results persist in RDS Postgres. The same async, queue‑backed pattern lets inference scale without ever blocking the API.",
      diagram: {
        src: "/assets/sora-architecture.png",
        alt: "SORA platform AWS architecture: clients, API Gateway, Lambda, a FastAPI service in a private subnet, SQS, EC2 GPU inference, RDS Postgres, and S3",
        caption: "Click to view full size ↗",      },
    },
  },
  {
    slug: "karamu",
    category: "Product · SaaS · Solo build",
    title: "Karamu",
    blurb:
      "A restaurant reservation and management platform for the East African market — designed, built, and shipped end-to-end: product, brand, and engineering.",
    role: "Founder & sole engineer — product design, brand identity, full-stack build, and infrastructure.",
    resultChips: ["Real-time floor", "M-Pesa payments", "SMS / WhatsApp"],
    techTokens: ["React", "Next.js", "TypeScript", "Node", "NestJS", "Prisma", "Socket.io"],
    images: [
      {
        src: "/assets/karamu-dash.png",
        alt: "Karamu restaurant dashboard",
        kind: "screenshot",      },
    ],
    mediaOrder: "media-first",
    liveUrl: { label: "getkaramu.com ↗", href: "https://getkaramu.com" },
    architecture: {
      eyebrow: "System architecture",
      note: "Solo build · every layer",
      heading: "A reservation system that has to be right on a Friday night.",
      paragraph:
        "One system, five surfaces: reservations, a restaurant dashboard, table management, QR menus, and a kitchen display system (KDS). A Next.js front end drives them against a NestJS API, with everything modeled in PostgreSQL through Prisma. Socket.io keeps the floor and the kitchen in sync in real time, M‑Pesa handles payments, and confirmations go out over SMS and WhatsApp.",
      layers: [
        { label: "Frontend", value: "React · TypeScript · Next.js · Tailwind · real‑time floor UI" },
        { label: "Backend", value: "NestJS · REST · Better Auth · webhook handlers" },
        { label: "Data", value: "PostgreSQL · Prisma ORM · migrations" },
        { label: "Real‑time", value: "Socket.io · live floor + hold state" },
        { label: "Integrations", value: "M‑Pesa payments · SMS / WhatsApp" },
        { label: "Infra", value: "Cloudflare Workers · R2 · CDN · Railway · Docker · CI/CD · getkaramu.com" },
      ],
    },
  },
];

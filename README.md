# Portfolio V2 — Mulugeta Solomon Abate

Personal portfolio and engineering notes for **Mulugeta Solomon Abate** — a software engineer in Tokyo focused on **backend, system design & ML**. Dark-first with a light theme, built around an Apple-style **Liquid Glass** design language.

**Live:** https://mulugetaabate.dev — also reachable at mulugetaabate.com, which 301s here.

---

## Stack

- **Next.js 16** (App Router) — static export (`output: 'export'`)
- **TypeScript** · **Tailwind CSS v4** (CSS-first `@theme` design tokens)
- **motion** (formerly framer-motion) — scroll reveals & micro-interactions
- **next-themes** — dark/light with a no-flash inline script
- Self-hosted **Geist** / **Geist Mono** fonts
- **Velite** — typed MDX for the Notes section
- Deployed to **Cloudflare Pages**

## Design language — Liquid Glass

A hand-rolled `<Glass>` primitive (no library): layered `backdrop-filter` blur + saturation, a specular edge highlight, and subtle grain — with a pointer-reactive sheen on the hero. It respects `prefers-reduced-transparency` and `prefers-reduced-motion`, and every design token passes WCAG 2.2 AA contrast in both themes.

## Develop

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # static export → ./out
```

Requires **Node 20/22** and **pnpm**.

## Structure

```
app/            routes (home, notes) · root layout · globals.css (tokens + glass)
components/
  ui/           Glass, Button, Chip/TechToken, GlassSheen, icons
  layout/       Header, nav, theme toggle, mobile menu
  home/         Hero, Work, About, Journey, Stack, Contact
  motion/       Reveal, FadeIn (motion wrappers)
content/notes/  MDX articles
lib/            typed content (projects, journey, stack, notes) + site config
```

---

© 2026 Mulugeta Solomon Abate

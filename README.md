# Nexora — B2B SaaS Landing Page

A high-end marketing landing page for **Nexora**, a fictional AI workspace/productivity platform for teams. Built as a portfolio piece to demonstrate professional B2B SaaS web design — the companion piece to [nova-3d-showcase](https://github.com/YASH-KID/nova-3d-showcase), which showcases 3D/interactive web development instead.

**Live demo:** https://nexora-landing-gamma.vercel.app
**Note:** Nexora is a fictional product created for portfolio purposes — it is not a real company or service.

## Sections

Header → Hero (with product dashboard preview) → Trusted-by logo strip → Features → Product showcase (tabbed) → Integrations → Results/analytics → Testimonials → Pricing → FAQ → Final CTA → Footer.

## Interactive features

- **Dark mode** — a full second theme (not just an inverted header) driven entirely by CSS custom properties; toggled from the header, persisted to `localStorage`, and falls back to the OS `prefers-color-scheme` on first visit.
- **Seat-based pricing calculator** — a slider in the Pricing section recomputes the Starter/Pro monthly total live as you drag it, reflecting the seat-based pricing model real B2B SaaS products use.
- **Command palette (⌘K / Ctrl K)** — a Linear/Raycast-style search overlay with live filtering across projects, docs, people and actions, full keyboard navigation (arrows to move, Enter to select, Esc to close), and a working "switch theme" action.

## Tech stack

- React 19 + TypeScript + Vite
- Plain CSS with a token-based design system (`src/index.css`) — no CSS framework
- [lucide-react](https://lucide.dev/) for icons
- No animation/chart libraries — scroll reveals and count-up stats use a small custom `IntersectionObserver` hook, and the dashboard mockup charts are hand-built with CSS

## Running locally

```bash
npm install
npm run dev
```

Then open the printed local URL (defaults to `http://localhost:5173`).

## Building for production

```bash
npm run build
npm run preview
```

## Project structure

```
index.html          → page shell, meta tags, fonts
src/main.tsx         → React entry point
src/App.tsx           → composes all sections
src/index.css          → design tokens + all styles
src/hooks/              → useInView (scroll reveal) and useCountUp (animated stats)
src/components/          → one component per page section
```

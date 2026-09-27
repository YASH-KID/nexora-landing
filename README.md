# Nexora — B2B SaaS Landing Page

A high-end marketing landing page for **Nexora**, a fictional AI workspace/productivity platform for teams. Built as a portfolio piece to demonstrate professional B2B SaaS web design — the companion piece to [nova-3d-showcase](https://github.com/YASH-KID/nova-3d-showcase), which showcases 3D/interactive web development instead.

**Live demo:** https://nexora-landing-gamma.vercel.app
**Note:** Nexora is a fictional product created for portfolio purposes — it is not a real company or service.

## Sections

Header → Hero (with product dashboard preview) → Trusted-by logo strip → Features → Product showcase (tabbed) → Integrations → Results/analytics → Testimonials → Pricing → FAQ → Final CTA → Footer.

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

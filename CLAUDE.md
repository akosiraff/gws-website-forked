@AGENTS.md

# GWS Website — Project Guide

## Project
Marketing website for **Global Workforce Solutions Pty Ltd** (ACN 671 808 772) — Australian international labour recruitment (mining, construction, manufacturing) sourcing from Manila.

## Stack
- Next.js 15 App Router + TypeScript
- Tailwind CSS, shadcn/ui, Radix UI
- Framer Motion + GSAP for animations
- lucide-react for icons
- Vercel deployment

## Design Tokens
- Background: `#0A1628` (deep navy)
- Surface: `#0F1E35`
- Primary: `#2563EB` (blue)
- Accent: `#D97706` (amber)
- Text muted: `#94A3B8`

## Conventions
- Animations: Framer Motion `motion.*` with `viewport={{ once: true }}`
- Section padding: `py-24 px-4 sm:px-6 lg:px-8`
- Container: `max-w-7xl mx-auto`
- Cards: `bg-[#0F1E35] border border-white/[0.08] rounded-2xl`

## Build Commands
```bash
npm run dev    # localhost:3000
npm run build
vercel --prod  # deploy
```

## Contact Info (used in Footer/CTA)
- Phone: +61 413 566 464
- Email: admin@globalworkforcesolutions.com.au
- ACN: 671 808 772 | ABN: 46 671 808 772

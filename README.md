# DSS — Digital Solutions Shield website

Bilingual (EN/AR) marketing site for DSS. Next.js (App Router) + TypeScript + Tailwind CSS, built as a static export and deployed to GitHub Pages.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What's here

- `app/(en)/` and `app/ar/` — mirrored EN/AR routes: `/`, `/about`, `/services` (+ 4 pillar sub-pages: governance-consulting, cybersecurity, professional-services, ai-automation), `/engagement`, `/why-us`, `/contact`
- `components/` — `SiteHeader` (includes the services mega menu), `SiteFooter`, `ContactForm`, `BackButton`, `JsonLd`, `ThemeToggle`, `LanguageSwitcher`
- `lib/content.ts` / `lib/content.ar.ts` — **all site copy lives here**, including each page's SEO title/description (`pageSeo`). Edit these files to change wording anywhere on the site rather than hunting through pages.
- `lib/seo.ts` — shared hreflang helper, anchor-id helper for service items, and JSON-LD schema builders (Organization + Service)
- `public/images/` — logo assets sourced from the approved files in the separate `DSS Assets/Logos` folder (not part of this repo) — check there before adding or changing any logo/icon
- `public/CNAME` — the custom domain GitHub Pages serves (`dss-sa.com`)
- `tailwind.config.ts` — brand colors as `forest` / `gold` / `cream` (`#062F21`, `#B38443`, `#FDFAF5`)

## Deploying

Push to `main` — `.github/workflows/deploy.yml` builds the static export and publishes it to GitHub Pages automatically. No manual deploy step.

## Known placeholders / things to revisit

- **Fonts:** using free look-alikes (Oswald + Inter + Tajawal via `next/font/google`) as placeholders for the brand's specified commercial fonts.
- **AI secretary:** the `/services/ai-automation` page describes an n8n-based AI secretary that will eventually answer visitor questions live on the site and hand off details to the team — not built yet.
- **Contact:** the contact form (`components/ContactForm.tsx`) submits to Web3Forms, emailing `info@ds-shield.com`. The domain moved to `dss-sa.com` but the mailbox hasn't moved yet — update the email in `lib/content.ts` / `lib/content.ar.ts` / `lib/seo.ts` once it does.

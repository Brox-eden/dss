# DSS website — context for Claude

This file is read automatically at the start of every session in this folder. It exists because this project's folder has moved several times (OneDrive → Google Drive → `C:\Projects\ds-shield` → this location), and each move breaks Claude Code's session-memory continuity. Read this before doing anything else.

## What this is

Bilingual (EN/AR) marketing site for **DSS** (Digital Solutions Shield), a Saudi Arabia based cybersecurity/IT consulting company. Next.js (App Router) + TypeScript + Tailwind, built as a static export, deployed to GitHub Pages at **dss-sa.com**. Repo: `github.com/Brox-eden/dss`. See `README.md` for the file/folder layout.

## Standing rules (learned the hard way — follow these without being asked again)

- **Never work from a cloud-synced folder** (OneDrive, Google Drive). It corrupted files and broke builds twice. Plain local folders only.
- **Tag a backup before any big change**: `git tag backup-<what>-<yyyymmdd-hhmm>` and `git push origin <tag>`, before large content rewrites, structural refactors, or anything the user calls significant.
- **Ask before browsing folders the user hasn't pointed you to.** Reading a folder they *did* name for the current task doesn't need to be re-asked each time.
- **Only use logo/icon assets from the approved `DSS Assets\Logos` folder** (as of this writing: `C:\Projects\DSS Assets\Logos` — confirm this path is still current, since it hasn't necessarily moved along with this repo). Never hand-crop or invent logo variants. If a needed variant doesn't exist (e.g. a white version of a color-only asset), generate it programmatically from the approved source (recolor via its alpha channel) rather than designing something new.
- **No background plates/cards behind logos, ever** — if contrast against a background is a problem, recolor the asset itself (e.g. solid white) instead of adding a backing.
- **Layout naming**: "Header" = the top bar with the logo and nav links. "Hero" = the large colored section right below it with the headline. Use these terms, not ad-hoc descriptions.
- Always verify a production build (`npm run build`) before pushing, and do a quick dev-server smoke test of anything visual.

## Current architecture notes

- All site copy — including per-page SEO titles/descriptions (`pageSeo`) — lives in `lib/content.ts` (EN) and `lib/content.ar.ts` (AR). Edit there, not in page files.
- `lib/seo.ts` has the hreflang helper, the service-item anchor-id helper, and the JSON-LD schema builders (Organization + Service).
- Services are 4 pillars: governance-consulting, cybersecurity, professional-services, ai-automation — each has an EN and AR route under `app/(en)/services/` and `app/ar/services/`. The header's services nav item is a mega menu (desktop hover panel / mobile accordion) built from this same pillar data.
- Contact form (`components/ContactForm.tsx`) submits client-side to **Web3Forms** (no backend needed, this is a static export). The access key embedded there is meant to be public.
- Domain is `dss-sa.com` (see `public/CNAME`), but the contact email is still `info@ds-shield.com` — the new mailbox hasn't been set up yet. Don't change the email without being told the new one is ready.
- Deploys automatically via `.github/workflows/deploy.yml` on every push to `main` — no manual deploy step, and nothing about deploys needs the user's Google/domain accounts.

## Known open items

- Google Search Console: blocked on the user regaining access to the `dss-sa.com` Google account; can proceed with a personal account in the meantime and add the business account as a co-owner later without redoing verification.
- Fonts are free look-alikes (Oswald/Inter/Tajawal) standing in for the brand's actual commercial fonts.
- The AI secretary (n8n-based, answers visitor questions + relays details to the team) described on `/services/ai-automation` is not built yet.

# CrewLab

Find your crew. Build what matters.

CrewLab is a startup community and collaboration platform for builders in India. Share an idea, discover projects, join a team, and turn ideas into impact.

## Current Status

The project is in **pre-launch**. What exists today is a fully polished, single-page marketing site with a working waitlist, targeting SEO and community growth ahead of the product build.

### Marketing site

Single-page marketing site (App Router, statically prerendered) with these sections:

- **Hero** - "Find your crew. Build what matters." with waitlist CTA
- **Tickers** - marquee of core values
- **Ways in** - three entry cards for builders (got an idea / want to build / community), each linking to the waitlist
- **How it works** - onboarding steps
- **Workspace** - dashboard mockup preview of the future product
- **Projects rail** - project discovery preview
- **Join** - "Your next big project starts here" waitlist section with goat-branded panel
- **Footer** - product/company links, social links (Discord, Instagram, X), contact

### Waitlist

- `POST /api/waitlist` validates email format and inserts into the Supabase `waitlist` table
- Returns `success`, `duplicate` (unique constraint), `invalid`, or `error`
- Uses the Supabase service role on the server; env vars are documented below

### SEO, geo & social

- Full metadata: title template, description, keywords, canonical, Open Graph (`en_IN`), Twitter card, robots/googlebot directives
- Geo tags: `geo.region` (IN), `geo.placename` (India), `geo.position` / `ICBM`
- JSON-LD structured data (WebSite + Organization + WebPage with GeoCoordinates and social `sameAs`)
- Auto-generated branded Open Graph image (`/opengraph-image`), `robots.txt`, and `sitemap.xml`
- Base URL is centralized in `src/lib/site.ts` (`https://crewlab.ujjwaluzu.in` for now; `https://crewlab.in` at launch)

### Brand assets & design

- Custom favicon set under `public/favicon_io`
- WebP-optimized artwork (`below-hero.webp`, `goat.webp`)
- Hand-rolled CSS design system (fonts via Fontshare + Google Fonts), inline SVG icon set (`SvgDefs`), torn-edge + wobble SVG filters, dark/paper theme
- Active section highlighting: URL hash updates to the section currently in view (`SectionSpy`)

## Future Status / Roadmap

### Launch block

- [ ] Switch `SITE_URL` in `src/lib/site.ts` to `https://crewlab.in`
- [ ] Ownership/verification meta tags (Google Search Console, Bing, etc.)
- [ ] Live social accounts finalised: X handle, Discord server, Instagram
- [ ] Blog routing over to `blog.ujjwaluzu.in` already wired; fully integrate content
- [ ] Legal pages: Privacy Policy, Terms of Service

### Product (post-launch)

- [ ] **Auth** - email + OAuth sign-in (Google, GitHub)
- [ ] **Profiles** - builder profiles with skills, interests, portfolio, links
- [ ] **Ideas** - post, browse, and upvote project ideas
- [ ] **Projects** - create/join teams, milestones, task tracking
- [ ] **Culture** - activity feed, project discussions, milestone updates
- [ ] **Integrations** - GitHub repository linking, commit/event feed
- [ ] **Workspace dashboard** - the full product behind the mockup we show today
- [ ] **Marketplace** - freelancing/job matching built on top of the community

### Platform

- [ ] Supabase auth + Postgres-backed persistence for ideas/projects/teams
- [ ] Real-time updates (Supabase Realtime) for activity feed and discussions
- [ ] Image/document uploads to Supabase Storage
- [ ] Analytics + privacy-aware tracking
- [ ] Rate limiting and abuse protection on the waitlist and public APIs

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- Supabase (Postgres + Auth + Storage)
- ESLint
- Custom CSS (no UI framework; Tailwind is installed but unused)

## Getting Started

```bash
npm install
cp .env.example .env.local   # add your Supabase keys
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` - development server (Turbopack)
- `npm run build` - production build
- `npm run start` - start production server
- `npm run lint` - ESLint

## Environment Variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase public anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key used server-side for waitlist inserts |

## Project Structure

```
src/
  app/
    api/waitlist/route.ts   # waitlist endpoint
    globals.css             # design system / all styles
    layout.tsx              # root layout + SEO metadata + JSON-LD
    opengraph-image.tsx     # generated OG image
    robots.ts / sitemap.ts  # SEO route handlers
  components/               # page sections + shared pieces
  lib/
    site.ts                 # single source for URL / keywords / geo / socials
    supabase/server.ts      # server Supabase client
public/
  favicon_io/               # favicon set
  *.webp                    # site artwork
```
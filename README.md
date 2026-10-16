# CrewLab

**Find your crew. Build what matters.**

CrewLab is a prelaunch marketing site for a community where founders, developers, designers, students, and other builders can find people to work with on startup and side project ideas. The site explains the proposed product, showcases sample project listings, and collects email addresses from people interested in updates and early access.

> **Project status:** This repository contains the public marketing site and waitlist experience. Product capabilities described on the site are planned CrewLab features; the marketing pages and sample listings are not the live collaboration product.

## What’s on the site

- A branded homepage introducing CrewLab and its value for project owners and builders.
- Informational pages for features, how it works, finding cofounders or developers, startup teams, side projects, and student projects.
- An Explore page with sample project listings to illustrate discovery and requested skills.
- A waitlist page and `POST /api/waitlist` endpoint. The endpoint validates and normalizes email addresses, stores submissions in the Supabase `waitlist` table, and reports duplicate submissions.
- Search and social sharing metadata, structured data, a generated Open Graph image, `robots.txt`, and `sitemap.xml`.

## Tech stack

- Next.js 16 App Router and React 19
- TypeScript
- Supabase for waitlist persistence
- Custom CSS and component-based page sections

## Run locally

Use Node.js and npm, then install dependencies and configure the environment:

```bash
npm install
```

Copy `.env.example` to `.env.local` and fill in the Supabase project values. In PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Then start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The site can render without Supabase credentials, but waitlist submissions require the environment variables below and a configured Supabase `waitlist` table.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase public anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only service role key used by the waitlist endpoint |

Keep `SUPABASE_SERVICE_ROLE_KEY` private. Do not expose it in client-side code or commit real credentials.

## Useful commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Routes

| Route | Purpose |
| --- | --- |
| `/` | CrewLab overview and primary calls to action |
| `/features` | Overview of proposed CrewLab product features |
| `/how-it-works` | Explains the intended builder and project-owner journey |
| `/explore` | Sample projects and project discovery information |
| `/waitlist` | Email signup for updates and early access |
| `/about` | About CrewLab |
| `/find-cofounder`, `/find-developers`, `/startup-teams`, `/side-projects`, `/student-projects` | Audience and search-focused landing pages |

## Project structure

```text
src/
  app/
    api/waitlist/route.ts   # Waitlist API route
    about/                  # About page
    explore/                # Sample project discovery page
    features/               # Product overview landing page
    how-it-works/           # Product journey landing page
    waitlist/                # Waitlist signup page
    layout.tsx              # Shared layout and site metadata
    opengraph-image.tsx     # Generated social sharing image
    robots.ts               # robots.txt route
    sitemap.ts              # sitemap.xml route
  components/               # Shared marketing site components
  lib/
    site.ts                 # Site URL, SEO content, routes, and social links
    supabase/server.ts      # Server-side Supabase client
public/                     # Favicon and site artwork
```

## Site URL

The canonical site URL and shared SEO content are configured in `src/lib/site.ts`. Update `SITE_URL` there when the public domain changes so canonical links, metadata, and structured data stay aligned.

# CrewLab

**Find your crew. Build what matters.**

CrewLab is a marketing site for a community where founders, developers, designers, students, and other builders find people to work with on startup and side project ideas. Visitors can explore product information and sample project listings, then create an account in the CrewLab app at [app.crewlab.ujjwaluzu.in](https://app.crewlab.ujjwaluzu.in).

## What's on the site

- A branded homepage introducing CrewLab and its value for project owners and builders.
- Informational pages for features, how it works, finding cofounders or developers, startup teams, side projects, and student projects.
- An Explore page with sample project listings to illustrate discovery and requested skills.
- English and Hindi pages, search metadata, structured data, Open Graph imagery, `robots.txt`, and `sitemap.xml`.
- Signup calls to action that take visitors directly to the CrewLab app. Legacy `/waitlist` URLs redirect to the app.

## Tech stack

- Next.js 16 App Router and React 19
- TypeScript
- Custom CSS and component-based page sections

## Run locally

Use Node.js and npm, then install dependencies:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Useful commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Routes

| Route | Purpose |
| --- | --- |
| `/` | CrewLab overview and signup calls to action |
| `/features` | Overview of CrewLab product features |
| `/how-it-works` | The builder and project-owner journey |
| `/explore` | Sample projects and project discovery information |
| `/about` | About CrewLab |
| `/find-cofounder`, `/find-developers`, `/startup-teams`, `/side-projects`, `/student-projects` | Audience and search-focused landing pages |
| `/hi` and `/hi/*` | Hindi versions of the site |

## Project structure

```text
src/
  app/                 # English and Hindi pages, metadata, and route handlers
  components/          # Shared marketing site components
  lib/                 # Site content, SEO data, and route helpers
public/                # Favicon and site artwork
```

# Routes

Next.js App Router, route groups for English pages and a `[lang]` segment for Hindi content.

## English routes
- `/` — `src/app/(en)/page.tsx`; home, crew introduction, four how-it-works steps, interactive project explainer, project links, FAQ, waitlist, footer.
- `/how-it-works` — `src/app/(en)/how-it-works/page.tsx`; shared `Landing` component with product-specific content and explainer figure.
- `/explore` — `src/app/(en)/explore/page.tsx`
- `/features` — `src/app/(en)/features/page.tsx`
- `/resources` — `src/app/(en)/resources/page.tsx`
- `/resources/[slug]` — `src/app/(en)/resources/[slug]/page.tsx`
- `/find-cofounder`, `/find-developers`, `/startup-teams`, `/side-projects`, `/student-projects` — crew-focused local pages using `Landing`.
- `/about`, `/waitlist` — company and signup pages.
- `/api/waitlist` — `src/app/(en)/api/waitlist/route.ts`.

## Hindi routes
- `/hi` — `src/app/[lang]/page.tsx`
- `/hi/[...slug]` — `src/app/[lang]/[...slug]/page.tsx`
- `/hi/waitlist` via the Hindi slug route.

## Target dependency trees

### `/` (Home)
Entry: `src/app/(en)/page.tsx`
- `src/components/BrandMark.tsx`
- `src/components/NavDropdowns.tsx`
  - `src/components/LocaleSwitcher.tsx`
  - `src/lib/site.ts`
- `src/components/visuals/FeatureDroid.tsx`
- `src/components/WaitlistForm.tsx`
- `src/components/anatomy/CrewFlowFigure.tsx`
  - `src/components/anatomy/kit/react/draw.tsx`
  - `src/components/anatomy/crew-flow-art.tsx`
    - `src/components/anatomy/crew-flow-geometry.ts`
    - `src/components/anatomy/crew-flow-view.ts`
  - `src/components/anatomy/crew-flow-live.tsx`
    - `src/components/anatomy/kit/react/live.tsx`
    - `src/components/anatomy/crew-flow-model.ts`
- `src/components/ProjectCard.tsx`
- `src/components/SectionHeader.tsx`
- `src/components/SiteFooter.tsx`
- `src/lib/site.ts`
- `src/lib/faqs.ts`
- `src/app/(en)/homepage.css`

### `/how-it-works`
Entry: `src/app/(en)/how-it-works/page.tsx`
- `src/components/Landing.tsx`
  - `src/components/SiteHeader.tsx`
    - `src/components/BrandMark.tsx`
    - `src/components/NavDropdowns.tsx`
      - `src/components/LocaleSwitcher.tsx`
  - `src/components/SiteFooter.tsx`
  - `src/components/visuals/CrewAssembly.tsx`
  - `src/components/visuals/ProductScene.tsx`
  - `src/components/visuals/FeatureDroid.tsx`
  - `src/components/anatomy/CrewFlowFigure.tsx`
    - `src/components/anatomy/kit/react/draw.tsx`
    - `src/components/anatomy/crew-flow-art.tsx`
      - `src/components/anatomy/crew-flow-geometry.ts`
      - `src/components/anatomy/crew-flow-view.ts`
    - `src/components/anatomy/crew-flow-live.tsx`
      - `src/components/anatomy/kit/react/live.tsx`
      - `src/components/anatomy/crew-flow-model.ts`
  - `src/components/Icon.tsx`
  - `src/components/PageFaqSection.tsx`
  - `src/lib/site.ts`
  - `src/lib/faqs.ts`
  - `src/app/(en)/homepage.css`
- `src/app/(en)/layout.tsx`
- `src/app/(en)/globals.css`
# Extractable UI components

## Layout components

### SiteHeader
- Source: `src/components/SiteHeader.tsx`
- Category: layout
- Description: Site logo, grouped navigation, locale selector and waitlist CTA.
- Extractable props: `home` boolean (default false).
- Hardcoded: CrewLab brand, menu labels, styles.

### SiteFooter
- Source: `src/components/SiteFooter.tsx`
- Category: layout
- Description: Crew, Product and Company links, brand statement and social destinations.
- Extractable props: none; locale follows route.
- Hardcoded: copy, links, social destinations and wordmark.

## Basic components

### BrandMark
- Source: `src/components/BrandMark.tsx`
- Category: basic
- Description: Two-tone CrewLab geometric hexagon mark.
- Extractable props: none.
- Hardcoded: polygon geometry and theme color variables.

### CrewFlowFigure
- Source: `src/components/anatomy/CrewFlowFigure.tsx`
- Category: basic
- Description: Five-step workflow explainer, animated illustration, selectors and live description.
- Extractable props: none currently.
- Hardcoded: product copy, stage definitions, theme and figure.

### Button
- Source: `src/components/Button.tsx`
- Category: basic
- Description: Link or native button in primary and secondary variants.
- Extractable props: `variant`, `href` and standard HTML attributes.
- Hardcoded: style classes.
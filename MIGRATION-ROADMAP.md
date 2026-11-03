# Migration: Astro + Next.js

## Astro public publication
The root project is now an Astro static site. Existing HTML pages are retained under `legacy/` and rendered through Astro routes. Public URLs remain `/` and `/track-1.html` through `/track-8.html`. Existing CSS, scripts and images are copied into `public/` at their original paths.

The first conversion deliberately uses a compatibility layer: original page content and DOM-driven scripts are retained while Astro owns routing and builds the site. The lesson content is not yet rewritten into MDX collections; that should happen incrementally after route and behaviour checks.

## Next.js learner application
`apps/learn` is a separate Next.js App Router application. It contains an interactive 20-question A1 foundation quiz, four difficulty stages, immediate feedback and three real-life speaking missions. Question content is typed and kept separately from the UI.

This is a front-end prototype only. There is no authentication, database, student profile, server-side quiz record or cross-device progress saving yet. Do not describe local browser score as account progress.

## Next steps
1. Validate Astro preview: homepage, all eight original track URLs, images, translations, navigation, culture stories and audio hooks.
2. Convert lesson bodies into shared structured content with stable IDs, CEFR level, objective, explanation, examples, activities, answer key and speaking mission.
3. Deploy Next.js as a separate Vercel project with root directory `apps/learn`, then connect a learning subdomain.
4. Add authentication and database only after selecting a provider and defining student privacy, data access and deletion.
5. Add interactive formats: multiple choice, true/false, reorder, matching, short text, listening and spoken-response missions.

## Deployment
Root Vercel project builds Astro (`npm run build`, output `dist`). Create a second Vercel project from the same repository with root directory `apps/learn` and build command `npm run build`. Keep production on the old deployment until the Astro preview is fully checked.

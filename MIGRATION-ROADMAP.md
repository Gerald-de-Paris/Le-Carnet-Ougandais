# Le Carnet Ougandais — Product and Architecture Roadmap

## Direction

Le Carnet Ougandais should grow into two connected experiences:

1. **The public publication and learning library** — culture, stories, the Baguette Bulletin, public French lessons, audio and open practice.
2. **The learner platform** — student accounts, saved progress, quizzes, feedback, personal learning plans and (later) teacher tools.

Do not rebuild the same product twice. Give each experience the framework that fits its job, and share the course content and design language.

## Recommended architecture

### Public website: Astro

Astro will power the public-facing website at the main domain.

- Homepage, cultural archive, travel stories, biographies and editorial features.
- The Baguette Bulletin and its archive.
- Public track and lesson pages.
- Search-engine-friendly lesson and story pages.
- Small interactive components (audio controls, carousels, language toggle, public exercises) loaded only where needed.

Astro is a good fit because most of these pages are content-first. Its default HTML-first / islands approach avoids shipping a large JavaScript application to every reader. It also supports React components if a particular feature needs them.

### Student application: Next.js

Next.js will power the logged-in learning experience, initially at a separate subdomain such as `learn.le-carnet-ougandais.com` once a custom domain is available.

- Sign up, sign in and student profiles.
- Enrolment or course access.
- Quiz attempts, scores and feedback.
- Saved lesson progress and completion history.
- Personal dashboard and learning recommendations.
- Teacher/admin views in a later phase.

These features are application-like and require authenticated, user-specific data. Next.js is a sensible fit for that part of the product.

### Shared course content

Keep the actual teaching material independent of either framework.

Create a shared content package / folder with structured lesson records. Each lesson should have stable identifiers, level, title, learning objective, explanation, examples, audio text, practice tasks, answer guidance and translations where available.

- Astro reads this content to render public lesson pages.
- Next.js reads the same content to power student lessons and quizzes.
- Progress records refer to stable lesson and activity IDs, not HTML filenames.
- Avoid maintaining one copy of a lesson for Astro and a second copy for Next.js.

## Migration path from the current HTML site

This is an incremental migration. The existing production site stays live until each stage is reviewed.

### Stage 0 — Protect and audit (current)

- Keep the existing HTML/CSS/JavaScript site as the source of truth while the redesign is reviewed.
- Preserve all lesson text, images, audio, language switching, culture story scripts and bulletin behaviour.
- Record existing routes and asset paths before moving files.
- Check every lesson for grammar accuracy, CEFR progression, natural examples and useful speaking practice.

### Stage 1 — Move the public site into Astro

- Create an Astro app in a dedicated directory (for example `apps/site`).
- Migrate the homepage first, then shared layout/header/footer, then public sections.
- Move lesson text into structured Markdown/MDX or validated content collections.
- Migrate Tracks 1–8 one at a time; keep the old URLs working with redirects or matching routes.
- Port existing JavaScript features as small Astro islands or browser-native scripts.
- Test mobile layouts, bilingual navigation, audio playback, links, image loading, metadata and accessibility.
- Deploy a preview for review before changing the production domain.

### Stage 2 — Build the learning application in Next.js

Only start this after the public Astro site and shared course-content format are stable.

- Create a separate app (for example `apps/learn`) in the same repository.
- Add authentication and a database only when the account and progress model is designed.
- Build the learner dashboard, course enrolment, lesson completion, quiz attempts and progress history.
- Keep public lesson pages available without requiring an account.
- Protect personal progress and account data on the server; never put secrets in browser code.

### Stage 3 — Connect and grow

- Use a shared design system so the publication and learning app feel like one brand.
- Use stable content IDs so a student can move between public lesson pages and their personal learning area.
- Add teacher tools, feedback and analytics only when the core learning journey works reliably.

## Suggested repository structure when the migration begins

```text
apps/
  site/                 # Astro public website
  learn/                # Next.js authenticated learner platform
packages/
  course-content/       # Shared lessons, tracks, exercises and translations
  design-tokens/        # Shared colours, typography and spacing
  ui/                   # Optional shared components
public/
  images/               # Editorial images and cultural archive assets
  audio/                # Audio files, if stored in the repository
```

The exact structure can be adjusted after checking the current Vercel project settings and deployment configuration.

## Important decisions and safeguards

- **Do not run Astro and Next.js as competing frameworks for the same pages.** Astro owns the public publication; Next.js owns the signed-in learning application.
- **Do not migrate all tracks in one blind conversion.** Move and validate one track at a time.
- **Do not delete the original HTML pages or assets until the new pages pass review.**
- **Preserve URLs where possible.** If a route changes, add a redirect so existing links and search results do not break.
- **Do not invent or auto-generate educational content to fill gaps.** Keep the teacher's intent and verify French grammar, CEFR level and audio text.
- **Do not launch accounts before deciding what data is stored, who can see it, how passwords/authentication are handled and how students can request account deletion.**

## Current redesign scope

The current redesign branch is a visual and editorial first pass. It does not yet convert the repository to Astro or create a Next.js app. That separation is deliberate: first approve the design direction and improve the learning content; then migrate the stable material into the new architecture without losing working features.

## Official framework references

- Astro: https://docs.astro.build/concepts/why-astro/
- Astro content collections: https://docs.astro.build/en/guides/content-collections/
- Next.js Server and Client Components: https://nextjs.org/docs/app/getting-started/server-and-client-components
- Next.js authentication guide: https://nextjs.org/docs/app/guides/authentication

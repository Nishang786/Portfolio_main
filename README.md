# Nishang Lingalwar Portfolio

A premium dark-themed personal portfolio built with Next.js, React, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Folder architecture

```text
app/
  globals.css
  icon.svg
  layout.tsx
  loading.tsx
  page.tsx
components/
  portfolio/
    about.tsx
    achievements.tsx
    contact.tsx
    education.tsx
    experience.tsx
    footer.tsx
    hero.tsx
    portfolio-page.tsx
    project-card.tsx
    projects.tsx
    skills.tsx
  ui/
    ambient-background.tsx
    back-to-top.tsx
    cursor-glow.tsx
    floating-nav.tsx
    magnetic-button.tsx
    scroll-progress.tsx
    section-divider.tsx
    section-shell.tsx
data/
  portfolio.ts
lib/
  utils.ts
public/
  icon.svg
  og-image.svg
```

## Content and asset updates

- Update contact links and social URLs in `data/portfolio.ts`.
- Swap placeholder demo URLs in `data/portfolio.ts`.
- Replace `public/og-image.svg`, `public/icon.svg`, and `app/icon.svg` when final brand assets are ready.

## Notes

- The contact form is intentionally UI-only and ready to connect to Formspree, Resend, or a custom API route.
- The site uses data-driven arrays for sections so profile updates stay centralized.

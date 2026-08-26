# Harshith Babu Dangeti — Portfolio · "THE LOG"

A single-page developer portfolio themed as a running build/engineering log —
a nod to the streak-tracking algorithm in the Habit Tracker project. As you
scroll, the **Streak Rail** (right edge on desktop, top progress bar on
mobile) fills in one square per section, like a commit-graph for the page
itself.

## Stack
React 19 + Vite, Tailwind CSS, Framer Motion. Plain JavaScript/JSX — no
TypeScript, no Next.js. Fonts (Fraunces, Inter, JetBrains Mono) are
self-hosted via `@fontsource`, so there's no runtime Google Fonts request.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # outputs static dist/ — deployable to Netlify, Vercel,
                  # Cloudflare Pages, or GitHub Pages with zero server runtime
npm run preview  # preview the production build locally
```

## Edit content
All resume content lives in one place: `src/data/profile.js` — profile
summary, skills, experience, projects, certifications, education, and
contact links. Edit that file; the page re-renders automatically.

## Change the accent color
Colors are defined once in `tailwind.config.js` under `theme.extend.colors`.
Swap `ember` (#E8763D) for a different primary accent and it propagates
everywhere. `streak` (#4FB286) is reserved for "completed/shipped" states —
keep it that way for the log metaphor to hold up.

## Structure
```
src/
├─ data/profile.js         all resume content, single source of truth
├─ hooks/useEntryProgress.js   IntersectionObserver-driven scroll tracking
├─ components/
│  ├─ StreakRail.jsx       signature element — the log's progress rail
│  ├─ Grain.jsx            fixed film-grain texture overlay
│  ├─ EntryHeader.jsx      shared "/path · entry NN" section header
│  ├─ Reveal.jsx           scroll-triggered fade/slide wrapper
│  └─ Header/About/Stack/Shipped/Builds/Compiled/Origins/Connect.jsx
│                          the eight log entries, in order
├─ App.jsx
└─ main.jsx
public/
├─ Harshith_Babu_Dangeti_Resume.pdf   linked from the Connect section
├─ favicon.svg, robots.txt, sitemap.xml
```

## Deploy
`npm run build` produces a static `dist/` folder. Drag it into Netlify, or
connect the repo to Vercel/Cloudflare Pages with build command `npm run
build` and output directory `dist`.

## Notes
- Respects `prefers-reduced-motion`: all transitions collapse to near-zero
  duration and scroll-behavior falls back to instant.
- The Streak Rail is `aria-hidden`-safe where decorative, with a visually
  hidden live region announcing progress for screen readers, and every rail
  square is a real focusable `<button>` that jumps to its section.
- Content source: your resume PDF — every bullet, cert, and stack item is on
  the page; nothing was dropped or invented.

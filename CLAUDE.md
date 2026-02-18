# CLAUDE.md

## Project Overview

Professional portfolio website for Jonathan Bruno (creative director / video production leader). Static site deployed via GitHub Pages to **www.jonathan-bruno.com**.

## Tech Stack

- **HTML5** — Semantic markup, two pages: `index.html` (main portfolio) and `cv.html` (cinematography credits)
- **CSS3** — Custom properties, Flexbox, Grid, responsive breakpoints (900px, 768px, 480px), `clamp()` fluid sizing
- **Vanilla JavaScript (ES6+)** — No frameworks or libraries
- **Google Fonts** — DM Sans, DM Serif Display
- **Video Embeds** — Vimeo and YouTube iframes

## Project Structure

```
├── index.html                 # Main portfolio page (~2,600 lines, includes all CSS/JS inline)
├── cv.html                    # Dedicated cinematography credits page
├── CNAME                      # GitHub Pages custom domain config
├── og-image.png               # Open Graph social sharing image
├── Jonathan_Bruno_Resume.docx # Resume (Word)
├── Jonathan_Bruno_Resume.pdf  # Resume (PDF)
├── plan.md                    # CV feature implementation plan
└── README.md
```

## Key Conventions

- **Zero build step** — No package.json, bundler, linter, or test framework. All CSS and JS are inline within the HTML files.
- **CSS custom properties** define the color system: `--color-bg`, `--color-bg-dark`, `--color-accent` (#8B6914 gold), plus text hierarchy variables.
- **Max content width:** 860px. Section padding uses `clamp(80px, 10vw, 140px)`.
- **Accessibility panel** built in (bottom-right corner) — high contrast, large text, reduce motion. Preferences persist via `localStorage`.
- **Responsive design** — Mobile hamburger menu, fluid typography, breakpoint-driven layouts.

## Development & Deployment

- No install or build commands needed.
- **Deploy:** Push to `main` branch — GitHub Pages serves the static files automatically.
- To preview locally, open `index.html` in a browser (or use any static file server).

## Key JavaScript Patterns

- `toggleCard(cardId)` — Expand/collapse work cards
- `openReel()` / `closeReel()` — Modal video player
- `toggleCredits()` — Expand/collapse credits preview on main page
- Password-gated content section (SHA-256 validation)
- `Intersection Observer` for scroll-triggered animations
- `sessionStorage` for dismissed banners, `localStorage` for a11y preferences

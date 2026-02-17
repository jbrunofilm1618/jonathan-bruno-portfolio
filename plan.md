# Cinematography CV — Implementation Plan

## Overview
Build a cinematography credits section that:
1. **Expands inline** beneath the "View Cinematography Reel" button in the Foundation section
2. **Links to a dedicated `/cv.html` page** with the full, detailed credits

Uses **split-layout cards** (image left, details right) with placeholder image slots the user will fill later.

---

## Project Cards — Ranked by Authority

| # | Project | Role | Key Authority Signal |
|---|---------|------|---------------------|
| 1 | The Last of Us Part II | Perf. Capture Video Lead | 326 GOTY awards |
| 2 | God of War (2018) | Perf. Capture Video Lead | GOTY at Game Awards, BAFTA, DICE |
| 3 | Uncharted 4: A Thief's End | Perf. Capture Video Lead | GOTY at BAFTA & SXSW |
| 4 | Carne y Arena | Perf. Capture Video Lead | Special Achievement Oscar |
| 5 | Counterpart (Starz) | Camera Op / Title Sequence DP | Emmy — Best Main Title Design |
| 6 | Bone Tomahawk | A Camera Operator | Saturn Award nom, cult classic |
| 7 | Love S2 (Netflix) | 2nd Unit DP | 94% RT, Judd Apatow |

---

## Step 1: Add CSS for the split-layout credit cards

**File:** `index.html` (in the `<style>` block)

New classes:
- `.credits-expand-section` — expandable container below the reel button
- `.credit-card` — split-layout card (flexbox: image left, details right)
- `.credit-card-image` — placeholder image area (aspect ratio container, background placeholder)
- `.credit-card-details` — right side: project name, role, award badges
- `.award-badge` — small pill/tag showing key award (e.g. "Oscar", "326 GOTY Awards")
- `.credits-expand-toggle` — button to expand/collapse the preview
- Responsive: stack vertically on mobile (≤768px)

---

## Step 2: Add the expandable credits preview to Foundation section

**File:** `index.html` (Foundation section, after the buttons area)

- Add a "View Credits ↓" toggle button next to or below the existing buttons
- Add a `.credits-expand-section` div (hidden by default) containing:
  - Top 4 projects as split-layout cards (Tier 1 + Tier 2: TLOU2, GoW, Uncharted 4, Carne y Arena)
  - A "View Full Credits →" link to `cv.html`
- Each card has:
  - Left: `.credit-card-image` with a placeholder `<div>` (gray with project name text, ready for `background-image` swap)
  - Right: Project title, role, brief description, award badges
- JavaScript: `toggleCredits()` function following the existing `toggleCard()` pattern

---

## Step 3: Create the dedicated CV page (`cv.html`)

**New file:** `cv.html`

- Inherits the same `<head>` styles from `index.html` (shared CSS variables, fonts, base styles)
- Simple page structure:
  - Header with "Jonathan Bruno — Cinematography Credits" + back link to `index.html#foundation`
  - All 7 projects as full split-layout cards with more detail
  - Each card includes: image placeholder, project title, role, year, director/studio, description, award badges
  - Footer with back-to-portfolio link
- Reuses CSS from Step 1 (duplicated in cv.html's own `<style>` or linked)

---

## Step 4: Wire up navigation between inline preview and CV page

- The "View Full Credits →" link in the expandable section points to `cv.html`
- `cv.html` has a back link to `index.html#foundation`
- Update the Foundation section's flow so the expand button feels natural next to the reel button

---

## Step 5: Commit and push

- Commit all changes to branch `claude/analyze-site-code-jnveJ`
- Push to remote

---

## Image Placeholder Strategy

Each card image area will use:
```html
<div class="credit-card-image" data-project="tlou2">
  <span class="image-placeholder-label">The Last of Us Part II</span>
</div>
```
Styled with a warm gray background and the project name centered. When the user provides images, they just add `style="background-image: url('images/tlou2.jpg')"` or swap in an `<img>` tag.

---

## Design Notes
- Award badges use the existing `--color-accent` (#8B6914) for a gold/prestige feel
- Cards use `--color-bg-warm` for subtle background contrast
- Hover state: slight lift + shadow (consistent with existing `.work-card` hover)
- Typography: `--font-display` for titles, `--font-body` for details
- Accessibility: all images will have alt text, expand/collapse is keyboard-accessible

---
name: design-taste-frontend
description: Anti-slop frontend skill for landing pages, portfolios, and redesigns. The agent reads the brief, infers the right design direction, and ships interfaces that do not look templated. Real design systems when applicable, audit-first on redesigns, strict pre-flight check. Includes custom protections for TicketCard SVG geometry and dynamic DOM height measurement.
---

# tasteskill: Anti-Slop Frontend Skill (Data Analyst Portfolio Edition)

> Landing pages, portfolios, and redesigns. Not dashboards, not data tables, not multi-step product UI.
> Every rule below is **contextual**. None of it fires automatically. First read the brief, then pull only what fits.

---

## 0. BRIEF INFERENCE (Read the Room Before Anything Else)

Before touching code or tweaking dials, **infer what the user actually wants**. Most LLM design output is bad because the model jumps to a default aesthetic instead of reading the room.

### 0.A Read these signals first
1. **Page kind** - landing (SaaS / consumer / agency / event), portfolio (dev / data analyst / creative studio), redesign (preserve vs overhaul), editorial / blog.
2. **Vibe words** the user used - "minimalist", "calm", "Linear-style", "Awwwards", "brutalist", "premium consumer", "Apple-y", "playful", "serious B2B", "editorial", "agency-y", "glassy", "dark tech".
3. **Reference signals** - URLs they linked, screenshots they pasted, products they named, brands they're competing with.
4. **Audience** - B2B procurement panel vs. design-conscious consumer vs. recruiter scanning a portfolio. The audience picks the aesthetic, not your taste.
5. **Brand assets that already exist** - logo, color, type, photography. For redesigns, these are starting material, not optional input (see Section 11).
6. **Quiet constraints** - accessibility-first audiences, public-sector, regulated industries, trust-first commerce, kids' products. These constraints OVERRIDE aesthetic preference.

### 0.B Output a one-line "Design Read" before generating
Before any code, state in one line: **"Reading this as: <page kind> for <audience>, with a <vibe> language, leaning toward <design system or aesthetic family>."**

Example reads:
- *"Reading this as: Data Analyst portfolio for recruiters & hiring managers, with a Linear-style minimalist language, leaning toward Tailwind utilities + Geist + restrained motion."*
- *"Reading this as: solo designer portfolio for hiring managers, with an editorial / kinetic-type language, leaning toward native CSS + scroll-driven animation + custom typography."*

### 0.C If the brief is ambiguous, ask one question, do not guess
Ask exactly **one** clarifying question - never a multi-question dump - and only when the design read genuinely diverges.

### 0.D Anti-Default Discipline
Do not default to: AI-purple gradients, centered hero over dark mesh, three equal feature cards, generic glassmorphism on everything, infinite-loop micro-animations everywhere, Inter + slate-900. These are the LLM defaults. Reach past them deliberately based on the design read.

---

## 1. THE THREE DIALS (Core Configuration)

After the design read, set three dials:

* **`DESIGN_VARIANCE: 7`** - 1 = Perfect Symmetry, 10 = Artsy Chaos
* **`MOTION_INTENSITY: 5`** - 1 = Static, 10 = Cinematic / Physics
* **`VISUAL_DENSITY: 4`** - 1 = Art Gallery / Airy, 10 = Cockpit / Packed Data

---

## 2. BRIEF → DESIGN SYSTEM MAP

Pick the right foundation. For this portfolio project, Tailwind CSS v4 / Vanilla CSS + Framer Motion is the primary system.

---

## 3. DEFAULT ARCHITECTURE & CONVENTIONS

### 3.A Stack
* **Framework:** Next.js (App Router). Server Components (RSC) by default; wrap Framer Motion components in `"use client"`.
* **Styling:** Tailwind CSS + Vanilla CSS tokens.
* **Animation:** Framer Motion (`framer-motion`). Use `LazyMotion` (`features={domAnimation}`) at root level to minimize bundle size.
* **Icons:** `@phosphor-icons/react` or `@radix-ui/react-icons`.

### 3.B State & Performance
* Local `useState` / `useRef` for isolated component state.
* Use `useRef` and `element.scrollHeight` for DOM measurements instead of static character estimations.
* NEVER use `useState` to track high-frequency scroll or cursor values.

---

## 4. DESIGN ENGINEERING DIRECTIVES & TICKET CARD PROTECTIONS

### 4.1 Typography
* Display / Headlines: `font-black` or `font-semibold` with negative tracking (`tracking-tight`).
* Sans Font: Geist Sans, Outfit, or system stack.
* Em-Dash Ban: **ZERO em-dashes (`—`) or en-dashes (`–`)** allowed anywhere in visible copy, titles, tags, markdown descriptions, alt-text, or button labels. Use standard hyphens (`-`) or restructure text.

### 4.2 Color Calibration
* Primary neutral: Slate / Zinc palette (`#023047`, `#0F172A`, `#E5E7EB`, `#F8FAFC`).
* Accent highlights: Amber / Orange (`#FB8500`), Warm Grey (`#E5E7EB`).
* Lock theme per page; avoid mid-page light/dark flips.

### 4.3 Custom Ticket Card & Vector Geometry Protections
* **Fixed Aspect Ratio & Vector Geometry**: Never allow card containers to stretch vertically in a way that distorts SVG notch cut-outs or perforated dot lines.
* **Dynamic DOM scrollHeight Measurement**: Always use React `useRef` and `element.scrollHeight` DOM measurement for text descriptions, multi-line course lists, and tag containers.
* **Title & Tag Line-Wrap Inspection**:
  - Measure `titleRef.current.offsetHeight > 32px` to dynamically detect multi-line title wrapping.
  - Measure `tagsListRef.current.children` using `offsetTop === firstLineTop` to compute hidden tag counts responsive to viewport size.
* **Height Delta Equivalence ($\Delta H_{parent} \equiv \Delta H_{container}$)**: When expanding collapsible containers, parent card height increment MUST equal inner container expansion delta.
* **Flex-Shrink Protection**: Apply `shrink-0` explicitly to child elements inside fixed-height flex columns.
* **Snappy Height Expansion & Clean Collapse**: Animate expansion using Framer Motion spring physics (`stiffness: 300, damping: 28`). When collapsing, use a precise ease-in-out duration curve (`duration: 0.22s, ease: [0.4, 0, 0.2, 1]`).

### 4.4 Hero Discipline & Anti-Slop Bans
* **Hero Viewport Fit**: Hero headline max 2 lines on desktop; subtext max 20 words across 4 lines. Primary CTA visible without scroll.
* **Navbar Cap**: Single line on desktop, max height 80px.
* **Anti-Slop Ban System**:
  - No `00 / INDEX` section eyebrows (max 1 eyebrow per 3 sections).
  - No version labels in hero (`V0.6`, `BETA`).
  - No div-based fake dashboard or code editor screenshots.
  - No 3-equal-card feature rows; use responsive asymmetric grids or ticket card columns.
  - No `window.addEventListener('scroll')` in React components.

---

## 5. HARD PRE-FLIGHT CHECKLIST (Section 14)

Before declaring any frontend change complete, audit the code:
1. **Em-Dash Audit**: Zero `—` or `–` characters.
2. **Ticket Geometry Audit**: SVG notches & perforated dot paths unbroken.
3. **DOM ScrollHeight Audit**: Collapsible height expansion exact match delta.
4. **Contrast Audit**: All text and button contrast meets WCAG AA (min 4.5:1).
5. **Build Audit**: `npx tsc --noEmit` runs with 0 errors.

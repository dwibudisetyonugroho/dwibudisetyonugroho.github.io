# Project Rules

> Detailed math formulas, dynamic height calculations, and SVG notch geometry specs are documented in [.agents/CARD_SPEC.md](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/.agents/CARD_SPEC.md).
> A 1-page codebase map of routes, data modules, and components is documented in [.agents/INDEX.md](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/.agents/INDEX.md).

## Card Isolation Rules
- **Homepage vs Experimentation Page**:
  - The home page [src/app/page.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/app/page.tsx) must always use [TicketCard](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/TicketCard.tsx).
  - The experimentation page [src/app/ticket/page.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/app/ticket/page.tsx) must always use [TicketCardExperiment](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/TicketCardExperiment.tsx) and [TicketCardExperiment2](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/TicketCardExperiment2.tsx).
  - **Independence of Experimental Cards**: Keep experimental cards completely decoupled. Never share imports or merge implementations between experimental cards.
- **Unified Profile Ticket Engine**:
  - All candidate profile cards (**Education**, **Certification**, **Project Portfolio**, and **Professional Experience**) MUST be rendered using the master [TicketCardEducation](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/TicketCardEducation.tsx) component to guarantee 100% identical SVG notch geometry, perforated lines, paper noise, and 3D shadow depth across all sections.

## Git & AI Ignore Rules
- **Ignore Experiment Files**:
  - Do not commit or push `/src/app/ticket/`, `TicketCardExperiment.tsx`, or `TicketCardExperiment2.tsx` to GitHub. Maintain them in [.gitignore](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/.gitignore).
- **AI Context & Token Optimization (.antigravityignore & .agents/INDEX.md)**:
  - Standardize on [.antigravityignore](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/.antigravityignore) as the single source of truth for AI search & context indexing (do not re-create legacy `.aiignore` or `.geminiignore` files).
  - Maintain exclusions for heavy auto-generated files using recursive globs (`public/**/*`, `package-lock.json`, `*.tsbuildinfo`, `.next/`, `.next-dev/`, `out/`, `*.log`, `*.code-workspace`) to save context tokens.
  - Keep `.agents/` project rules and experimental ticket files (`/src/app/ticket/`, `TicketCardExperiment*.tsx`) **unignored** in `.antigravityignore` so agents retain full access for development and compliance.
  - **Architecture Index Maintenance**: Every newly added route, data module, UI component, background provider, or utility file MUST be registered in [.agents/INDEX.md](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/.agents/INDEX.md) to preserve fast 1-page AI navigation.
  - **Ultra-Concise Responses**: AI agent text outputs MUST remain short, direct, and zero-fluff to minimize response token consumption across sessions.



## Core Layout & Resizing Principles
- **Fixed Ticket Aspect Ratio & Vector Geometry**: Never allow card containers to stretch vertically in a way that distorts notch cut-outs or perforated dot lines.
- **Dynamic DOM scrollHeight Measurement**: Always use React `useRef` and `element.scrollHeight` DOM measurement for text descriptions, multi-line course lists, and tag containers to prevent line-wrap calculation errors.
- **Strict Dynamic Card Height & 1:1 Padding Symmetry**: Never apply static fallback base heights (e.g. `360px`) or hardcoded padding budgets (e.g. `160px`) inside `TicketCardEducation`. Card height MUST be computed dynamically from the exact sum of measured content elements, internal flex gaps, and vertical padding (`64px` desktop / `48px` mobile) so top, bottom, left, and right outer paddings remain 100% symmetrical at 32px (desktop) / 24px (mobile) without leaving residual empty space above perforated divider lines.
- **Conditional Flex Wrappers & Zero-Fluff Gaps**: Never render empty `<div ref={...}>` or unused section wrappers inside `flex flex-col gap-*` containers. Always conditionally render optional sections (`hasDescription && (...)`, `footerHeight > 0 && (...)`, `!hideSkillHeader && (...)`) to prevent Tailwind flex gaps from creating asymmetric vertical offsets.
- **Tag-Only Card Symmetry & Unconstrained Height**: On cards without descriptions or bottom notch action links (`hideSkillHeader = true`), apply `justify-center` on the middle flex container and `height: 'auto'` on tag motion wrappers to enforce exact 1:1 outer padding symmetry (32px desktop / 24px mobile) above, below, left, and right of the tag pills.
- **Dynamic DOM Inspection for Titles & Tag Arrays**:
  - Do not rely solely on static character length thresholds (e.g. `title.length > 52`) or hardcoded tag math (`tags.length - 4`).
  - **Title Line-Wrap Inspection**: Use `titleRef` and measure `titleRef.current.offsetHeight > 32px` to dynamically detect multi-line title wrapping.
  - **Tag `+N MORE` Calculation**: Measure `tagsListRef.current.children` using `offsetTop === firstLineTop` to compute `hiddenTagsCount = tagElements.length - firstLineCount` for responsive, viewport-accurate hidden tag counts.
- **Height Delta Equivalence ($\Delta H_{parent} \equiv \Delta H_{container}$)**: When expanding collapsible containers, parent card height increment MUST equal the inner container expansion delta.
- **Flex-Shrink Protection**: Apply `shrink-0` explicitly to child elements inside fixed-height flex columns.
- **Snappy Height Expansion & Clean Collapse**: Animate height expansion using Framer Motion spring physics (`stiffness: 300, damping: 28`). When collapsing, use a precise ease-in-out duration curve (`duration: 0.22s, ease: [0.4, 0, 0.2, 1]`) instead of spring physics to prevent sub-pixel delta snapping at rest.
- **Accordion Max-Height Bounding**: Cap long expandable content (e.g., detailed thesis breakdowns) at `max-h-[380px]` with `overflow-y-auto ticket-scrollbar` to maintain compact, budget-friendly card heights.
- **Outer vs Internal Spacing Hierarchy**: Outer side/bottom padding must be equal ($32\text{px}$ desktop / $24\text{px}$ mobile). Internal flex gaps must be half of outer padding ($16\text{px}$ desktop / $12\text{px}$ mobile).
- **Side-by-Side Height Alignment**: When rendering multiple `TicketCard` items side-by-side in a row or grid, pass an explicit `baseHeight` prop (e.g., `baseHeight={208}`) equalized to the taller card's target height to guarantee perfect horizontal alignment across columns.
- **Instant Step-Blinking Animations**: When instant color switching is required in Framer Motion components, use discrete keyframes with explicit `times` step arrays (e.g. `animate={{ color: ['#023047', '#023047', '#FB8500', '#FB8500'] }}` with `times: [0, 0.4999, 0.5, 1]` and `ease: 'linear'`).

## Component Decoupling & Interactive Links
- **Direct Data Barrel Imports & Dataset Deduplication**: Import all portfolio datasets (`PROJECTS`, `CERTIFICATES`, `INTERNSHIPS`, `DETAILED_SKILLS`, `ABOUT_DATA`) directly from `@/data`. Avoid creating intermediate re-export headers (e.g., `portfolio-data.ts`). Keep data structures clean and deduplicated by storing single flat arrays (`skills`, `technologies`, `methodologies`) to minimize AI context bloat.
- **Single Toast System Standard**: Standardize strictly on `sonner` for toast notifications (`import { toast } from 'sonner'`). Do not add secondary toast libraries (such as Radix UI Toast).
- **Explicit Card Props Decoupling & Skill Tag Fallback**: Pass explicit data props to card instances rather than relying on component-level fallbacks. When passing skills/tags to ticket cards, fall back to `cert.skills || (cert.skillCategories ? Object.values(cert.skillCategories).flat() : [])` to prevent empty tag containers.
- **Formatted Description & Thesis Project Accordion Props**: Parse multiline description strings into formatted elements (`**Header**` bold titles, `•` accent bullet lists, `<strong>` inline bold). Forward `projectTitle` and `projectDetails` props to `TicketCardEducation` to render expandable thesis/project accordions.
- **Unified Action Links**: Wrap link labels, icons, and logos together in a single `<motion.a>` element with `href`, `target="_blank"`, and `rel="noopener noreferrer"` so the entire block triggers as a unified link target.
- **Instant Hover Feedback & Static Buttons**: Use `.item-hover` (0s duration color transitions) for card buttons and badges. Avoid scaling button dimensions on hover (`scale: 1.0`) or click.
- **Optical Logo Size Balancing**: Apply custom `headerLogoStyle` and `officialLogoStyle` props to optically balance circular/emblem logos (e.g., AKPRIND ~42px/26px) against wide horizontal logos (e.g., Coursera ~19px, DataCamp ~30px/20px) so visual surface area is equal across cards.
- **Optical Badge Aspect Ratio Alignment**: Nav and card badge containers MUST use explicit aspect-ratio container styling (`aspect-[196/240]` for DataCamp portrait badges vs `aspect-square` for 1:1 badges like Google/Microsoft/IBM) so internal PNG canvas padding never distorts visual gap uniformity.
- **Text Selection Scoping**: Apply `select-text` to body text/titles and `select-none` to UI action buttons.

## Top Navigation, Logo & Card Registration Rules
- **Universal Navigation Component Standard**: Sub-pages (such as `/projects/`) MUST use the master `Navigation` component to guarantee 100% identical top navbar geometry (`top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6`), logo alignment, certification badges, and `Connect` modal. Page-specific routes must dynamically supply custom navigation items (`PROJECT_NAVIGATION_ITEMS`) and section scroll observers directly within `Navigation`.
- **Logo Container Isolation**: `AnimatedLogo` must be rendered inside a fixed-width container (`w-[108px] shrink-0`) to prevent text changes from shifting neighboring nav links. Bracket hugging (`['` and `']`) around cycling words (`DBS`, `have`, `a`, `good`, `day`) must use an inner `<motion.div layout>` transition confined strictly within the fixed logo box.
- **Navbar Geometry & Spacing**: The top navbar position must use full horizontal width with identical top, left, and right outer gaps (`top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6`) and squarish corners (`rounded-2xl`). Inner flex gaps around action buttons and between badge icons must maintain uniform $8\text{px}$ spacing (`gap-2`, `pr-2`, `py-2`).
- **Mandatory Card Wrapper `id={item.id}`**: Every candidate profile card in `CertificatesSection`, `CertificationsSection`, `ProjectsSection`, and `InternshipsSection` MUST be wrapped in `<div key={item.id} id={item.id} className="scroll-mt-24 w-full">`.
- **Registered Sub-ID Scroll Tracking**: Navigation scroll observers MUST filter `querySelectorAll('[id]')` strictly against `validSubIds` matching registered section dataset items to trigger orange progress indicator dots accurately without being confused by internal SVG clipPaths or accordion IDs.
- **Dropdown Hover Bridge & Fast Dismissal**: Floating navigation dropdowns positioned at `top-16` must include an invisible top pseudo-element (`before:content-[''] before:absolute before:-top-4 before:h-4`) to bridge cursor movement without visual overlap. Mouse-leave timers (`handleMouseLeaveNav`) and exit transition durations must remain snappy ($\le 80\text{ms}$).

## Parallax & Page Background Rules
- **Section Transparency**: Use `bg-transparent` on `<section>` elements when using page-level parallax backgrounds.
- **Full-Coverage Spring Parallax**: When using page-level parallax background images, wrap `scrollYProgress` with `useSpring` inertia physics (`stiffness: 80, damping: 25`) for liquid-smooth motion. Map `scrollYProgress` dynamically across vertical `backgroundPosition` (`center 0%` at top to `center 100%` at bottom) to ensure the background pans smoothly from top to bottom edge without cropping the image.
- **Short Page Static Backgrounds**: For short, single-screen landing or portal pages without vertical scrolling (e.g., home page `/`), disable background parallax (`disableParallax={true}`) and align the texture statically to the top (`backgroundPosition="center top"`).

## Domain, Metadata & Static Export Rules
- **Dual-Domain Resolution**: Maintain primary domain `https://budinugroho.com` and fallback `https://dwibudisetyonugroho.github.io` in `site-config.ts`.
- **Static Export Metadata**: All metadata route generators (`sitemap.ts`, `manifest.ts`) MUST include `export const dynamic = 'force-static'`.
- **Strict Build Validation**: Ensure `npx tsc --noEmit` and build checks pass without errors.

## Agent Configuration & Hygiene
- **Dot-Folder Placement**: Maintain agent instructions inside `.agents/` (`AGENTS.md`, `CARD_SPEC.md`, `INDEX.md`). Keep the project root clean.
- **Installed Taste & Utility Skills (`.agents/skills/`)**:
  - [Taste Skill v2 Anti-Slop](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/.agents/skills/taste-skill/SKILL.md): Core anti-slop rules, 3 locks, hero discipline, zero em-dashes, and TicketCard vector geometry protections.
  - [Full Output Enforcement Skill](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/.agents/skills/output-skill/SKILL.md): Overrides LLM truncation, bans placeholders (`// ...`, `TODO`), and enforces complete production code output.
  - [AI Context & Token Optimization Skill](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/.agents/skills/context-optimization-skill/SKILL.md): Index-first navigation, strict ignore enforcement, targeted sliced file viewing, surgical diff edits, and zero-waste token protocols.


## Asset & Package Optimization Rules
- **Background & Image Compression**: Keep large hero/parallax background images in WebP format with target file sizes below 500 KB (using `sharp` or WebP tools). Store company/certification logos as optimized WebP assets (< 20 KB) or vector SVGs.
- **Dependency Hygiene**: Do not retain unused NPM packages in `package.json`. Periodically audit and purge unused dependencies to keep builds fast and clean.
- **Framer Motion Performance**: Wrap root layout animations with `LazyMotion` (`features={domAnimation}`) to minimize initial Framer Motion bundle size overhead.


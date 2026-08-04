# Project Architecture Index

This index provides a fast 1-page map of the codebase for AI agents to locate components, data, pages, and config files without scanning the entire file tree.

---

## 1. Routes & Pages (`src/app/`)
- [src/app/page.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/app/page.tsx): Main homepage layout using stable `TicketCard`.
- [src/app/profile/page.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/app/profile/page.tsx): Comprehensive candidate profile page using master `TicketCardEducation` engine.
- [src/app/projects/page.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/app/projects/page.tsx): Standalone projects gallery page with filtering.
- [src/app/ticket/page.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/app/ticket/page.tsx): Experimentation sandbox route using `TicketCardExperiment` and `TicketCardExperiment2` (Git ignored).
- [src/app/not-found.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/app/not-found.tsx): Custom 404 page.
- [src/app/layout.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/app/layout.tsx): Root layout shell with Google Fonts, metadata, and `MotionProvider`.
- [src/app/globals.css](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/app/globals.css): Custom scrollbars, design tokens, and global Tailwind styles.
- [src/app/sitemap.ts](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/app/sitemap.ts): Static sitemap generator (`export const dynamic = 'force-static'`).
- [src/app/manifest.ts](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/app/manifest.ts): Web app manifest generator (`export const dynamic = 'force-static'`).

---

## 2. Decoupled Data Modules (`src/data/`)
- [src/data/certificates.ts](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/data/certificates.ts): `CERTIFICATES` (Education) & `CERTIFICATIONS` datasets (~15 KB).
- [src/data/projects.ts](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/data/projects.ts): `PROJECTS` portfolio dataset (~14 KB).
- [src/data/skills.ts](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/data/skills.ts): Technical skills data & `DetailedSkill` interface (~11 KB).
- [src/data/experience.ts](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/data/experience.ts): `INTERNSHIPS`, `ABOUT_DATA`, `NAVIGATION_ITEMS`, `CONTACT_INFO`, `getDropdownItems` (~10 KB).
- [src/data/index.ts](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/data/index.ts): Central re-export barrel file (`@/data`).

---

## 3. UI Component Hierarchy (`src/components/`)
- **Ticket Card Implementations** (`src/components/portfolio/`):
  - [TicketCard.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/TicketCard.tsx): Main production card with SVG notches & perforated lines.
  - [TicketCardEducation.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/TicketCardEducation.tsx): Master ticket card engine for profile sections (Education, Certifications, Projects, Internships).
  - [TicketCardExperiment.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/TicketCardExperiment.tsx): Experimental card 1 (Git ignored).
  - [TicketCardExperiment2.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/TicketCardExperiment2.tsx): Experimental card 2 (Git ignored).
- **Navigation & Shell Components**:
  - [Navigation.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/Navigation.tsx): Main navigation bar shell (~9 KB).
  - [NavigationDropdown.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/NavigationDropdown.tsx): Sub-links & connect modal dropdown (~3 KB).
  - [ProjectsNavigation.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/ProjectsNavigation.tsx): Navigation header for projects view.
  - [MobileNav.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/MobileNav.tsx): Mobile drawer navigation (~4 KB).
  - [AnimatedLogo.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/AnimatedLogo.tsx): Fixed-width cycling logo (`w-[108px]`).
  - [AnimatedNavLink.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/AnimatedNavLink.tsx): Smooth interactive link item.
- **Page Section Renderers**:
  - [CertificatesSection.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/CertificatesSection.tsx): Dynamic Education ticket cards section.
  - [CertificationsSection.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/CertificationsSection.tsx): Dynamic Certifications ticket cards section.
  - [ProjectsSection.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/ProjectsSection.tsx): Renders Projects gallery grid.
  - [InternshipsSection.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/InternshipsSection.tsx): Renders Professional Experience & Internships.
  - [SkillsSection.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/SkillsSection.tsx) & [SkillsList.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/SkillsList.tsx): Skill categories & pill renderers.
  - [SkillCard.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/SkillCard.tsx): Technical skill metrics card.
  - [HeroSection.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/HeroSection.tsx): Portfolio hero banner & metrics.
  - [ContactSection.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/ContactSection.tsx): Contact modal section.
  - [Footer.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/Footer.tsx): Universal page footer.
- **Backgrounds, Providers & Utilities**:
  - [ParallaxBackground.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/ParallaxBackground.tsx): Spring-based scroll background parallax.
  - [DataAnalyticsBackground.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/DataAnalyticsBackground.tsx): Interactive SVG analytics pattern overlay.
  - [FadeInSection.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/FadeInSection.tsx): Scroll animation wrapper.
  - [MotionProvider.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/portfolio/MotionProvider.tsx): Framer Motion `LazyMotion` provider.
- **UI Base Primitives** (`src/components/ui/`):
  - [button.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/ui/button.tsx): Button variant primitive.
  - [card.tsx](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/components/ui/card.tsx): Card container primitive.

---

## 4. Configuration & Rules (`.agents/` & `src/lib/`)
- [.agents/AGENTS.md](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/.agents/AGENTS.md): Core AI rules & guidelines (~3 KB).
- [.agents/CARD_SPEC.md](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/.agents/CARD_SPEC.md): Math formulas & SVG geometry specs for ticket cards.
- [.agents/INDEX.md](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/.agents/INDEX.md): Fast 1-page codebase map for AI agents (this file).
- [.agents/skills/](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/.agents/skills/): Installed Skills (`taste-skill`, `output-skill`, `context-optimization-skill`).
- [.antigravityignore](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/.antigravityignore): Primary source of truth for AI search & indexing filters.
- [src/lib/ticket-geometry.ts](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/lib/ticket-geometry.ts): Shared vector SVG notch path math & clipPath string constants.
- [src/lib/site-config.ts](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/lib/site-config.ts): Dual-domain resolution & site metadata.
- [src/lib/animations.ts](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/lib/animations.ts): Framer Motion physics & transition constants.
- [src/lib/utils.ts](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/src/lib/utils.ts): Tailwind CSS class merger utility.


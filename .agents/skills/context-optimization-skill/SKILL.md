---
name: ai-context-optimization
description: Token and context window optimization skill for this project. Instructs AI agents to navigate via 1-page index (.agents/INDEX.md), strictly respect ignore rules (.antigravityignore), execute targeted sliced file reads, apply surgical line-range diff edits, avoid full-tree scans, and maintain zero-waste token efficiency.
---

# AI Context & Token Optimization Skill

> **Goal**: Maximize AI response speed, minimize LLM context bloat, and reduce API token costs when working on this portfolio project.
> Every AI agent operating on this codebase MUST follow these token-efficiency protocols.

---

## 1. Index-First Navigation (1,000 Tokens vs 100,000 Tokens)

Before attempting broad file searches (`grep_search`) or workspace-wide file listings (`list_dir`), **always read [.agents/INDEX.md](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/.agents/INDEX.md) first**.

* **Why**: Reading the 1-page architecture index provides instant exact file paths for pages, datasets, UI components, background FX, and configuration utilities in `~1,000` tokens, avoiding full-tree exploration passes that cost `50,000+` tokens.
* **Protocol**:
  1. Check `.agents/INDEX.md` to map target symbols to exact file paths.
  2. Open only the specific file needed using `view_file` with precise line bounds (`StartLine` and `EndLine`).
  3. If a new component or route is added, update `.agents/INDEX.md` so future agent runs remain token-efficient.

---

## 2. Ignore Rule Enforcement ([.antigravityignore](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/.antigravityignore))

Always honor [.antigravityignore](file:///c:/Users/setyo/Documents/website%20cli/Data%20Analyst%20Portfolio%20Website/.antigravityignore) as the single source of truth for ignoring non-essential, binary, or auto-generated files.

* **Excluded Patterns**:
  * **Dependencies & Lockfiles**: `node_modules/`, `package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`, `bun.lockb` (~500 KB token bloat per scan).
  * **Build Outputs & Caches**: `.next/`, `.next-dev/`, `out/`, `build/`, `dist/`, `.turbo/`, `.cache/`, `.swc/`, `*.tsbuildinfo`, `*.map`, `next-env.d.ts`.
  * **Media & Binaries**: `public/**/*`, `*.pdf`, `*.png`, `*.jpg`, `*.webp`, `*.svg`, `*.mp4`, `*.ico`.
  * **Workspace & Logs**: `*.code-workspace`, `.vscode/`, `.idea/`, `*.log`, `scratch/`, `*.jsonl`.
* **Protocol**: Never attempt to inspect or read raw raster images, lockfiles, or Next.js build artifacts.

---

## 3. Targeted Sliced File Viewing

Avoid loading entire 500+ line files when modifying specific functions, interfaces, or component sections.

* **Protocol**:
  * Use `view_file` with explicit `StartLine` and `EndLine` parameters to view only relevant snippets (e.g. lines 20–80).
  * Use `grep_search` with specific path filters (`Includes: ["src/components/portfolio/*.tsx"]`) rather than unconstrained global searches.

---

## 4. Surgical Code Edits (Minimal Diffs)

When updating existing components or datasets:

* **Protocol**:
  * Use `replace_file_content` or `multi_replace_file_content` targeting exact contiguous line ranges.
  * Never rewrite entire 500-line files to make a 5-line edit.
  * Keep replacement chunks concise and tightly scoped to target lines.

---

## 5. Decoupled Data Import Resolution

When referencing portfolio datasets (education, certifications, projects, skills, experience):

* **Protocol**:
  * Import directly from `@/data` or specific data modules (`src/data/certificates.ts`, `src/data/projects.ts`, `src/data/skills.ts`, `src/data/experience.ts`).
  * Never duplicate or re-declare dataset objects inline inside UI components.

---

## 6. Pre-flight Check & Verification

* **Audit Command**: Run `npx tsc --noEmit` after code edits to verify TypeScript compilation in a single clean execution without long-running async background polling loops.
* **Index Sync**: Ensure any new file or route created during the session is registered in `.agents/INDEX.md`.

---

## 7. Ultra-Concise Agent Responses (Output Token Control)

To minimize output token generation overhead:

* **Protocol**:
  * Keep AI text responses brief, direct, and zero-fluff.
  * Use concise markdown bullet points and short summary lines.
  * Avoid long conversational preambles, repeated file descriptions, or unnecessary background tutorials.


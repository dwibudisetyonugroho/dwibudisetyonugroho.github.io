# Ticket Card Layout & Dynamic Geometry Specifications

This document contains detailed math formulas, geometric SVG notch calculations, and line-height budgeting rules for ticket card components (`TicketCard.tsx`, `TicketCardExperiment.tsx`, `TicketCardExperiment2.tsx`, `TicketCardCertification.tsx`, `TicketCardEducation.tsx`).

---

## 1. Header Height & Title Budgeting
- **Title DOM Height Inspection**: Measure `titleRef.current.offsetHeight` dynamically in `useEffect` on screen mount and window resize.
- **Dynamic Multi-Line Title Formula (1, 2, 3, or 4-Line Titles)**:
  - Base Single-Line Height $H_{base\_header} = 118\text{px}$ (with subtitle) or $92\text{px}$ (without subtitle).
  - Extra Line Offset $\Delta H_{title} = \max(0, \text{measuredTitleHeight} - 28\text{px})$.
  - Total Dynamic Header Height $H_{header} = \max(H_{base\_header}, H_{base\_header} + \Delta H_{title})$.
- **Line Count Heights**:
  - **1 Line ($\approx 28\text{px}$)**: $H_{header} = 118\text{px}$ (with subtitle) / $92\text{px}$ (without).
  - **2 Lines ($\approx 54\text{px}$)**: $H_{header} = 144\text{px}$ (with subtitle) / $118\text{px}$ (without).
  - **3 Lines ($\approx 80\text{px}$)**: $H_{header} = 170\text{px}$ (with subtitle) / $144\text{px}$ (without).
  - **4 Lines ($\approx 106\text{px}$)**: $H_{header} = 196\text{px}$ (with subtitle) / $170\text{px}$ (without).
- **Notch & Perforated Line Alignment**: Top side cutouts and perforated line dynamically center at `y = headerHeight` so no line overlap occurs.

---

## 2. Dynamic Resizing & SVG Geometry Math
- **Dynamic Height Coordinate Recalculation**:
  - Re-calculate `pathD`, `clipPathD`, SVG viewBoxes, and perforated line Y coordinates dynamically based on total height $H$.
- **Notch Coordinates**:
  - Center-align side cut-out notches mathematically at `92px`/`100px` and `H-92px`/`H-100px` so circular arcs remain undistorted.
- **Synchronized Spring Animation**:
  - Transition height $H$ with Framer Motion spring: `{ type: 'spring', stiffness: 120, damping: 20 }`.
  - Avoid `height: "auto"` during height transitions. Use exact pixel values or `element.scrollHeight`.
- **Height Delta Equivalence ($\Delta H_{parent} \equiv \Delta H_{container}$)**:
  - Expanding inner collapsibles must increase parent card height by exact container expansion delta (`expandedHeight - collapsedHeight`).

---

## 3. Tag Pill Row Height Calculations
- **Dynamic Measurement**: Use `useRef` and `scrollHeight` for text containers, course curriculum, and tag pill containers.
- **Dynamic Hidden Tag Count (`+N MORE`)**:
  - Measure `tagsListRef.current.children` line 1 offset (`offsetTop === firstLineTop`).
  - Calculate `hiddenTagsCount = Math.max(0, tagElements.length - firstLineCount)`.
  - Render `+{hiddenTagsCount} MORE` dynamically based on actual rendered container width.
- **5-Row Tag Array Calculation (e.g., 23 tags)**:
  - Expanded Container Height = $126\text{px}$ ($5 \times 20.4\text{px} + 4 \times 6\text{px}$).
  - `tagsExtraHeight` = $103\text{px}$ ($126\text{px} - 23\text{px}$).
- **2-Row Tag Array Calculation (e.g., 6 tags)**:
  - Collapsed Height = $23\text{px}$ (prevents row-2 peeking).
  - Expanded Height = $44\text{px}$ ($2 \times 19\text{px} + 6\text{px}$).
  - `tagsExtraHeight` = $21\text{px}$ ($44\text{px} - 23\text{px}$).

---

## 4. Spacing Hierarchy & Optical Alignment
- **Outer Padding**: Equal side gaps and bottom gap ($32\text{px}$ desktop / $24\text{px}$ mobile).
- **Dynamic Content Height Budgeting**:
  $$\text{MiddleSectionHeight} = \text{VerticalPadding (64px desktop / 48px mobile)} + \text{DescHeight} + \sum \text{FlexGaps} + \text{Curriculum/SkillHeader/Tags}$$
  Card height $H = H_{header} + \text{MiddleSectionHeight} + H_{footer}$ dynamically adapts to exact content bounds so top, bottom, left, and right outer paddings are strictly equal.
- **Internal Flex Gaps**: Half of side gap ($16\text{px}$ desktop / $12\text{px}$ mobile, e.g., `gap-4 sm:gap-3`).
- **Flex-Shrink Protection**: Apply `shrink-0` explicitly to middle flex column children to prevent squishing when collapsed.
- **Text Optical Alignment**: Compensate for line-height leading on top/bottom padding (e.g., `pt-[14px] pb-[14px] px-4` for visual $16\text{px}$ gap).

---

## 5. Mathematical Parallax Container Budgeting
- **Formula**:
  $$H_{container} - |T_{top}| - (\text{speed} \times H_{container}) \ge 100\%$$
- **Example**: For `speed = 0.5` and `-top-[60%]`, set container height `h-[320%]` ($320\% - 60\% - 160\% = 100\%$).
- **Background Styling**: `backgroundSize: '100% auto'`, `backgroundRepeat: 'repeat-y'`, `bg-transparent` on `<section>` elements.

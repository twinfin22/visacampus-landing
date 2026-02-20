# VisaCampus Brand & Design Guide

Last updated: 2026-02-20

---

## Typography

### Font Family

**Pretendard Variable** — used for all text across the product.

- Source: [Pretendard](https://github.com/orioncactus/pretendard) via jsDelivr CDN
- Fallback stack: `Pretendard Variable, Pretendard, Segoe UI, -apple-system, system-ui, sans-serif`

### Weight Scale

| Usage | Weight | Tailwind Class | CSS Custom Class |
|-------|--------|----------------|------------------|
| Body text | 400 (Regular) | `font-normal` | — |
| Labels, UI | 500 (Medium) | `font-medium` | — |
| Subheadings | 600 (SemiBold) | `font-semibold` | — |
| Section headings | 700 (Bold) | `font-bold` | — |
| Hero / display headings | 800 (ExtraBold) | `font-black` | `.font-display` |

### Heading Hierarchy

| Level | Size (mobile) | Size (desktop) | Weight | Example |
|-------|---------------|----------------|--------|---------|
| H1 (Hero) | `text-3xl` | `text-5xl` / `text-6xl` | 800 `.font-display` | "유학생 비자 관리, 엑셀에서 벗어나세요" |
| H2 (Section) | `text-xl` | `text-3xl` | Bold `.font-display` | "이런 고민, 매 학기 반복되고 계시죠?" |
| H3 (Feature) | `text-xl` | `text-xl` | Bold | "통합 학생 관리 대시보드" |
| Body | `text-sm` | `text-base` | Regular | General paragraph text |
| Caption | `text-xs` | `text-xs` | Regular / Medium | Helper text, badges |

---

## Color Palette

### Primary — Navy

The primary brand color. Used for buttons, nav logo, section accents, CTA background, and footer branding.

| Token | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| Navy 600 | `#1E3A5F` | `bg-indigo-600`, `text-indigo-600` | Primary buttons, logos, CTA background |
| Navy 700 | `#172E4D` | `bg-indigo-700` | Button hover, gradient mid-point |
| Navy 800 | `#112240` | `bg-indigo-800` | Button active state |
| Navy 900 | `#0D1A30` | `bg-indigo-900` | Deep accent (rare) |

### Accent — Sky Blue

Used for interactive highlights, links, focus rings, and lighter UI accents.

| Token | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| Sky 400 | `#3B82F6` | `text-indigo-400`, `text-indigo-500` | Accent text, focus rings, gradient endpoints |

### Light Tints

Used for backgrounds, cards, badges, and borders.

| Token | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| Slate 50 | `#F8FAFC` | `bg-indigo-50` | Light section backgrounds, hero gradient start |
| Sky 100 | `#E0F2FE` | `bg-indigo-100`, `border-indigo-100` | Card backgrounds, badge fills |
| Sky 200 | `#BAE6FD` | `bg-indigo-200`, `border-indigo-200` | Borders, shadow tints |
| Sky 300 | `#7DD3FC` | `border-indigo-300` | Focus rings, active borders |

### Semantic Colors

These are **not overridden** — they use Tailwind defaults.

| Role | Color | Tailwind | Usage |
|------|-------|----------|-------|
| Success | Emerald | `emerald-400` / `emerald-500` | Check icons, positive states, traffic light green |
| Warning | Amber | `amber-400` / `amber-500` | Caution badges, "coming soon" tags, traffic light yellow |
| Danger | Red | `red-400` / `red-500` | Critical alerts, urgent cards, traffic light red |
| Neutral | Gray | `gray-50`..`gray-900` | Text, backgrounds, borders, footer |
| Neutral Cool | Slate | `slate-50`..`slate-700` | Mockup UI, secondary backgrounds |

### Implementation Note

Colors are overridden via Tailwind v4 `@theme inline` in `globals.css`. The Tailwind class names still say `indigo-*` and `violet-*`, but they render as Navy + Sky. This means:

- `bg-indigo-600` renders as Navy `#1E3A5F`
- `text-indigo-400` renders as Sky `#3B82F6`
- All Tailwind utilities (bg, text, border, ring, shadow, gradient) inherit from the CSS variables automatically

---

## Logo

- Mark: White "VC" text on Navy 600 (`#1E3A5F`) rounded square
- Nav size: `w-8 h-8 rounded-lg`
- Footer size: `w-6 h-6 rounded`
- Wordmark: "VisaCampus" in `font-bold text-gray-900`
- Favicon: `/favicon.svg`

---

## Spacing & Layout

- Desktop-first responsive design (min 1280px breakpoint)
- Max content width: `max-w-6xl` (nav), `max-w-5xl` (sections), `max-w-4xl` (text-heavy), `max-w-3xl` (FAQ)
- Section padding: `py-14 sm:py-20 px-4 sm:px-6`
- Card border radius: `rounded-xl` (cards), `rounded-2xl` (CTA form), `rounded-lg` (buttons/inputs)
- Standard gap: `gap-4 sm:gap-6`

---

## Buttons

### Primary CTA

```
bg-indigo-600 text-white font-semibold rounded-xl
hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-0.5
active:bg-indigo-800 active:translate-y-0
shadow-lg shadow-indigo-200
```

- Min touch target: `min-h-[48px]` (main CTA), `min-h-[44px]` (nav CTA)
- Focus: `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`

### Nav CTA (smaller)

```
bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium
```

---

## Cards

- Background: `bg-white`
- Border: `border border-gray-100`
- Hover: `hover:-translate-y-1 hover:shadow-lg`
- Corner radius: `rounded-xl`
- Padding: `p-6`

### Urgent Card Variant

- Background: `bg-gradient-to-br from-red-50 to-red-100/50`
- Border: `border-2 border-red-200 shadow-md`
- Red dot indicator in top-right corner

---

## Icons

All icons use Heroicons outline style (24x24 viewBox, strokeWidth 1.5).

Icon badge component pattern:

```
<div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
  <svg className="w-5 h-5" .../>
</div>
```

Badge color variants: `indigo`, `amber`, `red`, `emerald`, `slate`

---

## Backgrounds & Effects

### Dot Grid

```css
.bg-dot-grid {
  background-image: radial-gradient(circle, rgba(30, 58, 95, 0.06) 1px, transparent 1px);
  background-size: 24px 24px;
}
```

### Glow Blobs (Hero)

- `bg-indigo-200/30 rounded-full blur-3xl` — soft navy glow
- `bg-violet-200/20 rounded-full blur-3xl` — soft sky glow
- Animated with `animate-glow-pulse` (6s ease-in-out infinite)

### Section Gradients

- Hero: `bg-gradient-to-b from-indigo-50 via-white to-white`
- CTA: `bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700`
- Alternating sections: white / `bg-gray-50`

---

## Animations

| Class | Effect | Duration |
|-------|--------|----------|
| `.animate-fade-in-up` | Fade in + slide up 24px | 0.6s ease-out |
| `.animate-glow-pulse` | Opacity pulse (0.2 → 0.35) | 6s ease-in-out infinite |
| Intersection reveal | Opacity + translateY via `useInView` hook | 700ms transition |
| Hover lift | `-translate-y-0.5` or `-translate-y-1` | 200ms / 300ms |

All animations respect `prefers-reduced-motion: reduce`.

---

## Form Inputs

```
w-full border border-gray-200 bg-gray-50/50 rounded-lg px-4 py-3 text-sm
focus-visible:bg-white
focus-visible:ring-2 focus-visible:ring-indigo-500
focus-visible:border-indigo-500
focus-visible:shadow-[0_0_0_4px_rgba(99,102,241,0.1)]
```

---

## Footer

- Background: `bg-gray-900`
- Text: `text-gray-300` (body), `text-white` (headings, brand)
- Links: `hover:text-white transition-colors`
- 3-column grid: Brand | Links | Contact

---

## Meta & SEO

| Property | Value |
|----------|-------|
| `theme-color` | `#1E3A5F` |
| `color-scheme` | `light` |
| Language | `ko` |
| Font preconnect | `cdn.jsdelivr.net` |

---

## File Reference

| File | Role |
|------|------|
| `src/app/globals.css` | Font import, theme colors, custom classes, animations |
| `src/app/layout.tsx` | Meta tags, preconnect, structured data |
| `src/app/page.tsx` | Landing page — all sections and components |

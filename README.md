# Practice Summary Card

A React + TypeScript dashboard component for displaying dental practice metrics. Built as a take-home assessment for DentistFind.

## Getting Started

You'll need Node.js 18+ installed. Then:

```bash
npm install
npm run dev
```

The app will open at `http://localhost:5173`. That's it!

To build for production:
```bash
npm run build
npm run preview
```

Vercel Hosted 
```
https://detistfind-take-home.vercel.app/
```

## What's Included

This project implements a Practice Summary Card component that shows:

- **Practice info**: Name and location (city, country)
- **Key metrics**: New patients, appointment requests, conversion rate, and marketing spend
- **Status indicator**: Visual badge showing if a practice is a "High Performer" (≥20% conversion), "At Risk" (<10%), or "Stable"
- **6-month trend**: Simple CSS bar chart showing patient growth over time
- **Recommendations**: Two contextual suggestions based on performance

The main page (`App.tsx`) displays 3 sample practice cards in a responsive grid layout.

## Project Structure

```
src/
├── components/
│   ├── PracticeSummaryCard/     # Main card component
│   ├── StatusIndicator/         # Status badge (High/At Risk/Stable)
│   ├── TrendVisualization/      # 6-month bar chart
│   └── Recommendations/         # Contextual recommendations
├── types/
│   └── index.ts                 # TypeScript types
├── styles/
│   └── theme.css                # CSS variables and global styles
└── App.tsx                      # Main page with 3 mock practices
```

## Tech Stack

- React 18 with TypeScript
- Vite for build tooling
- CSS Modules for styling
- No external UI libraries (pure CSS)

---

## Question 2: Approach & Decisions

### Component Structure

I broke the card into smaller, focused components:
- `PracticeSummaryCard` - Main container that brings everything together
- `StatusIndicator` - Handles the status badge logic and display
- `TrendVisualization` - Renders the 6-month bar chart
- `Recommendations` - Generates contextual suggestions

Why this approach? Each piece has a single job, which makes the code easier to understand, test, and modify. If I need to change how the trend chart looks, I only touch one file. Plus, these smaller components could be reused elsewhere in a real dashboard.

### Styling Choice: CSS Modules

I went with CSS Modules instead of Tailwind or a UI library for a few reasons:

1. **No runtime cost** - CSS Modules compile to regular CSS, unlike styled-components
2. **Type safety** - TypeScript knows about my class names, so typos get caught
3. **Scoped styles** - No worrying about class name collisions
4. **Team familiarity** - Most developers know CSS, so it's easier for others to jump in

I also set up CSS variables in `theme.css` for colors, spacing, and shadows. This makes it easy to tweak the theme globally and could support dark mode later without much refactoring.

### Visual Consistency & Responsiveness

For consistency, I used CSS variables everywhere - same colors, spacing scale, border radius, and shadows across all components. The typography follows a clear hierarchy (practice name is biggest, metrics are scannable, labels are subtle).

Responsive design uses a mobile-first approach with breakpoints at 768px and 1200px. On mobile, cards stack vertically. On tablet, they show 2 columns. Desktop gets 3 columns. Font sizes and spacing scale down appropriately on smaller screens.

### Scaling to a Real Dashboard

If this were going into PracticeFuel, here's what I'd do:

**Design System Integration:**
- Move theme variables to a shared tokens file that other components can use
- Create a base `Card` component that this card extends
- Build a component library (maybe with Storybook) so other devs can see what's available

**Reusability:**
- Extract the metric display into its own `MetricCard` component
- Make the card accept a `variant` prop for different styles (compact, detailed, etc.)
- Create a `TrendChart` component that could handle different time ranges

**Real Data Integration:**
- Hook up React Query or similar for API calls
- Add loading skeletons, error states, and empty states
- Implement data caching and refresh strategies

**Theming:**
- Support light/dark mode using the CSS variable system
- Allow per-client color customization (multi-tenant)

### If I Had One Extra Day

I'd focus on:

**Accessibility** - Add proper ARIA labels, keyboard navigation, focus indicators, and make sure screen readers can understand the dynamic content. Also verify color contrast meets WCAG AA standards.

**Testing** - Write unit tests for the status logic and recommendation generation. Maybe some visual regression tests to catch styling bugs.

**Performance** - Memoize components that don't need to re-render, lazy load the trend charts, and code split if the bundle gets large.

**Polish** - Add tooltips for metrics, smooth animations for the trend bars on load, and maybe a comparison view to see multiple practices side-by-side.

### Time Breakdown

Here's roughly how I spent the 2 hours:

- **Setup (15 min)**: Vite + React + TypeScript, folder structure, basic config
- **Types & Data (10 min)**: Defined the `PracticeSummary` type, created 3 mock practices with different conversion rates
- **Components (45 min)**: Built the main card, status indicator, trend chart, and recommendations. Wired them all together.
- **Styling (35 min)**: CSS Modules for all components, responsive breakpoints, hover states, visual polish
- **Layout (10 min)**: Header with logo, grid layout for cards, responsive container
- **README (5 min)**: Documentation and this explanation

Total: ~120 minutes

I prioritized getting the visual details right and keeping the code clean over adding extra features. The animations and hover states were a nice touch that didn't take too long but make the UI feel more polished.

---

## Notes

- All components are functional components (no classes)
- TypeScript strict mode is enabled
- Trend visualization uses pure CSS bars - no chart library needed
- Recommendations are generated based on conversion rate thresholds
- Status logic: ≥20% = High Performer, <10% = At Risk, otherwise Stable

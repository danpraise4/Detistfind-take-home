# Practice Summary Card Assessment

A React + TypeScript application showcasing a polished Practice Summary Card component for dental practice metrics visualization.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation & Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── PracticeSummaryCard/
│   │   ├── PracticeSummaryCard.tsx
│   │   └── PracticeSummaryCard.module.css
│   ├── StatusIndicator/
│   │   ├── StatusIndicator.tsx
│   │   └── StatusIndicator.module.css
│   ├── TrendVisualization/
│   │   ├── TrendVisualization.tsx
│   │   └── TrendVisualization.module.css
│   └── Recommendations/
│       ├── Recommendations.tsx
│       └── Recommendations.module.css
├── types/
│   └── index.ts
├── styles/
│   └── theme.css
├── App.tsx
├── App.module.css
└── main.tsx
```

## 🎨 Theme

- **Primary Green:** `#27AE60`
- **White:** `#FFFFFF`
- Additional colors defined in `src/styles/theme.css` for consistency

## 📋 Features

- ✅ Practice Summary Card with header (name, location)
- ✅ Key metrics display (new patients, appointment requests, conversion rate, optional marketing spend)
- ✅ Status indicator based on conversion rate (High Performer ≥20%, At Risk <10%, Stable otherwise)
- ✅ Simple 6-month trend visualization using CSS bars
- ✅ Contextual recommendations based on performance
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Hover effects and smooth transitions
- ✅ TypeScript with strict typing
- ✅ CSS Modules for scoped styling

---

## Question 2: Approach, Code Quality & Decision-Making

### 1. Component & Styling Decisions

#### Component Structure

I structured the application using a **component composition pattern**:

- **Main Component:** `PracticeSummaryCard` serves as the container that orchestrates all subcomponents
- **Subcomponents:** `StatusIndicator`, `TrendVisualization`, and `Recommendations` are small, focused, and reusable
- **Benefits:**
  - Single Responsibility Principle: Each component has one clear purpose
  - Reusability: Subcomponents can be used independently or in other contexts
  - Testability: Smaller components are easier to unit test
  - Maintainability: Changes to one section don't affect others

#### Styling Approach

I chose **CSS Modules** for styling:

- **Why CSS Modules:**
  - Scoped styles prevent naming conflicts
  - No runtime overhead (unlike styled-components)
  - TypeScript support for class names
  - Easy to maintain and debug
  - Familiar CSS syntax for team members

- **Theme System:**
  - Centralized CSS variables in `theme.css` for consistent colors, spacing, and shadows
  - Easy to update theme colors globally
  - Supports future theming/dark mode expansion

#### Visual Consistency & Responsiveness

- **Consistency:**
  - CSS variables ensure consistent colors, spacing, and typography
  - Reusable utility classes and patterns
  - Consistent border-radius, shadows, and transitions across components

- **Responsiveness:**
  - Mobile-first approach with breakpoints at 768px and 1200px
  - Grid layout adapts from 3 columns (desktop) → 2 columns (tablet) → 1 column (mobile)
  - Font sizes and spacing scale appropriately
  - Touch-friendly hover states and interactions

### 2. Scaling & Real-World Use

#### Integration into PracticeFuel Dashboard

- **Design System Integration:**
  - Extract theme variables into a shared design tokens file
  - Create a component library with Storybook for documentation
  - Use consistent spacing scale (4px, 8px, 12px, 16px, etc.)

- **Reusability:**
  - Make `PracticeSummaryCard` accept a `variant` prop for different card styles
  - Extract metric display into a reusable `MetricCard` component
  - Create a `Card` base component with consistent styling

- **State Management:**
  - Connect to real API endpoints using React Query or similar
  - Add loading states, error handling, and empty states
  - Implement data caching and refresh strategies

- **Theming:**
  - Support multiple themes (light/dark mode)
  - Allow customization of primary colors per client/tenant

#### If I Had One Extra Day

- **Accessibility (WCAG 2.1 AA):**
  - Add ARIA labels and roles
  - Ensure keyboard navigation support
  - Improve color contrast ratios
  - Add focus indicators
  - Screen reader announcements for dynamic content

- **Testing:**
  - Unit tests for components (React Testing Library)
  - Visual regression tests (Chromatic/Percy)
  - Integration tests for data flow

- **Performance:**
  - Implement React.memo for expensive components
  - Lazy load trend visualizations
  - Optimize bundle size with code splitting

- **Enhanced Features:**
  - Add tooltips for metrics
  - Implement data export (CSV/PDF)
  - Add date range filtering
  - Animate trend bars on mount
  - Add comparison view between practices

- **Developer Experience:**
  - Add PropTypes or stricter TypeScript types
  - Create Storybook stories for all components
  - Add JSDoc comments for complex logic

### 3. Time Management

Rough time allocation (2 hours total):

- **Setup & Project Structure (15 minutes):**
  - Initialize Vite + React + TypeScript project
  - Set up folder structure and configuration files
  - Create base theme and CSS variables

- **Type Definitions & Data Model (10 minutes):**
  - Define `PracticeSummary` type
  - Create mock data with diverse values
  - Set up type exports

- **Core Component Development (45 minutes):**
  - Build `PracticeSummaryCard` component structure
  - Implement `StatusIndicator` with status logic
  - Create `TrendVisualization` with CSS bars
  - Build `Recommendations` component with conditional logic
  - Wire up all components together

- **Styling & Polish (35 minutes):**
  - Style all components with CSS Modules
  - Implement responsive design (mobile, tablet, desktop)
  - Add hover effects and transitions
  - Ensure visual hierarchy and spacing
  - Fine-tune colors and typography

- **Wrapper Page & Layout (10 minutes):**
  - Create `App.tsx` with grid layout
  - Add header with title
  - Ensure responsive card container

- **README & Documentation (5 minutes):**
  - Write setup instructions
  - Document project structure
  - Answer Question 2 comprehensively

**Total: ~120 minutes**

The focus was on **visual polish and code quality** rather than adding extra features, which aligns with the assessment's emphasis on attention to detail.

---

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **CSS Modules** - Scoped styling
- **CSS Variables** - Theme system

## 📝 Notes

- All components are functional components using React hooks
- TypeScript strict mode enabled for type safety
- No external UI libraries used (pure CSS for styling)
- Trend visualization uses simple CSS bars (no chart library)
- Recommendations are dynamically generated based on conversion rate

---

Built with attention to detail and industry best practices. 🎯

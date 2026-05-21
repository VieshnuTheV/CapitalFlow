---
name: Precision Finance System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#07006c'
  on-tertiary-container: '#7073ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#e1e0ff'
  tertiary-fixed-dim: '#c0c1ff'
  on-tertiary-fixed: '#07006c'
  on-tertiary-fixed-variant: '#2f2ebe'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  stat-primary:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding-desktop: 32px
  container-padding-mobile: 16px
  gutter: 24px
  card-gap: 20px
---

## Brand & Style

The design system is engineered for high-density financial data, prioritizing clarity, trust, and professional sophistication. It draws from **Corporate Modern** and **Minimalist** influences, stripping away decorative elements to focus entirely on information architecture and fiscal performance. 

The aesthetic is built to evoke the feeling of a premium wealth management platform: secure, precise, and effortless. It utilizes ample whitespace to separate complex data sets and employs a strict visual hierarchy to ensure that critical financial figures are the first elements a user internalizes. The interface should feel "expensive" through its restraint—using subtle borders, meticulous alignment, and a curated palette rather than heavy shadows or textures.

## Colors

The palette is anchored by a deep **Slate Navy** (#0F172A), used for primary text and navigation to establish authority and stability. The background uses a very light cool-gray (#F8FAFC) to reduce eye strain during long data-review sessions.

Functional color is the primary driver of the user experience:
- **Emerald (Income):** Used exclusively for positive growth, credits, and inflows.
- **Coral (Expenses):** Reserved for debits, outflows, and alerts.
- **Indigo (Investments):** Represents long-term value and compounding assets.
- **Sky (Savings):** Used for liquidity and emergency funds.

All accent colors are tuned for high accessibility and contrast against white surfaces. Neutral tones (Slate 500-700) are utilized for secondary labels and metadata to ensure they do not compete with primary financial figures.

## Typography

This design system utilizes **Inter** for its incredible legibility in complex UI environments. It is paired with **Geist** for tabular data, labels, and financial figures. Geist’s monospaced-influenced proportions ensure that numbers remain aligned and easily scannable in lists and dashboards.

- **Financial Figures:** Always use `stat-primary` for balance displays to ensure decimal points and currency symbols align perfectly.
- **Hierarchy:** Use `label-caps` for section headers above data tables to provide a clear, institutional feel.
- **Contrast:** High-weight (600+) is reserved for monetary totals and primary headings. Body text should remain at regular (400) weight for maximum readability in data-dense areas.

## Layout & Spacing

The layout follows a **12-column fluid grid** for desktop, transitioning to a **single-column stack** for mobile. 

- **Dashboard Grid:** Key metrics are housed in cards that span 3, 4, or 6 columns depending on the data complexity. 
- **The 8px Rhythm:** All padding, margins, and component heights must be multiples of 8px to maintain a strict, mathematical harmony suitable for a fintech product.
- **Dense vs. Airy:** Data tables utilize a tighter 8px vertical padding to maximize information density, while the outer page containers use 32px padding to provide visual "breathing room" and a premium feel.

## Elevation & Depth

This design system avoids heavy drop shadows in favor of **Tonal Layers** and **Low-Contrast Outlines**.

Depth is communicated through three primary levels:
1. **Level 0 (Canvas):** The base background layer (#F8FAFC).
2. **Level 1 (Cards/Surface):** White containers with a 1px border (#E2E8F0). These house the primary content.
3. **Level 2 (Interaction):** A very soft, highly diffused ambient shadow (0px 4px 20px rgba(15, 23, 42, 0.05)) is applied only to active elements like open menus, modals, or hovered cards.

This flat, layered approach ensures that the interface feels fast, modern, and does not distract from the data visualization.

## Shapes

The design system uses a **Rounded** (Level 2) shape language. 
- **Standard UI (Buttons, Inputs):** 0.5rem (8px) corner radius. This balances the professional "sharpness" of finance with the approachability of modern consumer apps.
- **Large Containers (Cards, Dashboards):** 1rem (16px) corner radius.
- **Status Pills:** Fully rounded (pill-shaped) to distinguish them from interactive buttons.

This consistent rounding creates a cohesive "container" language where data is neatly framed.

## Components

### Buttons
Primary buttons use the Slate Navy background with white text. Secondary buttons use a transparent background with a Slate 200 border. Transitions should be instant (150ms) to feel responsive and high-performance.

### Data Cards
Cards are the primary building block. Every card must have a 1px Slate 100 border and a consistent 24px internal padding. Titles within cards should use `label-caps`.

### Input Fields
Inputs are minimal: a 1px border that shifts to Indigo on focus. Error states use Coral text and borders. Labels are always positioned above the input field, never as placeholders, to maintain visibility during data entry.

### Lists & Tables
Tables are "borderless" internally, using subtle Slate 50 horizontal dividers. Row hover states use a faint Sky 50 background to help the user track data across wide screens.

### Chips & Badges
Used for transaction categories or status (e.g., "Cleared," "Pending"). They use a 10% opacity version of their functional color (Emerald, Coral, etc.) with high-contrast text for a sophisticated, semi-transparent look.
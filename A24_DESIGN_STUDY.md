# A24 Films Website Design Study

## Overview

A24's website embodies **sophisticated minimalism**. The design philosophy: let the films be the star, everything else recedes.

---

## Core Design Principles

### 1. WHITE, Not Black
**Previous assumption was WRONG.** A24 uses:
- **Background:** Pure white (#FFFFFF)
- **Text:** Near-black (#1A1A1A)
- **No dark mode, no black backgrounds**

The white creates a gallery/museum aesthetic - clean, institutional, serious.

### 2. Imagery-First
- Films are displayed as **large rectangular cards**
- **16:9 aspect ratio** for all film images
- Images are the hero - text supports, never competes
- High-quality stills, no fancy filters or treatments

### 3. Minimal Chrome
- No sidebars
- No heavy UI elements
- No gradients
- No decorative elements
- Content IS the design

---

## Layout Structure

### Navigation
```
[LOGO]  Films  Television  Docs  Shop  Membership  Notes  App  [Search]
```
- Simple horizontal nav
- No mega-menus or dropdowns visible
- Logo is just "A24" text/mark, nothing fancy

### Films Grid Page
```
┌─────────────────────────────────────────────────┐
│  [Email signup banner - optional]               │
├─────────────────────────────────────────────────┤
│                                                 │
│  UPCOMING                                       │
│                                                 │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐         │
│  │  IMAGE  │  │  IMAGE  │  │  IMAGE  │         │
│  │  16:9   │  │  16:9   │  │  16:9   │         │
│  └─────────┘  └─────────┘  └─────────┘         │
│  Title        Title        Title               │
│  2024         2024         2024                │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  ALL FILMS                    [Sort: Newest ▼] │
│                                                 │
│  2024                                          │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐         │
│  │         │  │         │  │         │         │
│  └─────────┘  └─────────┘  └─────────┘         │
│                                                 │
│  2023                                          │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐         │
│  │         │  │         │  │         │         │
│  └─────────┘  └─────────┘  └─────────┘         │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Film Card Anatomy
```
┌────────────────────────┐
│                        │
│    FILM STILL IMAGE    │
│       (16:9 ratio)     │
│                        │
└────────────────────────┘
Film Title
2024
Director: Name
Starring: Actor, Actor, Actor
```
- Image dominant
- Title below image (not overlaid)
- Minimal metadata
- Clean typography

### Individual Film Page
```
┌─────────────────────────────────────────────────┐
│                                                 │
│        LARGE HERO IMAGE / TRAILER THUMB         │
│              (full width, 16:9)                 │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  FILM TITLE                                     │
│  2024                                           │
│                                                 │
│  Written and Directed by Name                   │
│                                                 │
│  Starring: Actor, Actor, Actor                  │
│                                                 │
│  [Synopsis paragraph]                           │
│                                                 │
│  ─────────────────────────────────────────      │
│                                                 │
│  WATCH NOW                                      │
│  • Apple TV                                     │
│  • Amazon Prime                                 │
│  • AAA24 (their streaming)                      │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## Typography

### Font Stack
- Clean sans-serif (likely custom or system stack)
- No decorative fonts
- No serifs

### Hierarchy
| Element | Size | Weight | Notes |
|---------|------|--------|-------|
| Nav items | 14-16px | Normal | All caps or sentence case |
| Section headers | 14-16px | Bold/Caps | "UPCOMING", "ALL FILMS" |
| Film titles | 18-24px | Bold | Below image |
| Metadata | 14px | Normal | Director, year, cast |
| Body text | 16px | Normal | Synopses |

### Styling
- Tight letter-spacing on headings
- Comfortable line-height (1.5-1.6)
- Black text on white background
- No text shadows or effects

---

## Spacing

### Generous Whitespace
- **Section margins:** 60-80px between major sections
- **Card gaps:** 24-32px between film cards
- **Card internal padding:** ~20px between image and text
- **Page margins:** Substantial side margins (feels centered, not edge-to-edge)

### Grid System
- 3-4 columns on desktop
- 2 columns on tablet
- 1 column on mobile
- Consistent gap throughout

---

## Interactions

### Minimal by Design
- No flashy animations
- No parallax
- No hover zoom effects (or very subtle)
- Standard link behaviors
- Smooth but understated transitions

### What They DON'T Do
- No loading spinners
- No skeleton screens visible
- No complex animations
- No scroll-triggered effects

---

## Color Palette

| Use | Color | Hex |
|-----|-------|-----|
| Background | White | #FFFFFF |
| Primary text | Near-black | #1A1A1A |
| Secondary text | Dark gray | #666666 |
| Links | Black (underline on hover) | #000000 |
| Dividers | Light gray | #E5E5E5 |

**NO accent colors.** The films provide all the color.

---

## Key Takeaways for CSP Mockup

### DO:
1. **White background** - not black
2. **Large film images** in 16:9 ratio
3. **Minimal text** - only essential info
4. **Generous whitespace** - let content breathe
5. **Simple navigation** - horizontal, minimal
6. **Grid of film cards** - image dominant
7. **Clean sans-serif typography**
8. **No decorative elements**

### DON'T:
1. ❌ Black/dark background
2. ❌ Hero sections with text overlays
3. ❌ Fancy animations or parallax
4. ❌ Accent colors or gradients
5. ❌ Cluttered layouts
6. ❌ Decorative typography
7. ❌ Heavy UI chrome

---

## Applying to Cunningham Sisters Productions

### Adaptation Strategy
Since CSP has ONE film (Resilience), not a catalog:

```
┌─────────────────────────────────────────────────┐
│  CUNNINGHAM SISTERS PRODUCTIONS                 │
├─────────────────────────────────────────────────┤
│                                                 │
│        RESILIENCE - HERO IMAGE                  │
│           (large, 16:9)                         │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  RESILIENCE                                     │
│  2025 • In Post-Production                      │
│                                                 │
│  Directed by Kenna Cunningham                   │
│  Written by Madi Grace Cunningham               │
│                                                 │
│  [Brief synopsis]                               │
│                                                 │
│  ─────────────────────────────────────────      │
│                                                 │
│  SUPPORT THIS FILM                              │
│  59% funded • $89,111 of $150,000               │
│  [Donate Button → GoFundMe]                     │
│                                                 │
│  ─────────────────────────────────────────      │
│                                                 │
│  THE TEAM                                       │
│  [Simple grid of headshots + names]             │
│                                                 │
│  ─────────────────────────────────────────      │
│                                                 │
│  CONTACT                                        │
│  filmresilience@gmail.com                       │
│  @thecunninghamsisters                          │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Key Differences from A24
- Single film focus (not catalog)
- Funding CTA prominent (they're fundraising)
- Team section (small company, personal)
- Otherwise: same aesthetic principles

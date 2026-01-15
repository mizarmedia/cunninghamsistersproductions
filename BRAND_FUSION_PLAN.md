# Brand Fusion Plan: CSP × A24 Design

## The Challenge

**A24 Design** = Built for a catalog of 100+ films
**CSP Reality** = One film (Resilience)

We can't just copy A24's grid layout. We need to adapt their *principles* while creating a layout that makes sense for a single-project production company.

---

## What We Take From A24

### Design Principles (YES)
| A24 Element | How We Use It |
|-------------|---------------|
| White background | ✅ Pure white (#FFFFFF) |
| Minimal chrome | ✅ No decorative elements |
| Image-forward | ✅ Large film stills dominate |
| Clean sans-serif | ✅ Simple typography |
| Generous whitespace | ✅ Let content breathe |
| Gallery aesthetic | ✅ Museum-like presentation |
| Content = design | ✅ Film imagery provides color |
| Text below images | ✅ Not overlaid |

### Layout Elements (ADAPTED)
| A24 Element | Our Adaptation |
|-------------|----------------|
| Film grid | → Single hero film |
| Catalog navigation | → Section scroll |
| Multiple film cards | → Multiple scenes/stills |
| "All Films" section | → "The Story" / "Behind The Scenes" |

---

## What We Keep From CSP

### Brand Identity
- **Company Name:** "Cunningham Sisters Productions" (not A24)
- **Film Title:** "Resilience" prominent
- **Mission:** Advocacy focus visible
- **Voice:** Serious, urgent, but hopeful

### Unique Needs
- **Funding CTA** - They need donations (A24 doesn't)
- **Team Page** - Small company, personal connection matters
- **Single Film Focus** - Deep dive, not catalog browse
- **Nonprofit Model** - 50/50 split explanation

---

## The Fusion: Page Structure

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  CUNNINGHAM SISTERS PRODUCTIONS          [Donate]           │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│                                                             │
│           ┌─────────────────────────────────┐               │
│           │                                 │               │
│           │     HERO IMAGE - RESILIENCE     │               │
│           │         (16:9, full width)      │               │
│           │                                 │               │
│           └─────────────────────────────────┘               │
│                                                             │
│                        RESILIENCE                           │
│                   A Non-Profit Feature Film                 │
│                         2025                                │
│                                                             │
│           Directed by Kenna Cunningham                      │
│           Written by Madi Grace Cunningham                  │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  "If we don't stand up for the children…                    │
│   then we don't stand up for much."                         │
│                        — Marian W. Edelman                  │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  THE STORY                                                  │
│                                                             │
│  [Synopsis paragraph - 2-3 sentences max]                   │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  BEHIND THE SCENES                                          │
│                                                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                     │
│  │  STILL  │  │  STILL  │  │  STILL  │                     │
│  │   1     │  │   2     │  │   3     │                     │
│  └─────────┘  └─────────┘  └─────────┘                     │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  SUPPORT THIS FILM                                          │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │   $89,111 raised of $150,000                        │   │
│  │   ████████████████████░░░░░░░░░░  59%              │   │
│  │                                                     │   │
│  │   All donations tax-deductible via                  │   │
│  │   The Film Institute 501(c)(3)                      │   │
│  │                                                     │   │
│  │              [ DONATE ]                             │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  THE TEAM                                                   │
│                                                             │
│  ┌───────┐  ┌───────┐  ┌───────┐  ┌───────┐               │
│  │ PHOTO │  │ PHOTO │  │ PHOTO │  │ PHOTO │               │
│  └───────┘  └───────┘  └───────┘  └───────┘               │
│   Kenna      Madi       David      Mike                    │
│   Director   Writer     Producer   Producer                │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  OUR MODEL                                                  │
│                                                             │
│  50% → Advocacy for troubled teen oversight                 │
│  50% → Future films for disenfranchised communities         │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  CONTACT                                                    │
│                                                             │
│  filmresilience@gmail.com                                   │
│  @thecunninghamsisters                                      │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  © 2025 Cunningham Sisters Productions                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Typography Plan

### Fonts
Use system font stack (like A24) - clean, fast loading:
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Hierarchy
| Element | Size | Weight | Style |
|---------|------|--------|-------|
| Company name (nav) | 14px | 500 | Uppercase, tracking |
| Film title | 48px | 700 | Normal |
| Section headers | 14px | 600 | Uppercase, tracking |
| Body text | 18px | 400 | Normal |
| Credits | 16px | 400 | Normal |
| Quote | 24px | 400 | Italic |

---

## Color Palette

| Use | Color | Hex |
|-----|-------|-----|
| Background | White | #FFFFFF |
| Primary text | Near-black | #1A1A1A |
| Secondary text | Dark gray | #666666 |
| Dividers | Light gray | #E5E5E5 |
| Donate button | Black | #000000 |
| Donate button text | White | #FFFFFF |

**No accent colors.** The film stills provide all color.

---

## Key Design Decisions

### 1. Single Page vs Multi-Page
**Decision:** Single page with sections
**Why:** A24's film detail pages are single-scroll. With one film, we don't need navigation complexity.

### 2. Donate Button Placement
**Decision:** Top nav (always visible) + dedicated section
**Why:** They need funding. But keep it classy - not popup, not aggressive.

### 3. Team Display
**Decision:** Simple grid with photos + name/role only
**Why:** A24 keeps credits minimal. Link to full bios if needed, don't clutter main page.

### 4. Progress Bar
**Decision:** Include funding progress bar
**Why:** Shows momentum, creates urgency. Keep it minimal - thin line, not flashy.

### 5. Quote
**Decision:** Feature the Marian W. Edelman quote prominently
**Why:** Establishes the moral weight. A24 often uses pull quotes.

---

## Mobile Considerations

- Single column layout
- Hero image full width
- Stacked content
- Sticky nav with donate button
- Touch-friendly spacing (44px tap targets)
- Images scale down gracefully

---

## What This Is NOT

❌ Not a dark/moody design (that's not A24)
❌ Not a parallax scrolling experience
❌ Not text overlaid on images
❌ Not colorful or decorated
❌ Not cluttered with information
❌ Not a complex multi-page site

---

## Implementation Priority

1. **Structure first** - HTML with semantic sections
2. **Typography** - Get the type hierarchy right
3. **Spacing** - Generous margins, proper breathing room
4. **Images** - Download and optimize
5. **Responsive** - Mobile-first
6. **Polish** - Subtle hover states, smooth scrolling

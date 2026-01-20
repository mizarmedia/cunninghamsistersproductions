# Cunningham Sisters Productions Website

## Project Overview
Marketing website for "Resilience" - a film by The Cunningham Sisters Productions about systemic abuse in unregulated teen residential treatment programs.

## Live Preview
**Cloudflare Pages:** https://csp-mockup-cinematic.pages.dev/

## Deployment
- **Platform:** Cloudflare Pages
- **Branch:** `main`
- **Auto-deploy:** Yes (pushes to main trigger deployment)
- **GitHub Repo:** https://github.com/mizarmedia/cunninghamsistersproductions

## Project Structure
```
cunninghamsistersproductions/
├── index.html              # Main page with all sections
├── styles.css              # Mobile-first responsive CSS
├── CLAUDE.md               # This file
└── *.md                    # Design docs and references
```

## Design: Cinematic
Dark, cinematic aesthetic with gold accents. Features:
- Mobile-first responsive design
- Parallax scrolling effects
- **Theater mode** for video section (auto-triggers, scroll-lock, cinematic zoom)
- Vimeo video embed (proof of concept)
- GoFundMe integration for donations
- Newsletter signup form

## Key Sections
1. **Hero** - Full-screen with film title
2. **Interstitial** - Quote block
3. **Story** - Film synopsis with parallax image
4. **Image Break** - 3-column production stills
5. **Video** - Vimeo embed with theater mode
6. **Team** - Filmmaker spotlights + crew grid
7. **Impact** - 50/50 funding model explanation
8. **Timeline** - Production journey progress
9. **Funding** - GoFundMe progress bar and CTA
10. **Newsletter** - Email signup
11. **Contact** - Email + Instagram links
12. **Footer** - Copyright

## External Links
- **GoFundMe:** https://gofund.me/d00b98309
- **Instagram:** @thecunninghamsisters
- **Email:** filmresilience@gmail.com
- **Vimeo:** https://player.vimeo.com/video/1115004786

## Tech Stack
- Vanilla HTML/CSS/JS (no build tools)
- Google Fonts: Cormorant Garamond, Montserrat
- CSS Variables for theming
- IntersectionObserver for scroll effects

## Design Tokens
```css
--color-black: #000000
--color-gold: #c9a962
--color-gold-dark: #a68a4a
--font-display: 'Cormorant Garamond'
--font-body: 'Montserrat'
```

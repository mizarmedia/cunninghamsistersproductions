# Cunningham Sisters Productions

Official website for The Cunningham Sisters Productions, promoting their debut feature film "Resilience."

## Live Site
**URL:** https://csp-mockup-cinematic.pages.dev/

## Deployment
- **Platform:** Cloudflare Pages
- **Repo:** https://github.com/mizarmedia/cunninghamsistersproductions
- **Deploy command:** `./deploy.sh` (or `npx wrangler pages deploy . --project-name=csp-mockup-cinematic`)

## Project Files
```
index.html    # Single-page site
styles.css    # Mobile-first responsive styles
CLAUDE.md     # This file
```

## The Film: Resilience
A gritty drama exposing systemic abuse in unregulated teen residential treatment programs. Inspired by real events, following young people trapped in an industry that operates in shadows.

**Status:** Post-Production (April 2025 wrap)

## The Team
- **Kenna Cunningham** - Director/Producer (Netflix, Apple TV, Amazon Prime, Nat Geo credits)
- **Madi Grace Cunningham** - Writer/Actor/Producer (LAMDA trained, Amazon/Sony/Capitol Records)
- **David Cunningham** - Producer (20+ years Fox/Disney/ABC, Global Virtual Studios founder)
- **Mike Leahy** - Producer (NEO Art & Logic co-founder, 30+ features)
- **Janet & Lee Batchler** - Advisors (Batman Forever writers, USC professors)

## Funding Model
501(c)(3) through The Film Institute. Tax-deductible donations split:
- 50% Advocacy (regulation of troubled teen industry)
- 50% Future advocacy films

**GoFundMe:** https://gofund.me/d00b98309
**Current:** $89,111 of $150,000 (59%)

## Contact
- **Email:** filmresilience@gmail.com
- **Instagram:** @thecunninghamsisters

## Site Features
- Mobile-first responsive design
- Cinematic dark theme with gold accents (#c9a962)
- Parallax scrolling effects
- **Theater mode** - Video section auto-triggers immersive viewing (scroll-lock, zoom, fade)
- Vimeo embed for proof of concept video
- Production timeline with progress indicators
- Newsletter signup form

## Design Tokens
```css
--color-black: #000000
--color-gold: #c9a962
--font-display: 'Cormorant Garamond'
--font-body: 'Montserrat'
```

## Workflow
- **No local testing** - Deploy directly to production
- After any change: `git add -A && git commit -m "message" && git push && ./deploy.sh`
- Changes are live within seconds of deploying

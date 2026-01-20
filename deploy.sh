#!/bin/bash
# Deploy to Cloudflare Pages
# Run this after pushing to GitHub, or use alone for immediate deploy

set -e
cd "$(dirname "$0")"

echo "Deploying to Cloudflare Pages..."
npx wrangler pages deploy . --project-name=csp-mockup-cinematic

echo "Done! Site live at https://csp-mockup-cinematic.pages.dev/"

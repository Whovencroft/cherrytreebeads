# Cherry Tree Beads Refresh Prototype

Static GitHub Pages prototype for a Cherry Tree Beads homepage overhaul.

## What this repo includes

- `index.html` for the homepage prototype
- `styles.css` for the full visual system
- `script.js` for the mobile navigation only
- `assets/images/` with optimized WebP versions of Cherry Tree product photography
- `docs/strategy.md` with the redesign logic
- `docs/performance-plan.md` with the PageSpeed-focused implementation plan
- `docs/image-sources.md` listing the original Cherry Tree image sources and matching live destinations
- `.nojekyll` so GitHub Pages serves the repo as a plain static site

## Goals

- modernize the Cherry Tree Beads homepage look
- improve first-click shopping clarity
- surface wholesale, showroom, and design-idea value earlier
- demonstrate a faster asset strategy for images and JavaScript
- keep all shopper links pointed at the live Cherry Tree Beads site

## Local preview

Open `index.html` directly in a browser, or run a static server.

Example with Python:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080/`.

## GitHub Pages deployment

1. Create a new GitHub repository.
2. Upload everything in this folder to the repository root.
3. In GitHub, go to **Settings → Pages**.
4. Set **Source** to **Deploy from a branch**.
5. Choose the main branch and the root folder.
6. Save.

## Notes

- This is a prototype only. It does not connect to the live cart, search, or category data.
- All shopper-facing links open the current live Cherry Tree Beads pages.
- Source images came from Cherry Tree product pages and were resized into responsive WebP assets for the prototype.

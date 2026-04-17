# Performance Plan

This prototype was built around the slowdown list provided in the audit notes.

## Issues to target

- improve image delivery
- reduce render-blocking requests
- remove legacy JavaScript where possible
- reduce layout shift
- improve LCP request discovery
- simplify the network dependency tree
- reduce duplicated JavaScript
- reduce unnecessary preconnects
- improve cache lifetimes
- avoid custom font blocking

## What the prototype demonstrates

### Responsive image delivery
- source images were resized into multiple widths
- prototype images were converted to WebP
- `srcset` and `sizes` are used so small viewports do not download oversized files
- below-the-fold images are lazy-loaded

### Better LCP setup
- hero images are preloaded
- no external CSS frameworks are used
- no external fonts are requested
- hero layout is visible immediately with local assets only

### Less render blocking
- one deferred JavaScript file only
- no jQuery
- no carousel library
- no animation library

### Lower layout shift risk
- width and height are defined for every image
- cards use consistent aspect ratios
- sticky header has stable height

## Recommended next steps for the live BigCommerce build

1. Replace oversized category and product thumbnails with responsive image variants.
2. Serve modern formats first, especially WebP.
3. Audit theme-level JavaScript and remove any duplicated utilities.
4. Remove or defer non-critical third-party scripts from the homepage.
5. Inline only critical CSS needed for the first screen.
6. Keep the home hero simple. Avoid sliders.
7. Reduce the number of early network connections and preconnect only to truly critical origins.
8. Use system fonts or load brand fonts with `font-display: swap`.
9. Re-check Core Web Vitals after the homepage template is simplified.

## BigCommerce implementation note

The live store theme likely needs a template-level cleanup instead of only adding new homepage content. The point is not just a prettier page. The point is fewer blocking assets, smaller images, and a shorter path from landing to category.

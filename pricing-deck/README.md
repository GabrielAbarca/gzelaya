# GZ — Web Development Packages (Pricing Deck)

A 10-slide pricing presentation for landing-page / web-development services,
built to match the personal-brand design system extracted from this portfolio.

**Deliverable:** `GZ-Web-Development-Packages.pptx`

## Brand system used

| Token | Value |
|-------|-------|
| Ground | `#050505` |
| Text | `#FFFFFF` / secondary `#888888` |
| Accent | `#CE6E6E` (dusty rose) |
| Display font | Playfair Display |
| Body font | Inter |
| Motifs | animated grid background, numbered `01 / 02` markers, hairline borders |

> The `.pptx` references **Playfair Display** and **Inter**. Both are free Google Fonts.
> Install them on the presenting machine, or use PowerPoint's *File → Options → Save →
> Embed fonts in the file* so the deck travels with its fonts.

## Contents

1. Cover
2. The Offer — 3 value pillars
3. How It Works — 5-step process
4. Packages — 3 tiers side by side
5–7. Tier detail (Starter / Professional / Premium)
8. Comparison matrix
9. Every project includes + terms
10. Contact / CTA

## Pricing (editable in `build.cjs`)

| Tier | Price | Focus |
|------|-------|-------|
| Starter | ₡200,000 | Launch-ready landing page |
| Professional | ₡350,000 | Complete managed site *(recommended)* |
| Premium | From ₡500,000 | Full custom platform (backend, DB, auth, e-commerce) |

## Rebuilding

```bash
cd pricing-deck
npm install pptxgenjs sharp react react-dom react-icons   # tooling (git-ignored)
node render-icons.cjs                                      # regenerate assets/ic-*.png
node build.cjs                                             # -> GZ-Web-Development-Packages.pptx
```

`assets/` (grid backgrounds + icons) is committed, so `build.cjs` alone reproduces the
deck once `pptxgenjs` is installed. Edit copy, prices, and the deliverable ladder directly
in `build.cjs`.

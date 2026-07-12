# genXalpha — genxalpha.xyz

A static rebuild of [genxalpha.xyz](https://genxalpha.xyz) — *unlocking
potential across all generations* — built with [Astro](https://astro.build/),
following the same pattern as the other rebuilt sites (infinita.one etc.).

Writing lives on [Substack](https://genxalpha.substack.com); this site is the
brand home that introduces genXalpha and indexes the essays.

## Develop

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  layouts/Layout.astro         # shared <head>, header, footer wrapper
  components/Header.astro      # sticky nav (responsive)
  components/Footer.astro
  pages/index.astro            # Home — hero, pillars, featured essays
  pages/about.astro            # About John Bottomley / the brand
  pages/writing.astro          # Essay index (links to Substack)
  pages/privacy-policy.astro   # Privacy policy
  styles/global.css            # design tokens + base styles
public/                        # favicon, OG image, CNAME (genxalpha.xyz)
```

## Design tokens

Colors and type live as CSS custom properties at the top of
`src/styles/global.css` (`--ink`, `--paper`, `--orange`, fonts, spacing).
Adjust there to retheme globally. Type: Space Grotesk (display) + Inter (body).

## Deploying

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages with the
custom domain set by `public/CNAME`. It is **manual-dispatch only** while the
site lives in this repository, because the repo's Pages deployment currently
serves infinita.one. When porting genXalpha to its own repository:

1. Move this branch's contents to the new repo.
2. Update `base` in `astro.config.mjs` to the new repo name (Pages preview).
3. Add the default branch under `on.push.branches` in `deploy.yml`.
4. Point the `genxalpha.xyz` DNS (A/ALIAS + CNAME records) at GitHub Pages.

## TODO / placeholders

The original genxalpha.xyz blocks scrapers, so this rebuild was reconstructed
from the brand's public footprint (Substack, search snippets). Items to
confirm against the original:

- [ ] Compare copy/sections against the live genxalpha.xyz and adjust
- [ ] Drop in the real genXalpha logo artwork (currently a typographic mark)
- [ ] Confirm About-page career details ([Placeholder] notes in `about.astro`)
- [ ] Refresh the essay list in `writing.astro` (or wire up the Substack RSS
      feed at build time)
- [ ] Set the real last-updated date in `privacy-policy.astro`

# Atlas Roast

Warm coffee-shop theme: cream background, espresso text, terracotta accents and an elegant serif.

An AgentCMS theme. Install the ZIP from the admin: **Themes → Install theme**.

## Develop

```bash
npm install
npm run build     # type-check, build dist/bundle.js, pack atlas-roast.zip
npm run check     # validate the package + render a demo site with it
npm run preview   # render the demo site and take screenshots
npm run serve     # serve the demo site on http://localhost:4321/
```

Bump `version` in `manifest.json`, `src/manifest.tsx` and `package.json` for each release: installing a newer ZIP upgrades the theme in place.

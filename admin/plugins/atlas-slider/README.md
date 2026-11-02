# Atlas Slider

Automatic photo slider at the top of the home page: one slide per article, with arrows and dots.

An AgentCMS plugin. Install the ZIP from the admin: **Plugins → Install plugin**.

## Develop

```bash
npm install
npm run build     # type-check, build dist/bundle.js, pack atlas-slider.zip
npm run check     # validate the package + render a demo site with it
npm run preview   # render the demo site and take screenshots
npm run serve     # serve the demo site on http://localhost:4321/
```

Bump `version` in `manifest.json`, `src/manifest.tsx` and `package.json` for each release: installing a newer ZIP upgrades the plugin in place.

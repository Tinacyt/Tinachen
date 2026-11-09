# Tina Chen — personal website

Static site for GitHub Pages. Tina Chen — AI-native Product Manager at Microsoft. I build AI-native products. And help people find their voice.

- `index.html` loads `application.css`, `application.js` (the whole site, images bundled) and `boot.js` (browser host shim).
- To edit content or design, change the source project (src/app.ts, src/narrative.ts, src/styles.css, source-package/content.js), run `bun scripts/build.ts && bun scripts/build-pages.ts`, and commit the new `pages/` files.

Products are team efforts; this is a personal site, not an official Microsoft page.

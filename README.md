# jdaeheon.github.io

Static personal site generated from Markdown with a small TypeScript build script.

## Commands

```bash
npm install
npm run build
npm run serve
```

`npm run build` writes the deployable site to `out/`.

## Editing

- Update page content in `content/`.
- Update build orchestration in `src/build.ts`.
- Update content parsing and output helpers in `src/lib/`.
- Update page templates in `src/templates/`.
- Update browser behavior in `src/scripts/main.ts`.
- Update styling in `src/styles/global.css`.
- Put static assets in `public/`.
- Font files come from `@fontsource-variable/*` packages and are copied to `out/fonts/` during build.

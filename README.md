# muhammad-shoaib-gondal.github.io

Personal site for Muhammad Shoaib Gondal — researcher and engineer.

Live at [muhammad-shoaib-gondal.github.io](https://muhammad-shoaib-gondal.github.io/).

## Stack

React 19 · TypeScript · Vite · Tailwind CSS · Framer Motion

## Development

```bash
npm install
npm run dev      # dev server on http://localhost:5173
npm run build    # type-check and build to dist/
npm run preview  # preview the production build
```

## Content

All resume content lives in a single file: `src/data/content.ts`. Edit it to update
education, roles, projects, skills, and links — no component changes needed.

The resume PDF is served from `public/Shoaib_Gondal_Resume.pdf`.

## Deploying

`main` holds the source. The built site is published to the `gh-pages` branch,
which GitHub Pages serves:

```bash
npm run deploy
```

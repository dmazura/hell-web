# Hell-web (Astro SSG)

Minimal, image-first onepage built with **Astro (static output)** and **CSS-only** styling.  
The core visual is an **ImageBand** that keeps the foreground image sharp while extending it above/below with a blurred background and a fade to black.

## Requirements
- Node.js (recommended: 18+)

## Commands
- Install: `npm install`
- Dev: `npm run dev`
- Build: `npm run build`
- Preview: `npm run preview`

Note: scripts set `ASTRO_TELEMETRY_DISABLED=1` to avoid writing global telemetry config.

## Structure
- `src/pages/index.astro` – page composition (image bands + text blocks)
- `src/components/ImageBand.astro` – reusable image band component
- `src/components/TextBlock.astro` – reusable text container
- `src/styles/global.css` – global styles + ImageBand effect
- `circles-copy.md` – source text for the 9 circles (parsed at build time)
- `public/images/` – images used by the page (served from `/images/...`)

## Images
The page currently uses:
- `/images/00.png` … `/images/10.png`
- `/images/Tree.png` inserted between `00` and `01`

To replace images, drop new files into `public/images/` and update `src/pages/index.astro` (title → image mapping lives there).

## Image Band Effect
Each `.image-band` renders:
- a blurred extension layer (`::before`) reusing the same `--img`
- a multi-stop fade-to-black overlay (`::after`) only in the extension area
- a sharp foreground `<img>` with a feather mask so the boundary is invisible

The first band uses `class="image-band--first"` to disable the top extension + top feather.

## ImageBand API
`<ImageBand />` props:
- `src` (required), `alt` (required)
- `fit`: `"contain"` (default) or `"cover"`
- `height`: CSS length (default `auto` to keep aspect ratio without cropping)
- `extension`, `blur`, `brightness`, `saturate`: CSS values controlling the background extension look

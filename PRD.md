# Task: Image-first Onepage (Astro) with Image Bands & Fade Extensions

## Goal
Vytvořit **jednostránkový statický web** postavený na **velkých obrázcích** poskládaných **vertikálně pod sebou**, mezi nimiž jsou **textové bloky**.

Web je **image-first**: obrázky jsou hlavní vizuální prvek.
Každý obrázek je implementován jako **image band**, který se vizuálně **rozšiřuje nad a pod sebe** pomocí svých vlastních barev a plynule přechází do **černého pozadí**, přičemž **originální obrázek zůstává 100 % ostrý a nezměněný**.

Astro slouží pouze jako **statický základ projektu** – veškerý vizuální efekt musí být řešen **HTML + CSS only**.

---

## Technology & Constraints
- Framework: **Astro (SSG)**
- Rendering: **static HTML**
- Styling: **čisté CSS**
- JavaScript: **nepoužívat**
- Žádné externí knihovny
- Mobile-first, plně responzivní
- Produkční kvalita kódu

---

## Page Structure
Stránka je složena ze střídajících se sekcí:

1. `.image-band`
2. `.text-block`
3. `.image-band`
4. `.text-block`
…

---

## Image Band – Visual Requirements
Každý `.image-band` musí:

- zachovat foreground obrázek **zcela ostrý**
- použít **stejný obrázek** jako rozmazané pozadí pro extension
- vizuálně se rozšířit **nahoru i dolů** nad rámec samotného obrázku
- plynule **fadeovat do černé** na horním i dolním okraji
- mít plně viditelný střed (žádný overlay přes hlavní obraz)
- fungovat **per image** (každý band používá vlastní barvy)
- být plně responzivní

---

## Image Band – Technical Requirements
- Implementace **HTML + CSS only**
- Použít CSS custom property pro obrázek:
  - `--img: url("image.jpg")` nastavené přímo na `.image-band`
- Struktura vrstev:
  1. rozmazané pozadí (extension)
  2. gradient overlay (top/bottom fade)
  3. ostrý foreground obrázek

### Povinné CSS prvky
- `.image-band`
  - `position: relative`
  - `overflow: hidden`
  - `padding-block` nebo `min-height` pro prostor extension
- `.image-band::before`
  - `background-image: var(--img)`
  - `background-size: cover`
  - `background-position: center`
  - `filter: blur(50px) brightness(0.55)`
  - `transform: scale(1.2)`
  - vertikální overscan (`inset: -40% 0` nebo podobně)
- `.image-band::after`
  - lineární gradient:
    - černá nahoře
    - transparentní střed
    - černá dole
- `.image-band__img`
  - ostrý `<img>`
  - `object-fit: contain` nebo `cover`
  - jasně nad pozadím pomocí `z-index`

---

## Text Block Requirements
`.text-block`:
- max-width cca **800–900 px**
- center aligned layout
- výrazný vertikální spacing
- používá `<slot />` (v Astro komponentě)
- žádné vizuální efekty, jen čistá typografie

---

## Project Structure (Astro)

src/
├─ pages/
│   └─ index.astro
├─ components/
│   ├─ ImageBand.astro
│   └─ TextBlock.astro
└─ styles/
└─ global.css
public/
└─ images/

---

## Deliverables
1. Funkční Astro projekt
2. Reusable `.image-band` komponenta splňující výše uvedený efekt
3. Čisté, komentované CSS
4. Minimal HTML example s více image bandy a text blocky
5. Žádný JavaScript

---

## Nice to Have (Optional)
- CSS variables pro snadné ladění:
  - blur strength
  - brightness
  - extension height
- `prefers-reduced-motion` support
- možnost použít background image místo `<img>` bez změny API

---

## Non-Goals
- SPA frameworky
- CMS
- JavaScriptové animace
- third-party image efekty

---

## Outcome
Výsledkem má být **minimalistický, image-driven onepage web**, který:
- staví vizuál na velkých fotografiích
- má silný rytmus sekcí
- je rychlý, čistý a snadno rozšiřitelný
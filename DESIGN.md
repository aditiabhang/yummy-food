---
version: 1
name: Yummy Food — Sunset lamp
description: An original design for a family recipe site. A dark plum-brown kitchen lit by one sunset lamp — a single orange-to-pink glow band behind the hero and the recipe card — with warm off-white serif text, amber buttons, and a recipe card that is the same object on screen, under the Jump button, and on paper. Built for one-handed phone use by a parent cooking with a toddler underfoot.

colors:
  ground: "#241A1C"          # page background, dark plum-brown
  surface: "#33262A"         # cards, recipe card, nav
  surface-raised: "#3F3034"  # tags, inputs, stepper
  ink: "#F5E9E2"             # body text (14.2:1 on ground)
  muted: "#CDB8B2"           # meta, captions (9.0:1 on ground)
  faint: "#8F7A7E"           # disabled text, input borders (4.2:1)
  hairline: "#4A3A3F"        # dividers only, not control borders
  glow-start: "#F2A65A"      # lamp gradient, amber end
  glow-end: "#D95C7C"        # lamp gradient, pink end — decoration only, never text
  accent: "#F08A4B"          # primary button fill, active step numeral
  on-accent: "#241A1C"       # text on accent (6.8:1)
  link: "#F2A65A"            # links on ground (8.4:1) and surface (7.1:1)
  success: "#9FD3A8"         # "copied", "added" (10.0:1)
  error: "#FF9A8A"           # form errors (8.3:1)
  print-ink: "#1A1214"       # print stylesheet only
  print-ground: "#FFFFFF"

typography:
  display:          # recipe title in hero
    fontFamily: Literata
    fontSize: clamp(2.125rem, 1rem + 4.6vw, 4.5rem)  # 34–72px
    fontWeight: 500
    lineHeight: 1.0
    letterSpacing: -0.02em
  heading:          # section headings, card title
    fontFamily: Literata
    fontSize: clamp(1.75rem, 1.4rem + 1.6vw, 2.5rem)  # 28–40px
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: -0.01em
  lead:             # intro line under the title
    fontFamily: Literata
    fontSize: clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)  # 20–24px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  body:
    fontFamily: Literata
    fontSize: clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)  # 17–19px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0.005em
  label:            # tags, meta, "Jump to recipe", ingredient amounts
    fontFamily: system-ui
    fontSize: 0.875rem    # 14px, never below 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0.06em
    textTransform: uppercase
  numeral:          # step numbers, timers, servings
    fontFamily: system-ui
    fontSize: inherit
    fontWeight: 600
    fontVariantNumeric: tabular-nums
---

## Overview

Evening kitchen, sunset lamp on, dinner on the hob, phone propped against the fruit bowl. The page is dark and warm; the only bright thing is the lamp's glow on the wall. Everything the cook needs — time, servings, Jump to recipe — is reachable with a thumb.

The idea: **the family recipe card is the page.** The homepage is a box of cards, the Jump button lands on the card, and the print stylesheet prints the card and nothing else.

Visitor mode: Read. Most visitors arrive from Instagram on a phone, often with one hand. Stability and scanability beat spectacle.

Three commitments:
1. One glow per page. The gradient band appears exactly once, behind the hero. It never repeats on cards, buttons, or text.
2. Dark ground, warm ink, amber action. Nothing else competes for attention.
3. One serif, one system sans. Literata carries voice and reading; the system sans carries labels and numbers.

## Colors

### Ground and surfaces
- `ground #241A1C` — page. Dark plum-brown, not black. Black reads as a tech product.
- `surface #33262A` — nav bar, recipe card, homepage cards.
- `surface-raised #3F3034` — tags, inputs, the servings stepper. The third and last step; nothing is raised above it.

Elevation in this theme is lightness, not shadow. Ground → surface → surface-raised. Mechanically inverting a light theme is banned; these three were chosen as a set.

### Text
- `ink #F5E9E2` — all body text, headings, ingredient names.
- `muted #CDB8B2` — times, yields, captions, "last updated". Same face, softer ink; never smaller than 13px and never a lighter weight.
- `faint #8F7A7E` — disabled controls, input borders (passes 3:1 for controls).
- `hairline #4A3A3F` — dividers between ingredient rows and steps. Not for anything interactive (1.6:1).

### The glow
`radial-gradient(circle, #F2A65A 0%, #D95C7C 22%, transparent 60%)` — an amber core with a pink rim that fades into the ground, the way a sunset lamp throws on a wall. Placement: a circle behind the top-right corner of the hero photo slot, overhanging it, so it reads as light on the wall, not a border. Width ≈ 80% of the hero column on phones, 75% on desktop. No text ever sits on it.

Rules:
- No text sits on the glow. Title, lead and buttons sit on `ground`; the glow is behind the image slot only. (Pink end is 4.7:1 against ink — too tight for body.)
- The glow is never a button fill, a tag fill, a text fill, or a card border.
- One per page, including the homepage (behind the featured recipe).

### Action
- `accent #F08A4B` with `on-accent #241A1C` text — primary button, the active step numeral, the checked ingredient tick.
- `link #F2A65A` — inline links, underlined. Hover: underline goes `ink`.
- Focus ring: `2px solid #F2A65A`, `outline-offset: 3px`, on every control.

### Semantic
- `success #9FD3A8` and `error #FF9A8A`, always paired with text or an icon; colour is never the only signal.

### Verified contrast (WCAG, computed)
| Pair | Ratio |
|---|---|
| ink on ground | 14.2:1 |
| ink on surface | 12.2:1 |
| ink on surface-raised | 10.5:1 |
| muted on ground / surface / raised | 9.0 / 7.6 / 6.6:1 |
| on-accent on accent | 6.8:1 |
| link on ground / surface | 8.4 / 7.1:1 |
| faint on ground (control borders) | 4.2:1 |
| success, error on ground | 10.0, 8.3:1 |

## Typography

### Families
- **Literata** (OFL, self-hosted from `assets/fonts/`, variable: `wght 400–700`, `opsz`, plus italic). Fallback stack: `Charter, "Iowan Old Style", "Bitstream Charter", Georgia, serif`. `font-display: swap`; `size-adjust` on the fallback so swap does not reflow the recipe card.
- **System sans** `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` for labels, tags, amounts, step numbers, timers. Zero downloads. `font-variant-numeric: tabular-nums` wherever numbers line up.

No third family. No Google Fonts `<link>`, no preconnect to any font host.

### Scale (five sizes, far apart)
| Role | Size | Use |
|---|---|---|
| display | 34–72px, wt 500, lh 1.0, −0.02em | recipe title in the hero, one per page, max 2 lines |
| heading | 28–40px, wt 500, lh 1.1 | "Ingredients", "Method", homepage section titles, card title |
| lead | 20–24px, lh 1.35, max 40ch | the one-line intro under the title |
| body | 17–19px, lh 1.55, max 62ch | everything readable |
| label | 14px sans, caps, +0.06em | tags, meta, buttons, amounts |

Light type on dark is compensated on all three axes: body leading 1.55 (not 1.5), +0.005em tracking, and headings at 500 rather than 400.

### Rules
- Headings are not bold. Size and space make them confident; weight 500 is the ceiling.
- Paragraph rhythm by spacing (`p + p { margin-top: 0.9em }`), no indents.
- No centred paragraphs longer than three lines. No justified text.
- Step text is body size; the step numeral is the only thing that gets larger (heading size, sans, `accent`).
- Ingredient rows: amount in sans tabular, name in Literata. `1 ½ tsp` uses real fraction glyphs.

## Layout

### Spacing scale (4px base)
`--s-1: 4px · --s-2: 8px · --s-3: 12px · --s-4: 16px · --s-5: 24px · --s-6: 32px · --s-7: 48px · --s-8: 64px · --s-9: 96px`

Rhythm: tight inside a group (ingredient rows 12px apart), generous between groups (sections 48px on phones, 96px on desktop). One value repeated everywhere is a defect.

### Containers
- Page gutter: 20px phone, 32px tablet, 48px desktop.
- Content max width: 68rem.
- Prose measure: 62ch. Recipe card: max 40rem, centred.
- Mobile first. Breakpoints only where the layout actually changes: 640px (card grid 1 → 2), 960px (hero becomes two columns; ingredients become a sticky side column next to steps).

### Page structure — recipe page
1. Nav: wordmark left, "Recipes" and "About" right. 56px tall, `surface`.
2. Hero: title (display), lead, meta row (time · servings · one tag), primary button **Jump to recipe**, photo slot with the glow behind it.
3. Story: optional, max 3 short paragraphs. Can be skipped entirely by the Jump button.
4. Recipe card (`id="recipe"`): the printable object.
5. Email signup: one line + secondary button.
6. Footer: small, muted.

### Page structure — homepage
Nav · featured recipe (same hero pattern, glow behind its photo) · "Latest" grid of recipe cards · email signup · footer.

### Touch targets
Minimum 44×44px. The floating Jump button is 48px tall, pinned bottom-right on phones with `env(safe-area-inset-bottom)` respected; it hides once the recipe card is in view.

## Elevation & Depth
- Depth = surface lightness, three steps, documented above.
- Exactly one drop shadow on the site: the floating Jump button, `0 8px 24px rgba(0,0,0,0.4)`, so it reads as above the page.
- Cards do not lift, scale, or gain shadows on hover.
- The glow is a background gradient, not a `filter: blur()`; it costs nothing to scroll.

## Shapes
- Radius scale: `4px` (tags, checkboxes), `12px` (cards, buttons, inputs, photo slot), `999px` (floating Jump button only).
- Borders: 1px `hairline` between list rows; 1px `faint` on inputs. No borders on cards — surface lightness does the separation.
- Photo slots: `aspect-ratio: 4 / 5` on phones (Instagram-native), `3 / 2` on desktop. Until photos exist, the slot shows a `surface-raised` panel with a drawn-in-CSS plate (a circle and a ring), not a stock image.

## Components

### Buttons
- **Primary** — `accent` fill, `on-accent` text, label type, 48px tall, 12px radius, padding 0 24px. Hover (pointer: fine only): fill `#F2A65A`. Active: `transform: scale(0.97)`. One primary per screen: Jump to recipe.
- **Secondary** — transparent, 1px `faint` border, `ink` text. Hover: border `ink`. Used for Print, Email signup.
- **Text link** — `link` colour, underline offset 0.2em, thickness 0.07em. Hover: underline colour `ink`. No weight change on hover.
- **Floating Jump** — primary styling, pill radius, fixed bottom-right on phones only; a static primary button sits in the hero at every width.

### Tags and meta
Pill, `surface-raised`, label type in `muted`, 4px radius, 28px tall. Max three per recipe: time, difficulty, one from {toddler-approved, one-pan, nap-time, freezer}.

### Recipe card (the signature component)
`surface` panel, 12px radius, padding 24px (32px at ≥640px). In order:
1. Header: title (heading), yield and time in label type, servings stepper.
2. **Ingredients** (heading): a list, 12px row gap, hairline between rows. Each row: checkbox (CSS-drawn, 20px, tick in `accent`) · amount (sans tabular, `muted`) · name (Literata, `ink`). Amounts rescale with the stepper; the written amounts are the no-JS fallback.
3. **Method** (heading): ordered list. Each step: numeral (heading size, sans, `accent`) on the left, body text on the right, 24px between steps. Tapping a step marks it current (numeral stays `accent`, others go `muted`) so a cook can find their place after looking away.
4. Notes: body in `muted`, max 3 lines.
5. Footer row: Print (secondary), "Save for later" link.

At ≥960px the ingredients column becomes `position: sticky; top: 72px` beside the method.

### Servings stepper
`surface-raised` pill, − and + buttons 44px each, number in sans tabular `ink`. Writes `data-servings`; amounts recompute client-side. No JS → stepper hidden, written amounts stand.

### Inputs (email signup)
`surface-raised` fill, 1px `faint` border, `ink` text, 12px radius, 48px tall. Focus: ring as above. Error: border `error` + message text below. The signup is a link to the newsletter provider's hosted page, not an embedded form, so the site itself sets no cookies.

### Print (recipe card only)
`@media print`: `ground` → white, all text → `print-ink`, glow/nav/hero/story/signup/footer hidden, card borders become 1px black, checkboxes stay as empty squares, step numerals black. Page break avoided inside a step. Fits one A4/Letter page for a typical recipe.

## Motion

Budget: one signature moment, two choreographed entrances, press/hover feedback. Nothing else moves.

- **Signature: the lamp switches on.** On load, the glow fades from `opacity: 0` to `1` over 900ms `--ease-soft`, after a 150ms delay, once per page. That is the only loud move.
- **Hero entrance:** title, lead, button rise 18px with opacity, 90ms stagger, 800ms `--ease-out`. Max three elements.
- **Method entrance:** steps rise row by row on first scroll into view (IntersectionObserver, `unobserve` after), 60ms stagger. Ingredients do not animate; they are the thing the cook is reading.
- **Feedback:** button press 140ms scale 0.97; link underline colour 180ms; checkbox tick 140ms. Hover rules only under `(hover: hover) and (pointer: fine)`.
- **Tokens:** `--ease-out: cubic-bezier(0.22,1,0.36,1)`, `--ease-soft: cubic-bezier(0.33,1,0.68,1)`, `--t-press: 140ms`, `--t-hover: 180ms`, `--t-reveal: 800ms`. Animate only `transform` and `opacity`. Named properties, never `transition: all`.
- **Reduced motion:** glow and sections render in their finished state; press/hover colour changes stay.
- **No JS:** nothing is hidden; animation classes apply only under `html.js`.

## Do's and Don'ts

### Do
- Keep time and servings above the fold on phones.
- Let Jump to recipe land exactly on the card header.
- Write amounts with real fraction glyphs and tabular numerals.
- Put one photo per recipe at 4:5 for phones; mark the slot clearly when it's empty.
- Load only the Literata weights used (400, 500 upright; 400 italic).
- Verify every colour pair after any change; the table above is the floor.

### Don't
- No cream, terracotta, or light theme variant. The site is dark on purpose.
- No violet, indigo, or neon.
- No text on the glow; no gradient on text, buttons, tags, or borders.
- No second glow anywhere on a page.
- No Google Fonts link, no CDN, no third-party requests, no cookies.
- No hover lift, scale, or shadow on cards; no bounce or elastic easing.
- No same fade-up on every block; ingredients never animate.
- No bold headings; weight 500 is the ceiling.
- No centred long paragraphs, no justified text, no text smaller than 13px.
- No emoji in headings, no "Delicious!" / "Yummy in your tummy" copy, no stock-photo placeholders.
- No ads, no pop-ups, no cookie banner (there is nothing to consent to).

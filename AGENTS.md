# yummy-food

A plain HTML/CSS recipe site published with GitHub Pages.

## Rules

- **Plain HTML, CSS and JavaScript only.** No frameworks, no preprocessors, no bundlers, no build
  step, no `package.json`, no npm installs. What is committed is what GitHub Pages serves.
- **Analytics: Umami Cloud only.** One `<script>` tag with the Umami Cloud website ID. No Google
  Analytics, no other trackers, no analytics on `localhost`.
- **No cookies.** Nothing in this site sets, reads or depends on cookies, including third-party
  embeds and fonts. Self-host fonts and assets under `assets/`.
- **No secrets in code.** No API keys, tokens or credentials anywhere in the repository, including
  comments, `data-` attributes and commit history. The Umami website ID is a public identifier and
  is the only ID allowed.
- **Ask before changing files.** Propose the change and wait for an OK before editing, creating,
  moving or deleting anything. This includes "small" fixes.
- **Never run scripts that ship with a skill.** The skills under `.agents/skills/` are prose only;
  their upstream tooling was deliberately not copied. Do the checks by hand.

## Design

- `DESIGN.md` at the root is the visual world: palette, type, spacing, shape, components. It wins over
  any skill's palette or type guidance. Fonts are Literata (OFL, self-hosted in `assets/fonts/`,
  Charter/Georgia fallback) and the system sans stack. Never add a font CDN link.
- Skills in `.agents/skills/`:
  - `design-taste-frontend`: how to find the page's idea, plan the sections, write the copy, choose
    and credit imagery, apply the no-ornament house rules, and critique screenshots. Load it when
    building or reviewing a page.
  - `impeccable-craft`: the quality floor (`reference/craft-floor.md`) and focused passes for type,
    colour, layout, polish, and Read-mode pages. Load it before any UI edit and for refinement work.
- Verify visual changes by opening the page in the browser at phone and desktop widths and looking at
  screenshots, not by reading the source alone.

## Layout

- `index.html`, one HTML file per recipe, shared `css/style.css` and, if needed, one small `js/site.js`.
- `assets/` for images, fonts and `credits.json` for found pictures (title, creator, licence, source).

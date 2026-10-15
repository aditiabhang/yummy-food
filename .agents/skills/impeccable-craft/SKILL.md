---
name: impeccable-craft
description: Quality floor and focused refinement passes for an existing web page's typography, colour, layout and finish. Use when asked to polish, typeset, colorize, re-layout, critique or fix the craft of a page that already has a direction, or before any UI edit to check the bans and verification checklist. Not for choosing a new look (use design-taste-frontend) or for 3D or app shells.
license: MIT
metadata:
  source: https://github.com/pbakaus/impeccable (.agents/skills/impeccable, v4.6.0); six reference files copied, launcher, hooks, scripts and sub-agents removed
---

# Impeccable craft (reference-only adaptation)

Six prose references from the impeccable skill. The upstream skill drives a downloaded binary
(`scripts/impeccable`), installs editor hooks and spawns sub-agents; none of that is here and **this
project never runs skill scripts**. Every "mechanical scan" below is you reading CSS and screenshots.

`DESIGN.md` at the project root is the committed visual world. These passes refine inside it; a
change that would replace its palette or type is a redesign and needs the user's agreement first.

## When to read what

| Task | Read |
| --- | --- |
| Any UI edit, right before you start | [reference/craft-floor.md](reference/craft-floor.md): the verify list and the bans. |
| Recipe pages, guides, articles (the visitor reads) | [reference/mode-read.md](reference/mode-read.md) |
| Type looks arbitrary, hard to scan, or badly set | [reference/typeset.md](reference/typeset.md) |
| Colour is flat, noisy, or not carrying meaning | [reference/colorize.md](reference/colorize.md) |
| Spacing, grouping, order or responsiveness is wrong | [reference/layout.md](reference/layout.md) |
| Final finish pass before shipping | [reference/polish.md](reference/polish.md) |

## How to work

1. Read `DESIGN.md` and the page you are changing before editing.
2. Load the one reference that matches the task, plus `craft-floor.md`.
3. Build fully, then inspect once with screenshots at desktop and phone widths, fix everything that
   round shows, confirm with at most one more round, and stop. Open-ended self-QA burns the user's
   time doing worse what a focused review does better.
4. Report what changed, what you checked, and any craft-floor rule you knowingly left in place and why.

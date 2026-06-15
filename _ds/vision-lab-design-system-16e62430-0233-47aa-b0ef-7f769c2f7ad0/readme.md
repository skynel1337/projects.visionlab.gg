# Vision Lab — Design System

**Vision Lab** is a content & creative studio brand with a gaming / esports edge.
The identity pairs a polished **chrome "VL" monogram** and a bold **"VISION LAB"
wordmark** (the *O* swapped for a hand-drawn smiley) against a **near-black,
fine-grain canvas** lit by a single **hot orange** accent. The recurring props —
backlit keycaps, a chrome karambit, and an ASCII-rendered wordmark — give it a
tactile, mechanical-keyboard, "built-by-gamers" feel. The three words that drive
every decision: **minimalist · chrome · futurism**.

This project is the machine-readable design system: tokens, fonts, brand assets,
reusable React components, and full-screen UI kits.

---

## Sources

- **Figma — "Brandbook.fig"** (mounted virtual file). Page `Mini-Logobook-2`
  (guid `2035:2`) holds the live brand book: `Logo`, `Typeface`, `Colors`,
  social templates (`X-Vision-Lab`, `YT-Vision-Lab`, `LinkedIn-*`), profile
  pictures (`PFP_1..3`), backgrounds (`BG-16_9`, `BG-9_16`) and `Renders`.
- **Uploaded renders** — `Logo.png` (chrome VL), `Keys.png` (keycap wordmark),
  `Kerambit.png` (chrome blades), `Image 1/2.png` (ASCII wordmark texture),
  and two logo-animation clips (`.mp4` / `.webm`). All copied into `assets/`.

> No live URL was provided; recorded here in case the reader has access.

---

## Content fundamentals

How Vision Lab writes:

- **Voice:** confident, lowercase-leaning, punchy. Short declaratives over
  marketing fluff. It sounds like a creator talking to peers, not a corporation.
- **Casing:** UI labels and eyebrows are **ALL-CAPS with wide tracking**
  (`COLORS`, `DOWNLOAD`, `USE IT FOR HEADLINE`). Display headlines are set in the
  heavy display face, usually **Title Case or ALL CAPS**. Body copy is sentence
  case.
- **Person:** speaks as **"we" / the studio**, addresses the reader as **"you."**
  ("Use it for headline", "Download".)
- **Length:** terse. Labels are 1–3 words. Few full sentences in chrome itself.
- **Emoji:** essentially none in copy — **except the brand's own smiley glyph**,
  which is an identity mark (a hand-drawn smiley used in expressive lockups), not
  a casual emoji. Don't sprinkle other emoji. Note: the **Ø** character is **never**
  used anywhere in the brand — write the name as **VISION LAB**.
- **Numbers / jargon:** mechanical-keyboard & gaming references are on-brand
  (keycaps, switches, karambit). Avoid generic SaaS-speak.
- **Vibe:** premium hardware drop meets underground gaming. Cool, precise,
  a little playful (the smiley keeps it from being cold).

Examples from the brand book: `COLORS`, `DOWNLOAD`, `Use it for headline`,
`Use it for body text`, `Normalidad`, `DM Sans`.

---

## Visual foundations

- **Color:** a monochrome near-black system + **one** accent. Canvas is
  `#090909`–`#121212` (subtle vertical gradient, often a radial dark vignette).
  Type is white; muted text is `#777`. The three core values are **`#090909`
  (ink) · `#2C2C2C` (graphite) · `#FFFFFF` (white)**. The single accent is
  **orange `#ED6820`**. Never introduce a second bright hue.
- **Chrome:** the hero treatment, matched to the logo finish — a **graphite
  metal body** (`--gradient-chrome`, fairly uniform dark face) with **bright lit
  bevel edges** (`--edge-chrome`) and white type on top. Reserve chrome for the
  logo and rare hero moments; the rest of the UI stays flat matte dark.
- **Logo hierarchy:** (1) **Animated chrome** (`logo-anim-alpha.webm` / `logo-anim-black.mp4`) is the primary mark — use it looping wherever video is supported. (2) **Static chrome PNG** (`logo-vl-chrome.png`) for print, static export, small sizes. (3) **Flat white SVG** (`vl-monogram-white.svg`) only for 1-color constraints (embroidery, engraving, monochrome print) — never online.
- **Type:** display = **Normalidad Text Black** (heavy, tight `-0.04em`); body =
  **DM Sans**. Huge contrast between giant black headlines and small calm body.
- **Backgrounds:** near-black, **never pure flat** — always carry one of: the
  fine-grain texture (`grain-texture.jpg`, ~10% opacity, `color-dodge`), the faint
  **ASCII "VISION LAB" watermark** (`ascii-pattern.svg` / `wordmark-ascii.png`,
  ~5–10%), or a radial vignette. No photographic or colored-gradient backgrounds.
- **Spacing:** 8pt grid, generous negative space. Content breathes; chrome is sparse.
- **Corner radii:** restrained. Buttons & chips ~`7px`; cards ~`10–14px`. Nothing
  pill-shaped except true pills (tags/toggles).
- **Borders:** hairlines — `rgba(255,255,255,0.08–0.12)` — plus a **top inner
  highlight** (`--edge-top`) that fakes a lit chrome edge on dark surfaces.
- **Cards:** matte `#151515` fill, hairline border, deep soft shadow, optional
  top edge-highlight. No colored left-border accents, no glassy purple gradients.
- **Shadows:** deep and soft on near-black (`--shadow-md/lg/xl`), low-alpha stacks.
  Accent **glow** (`--glow-orange`) only on genuinely hot elements.
- **Transparency / blur:** overlays use `rgba(9,9,9,0.72)` + `blur(14px)`. Glass is
  rare and always dark, never light frosted.
- **Imagery vibe:** product renders on white-or-black seamless, cool metallic with
  warm orange spill. Studio-lit, high-contrast, no grain on the subjects themselves.
- **Motion:** mechanical and precise — like a keycap press. Quick `120–220ms`
  ease-out, **no bounce**. Press states **shrink slightly** (`scale .97`) and darken.
  Hover lightens the surface / lifts to the accent. The logo has a reveal animation
  (see `assets/logo-anim-*`).
- **Layout rules:** wordmark/monogram sits top-left or centered; eyebrow label above
  a big display headline; lots of dark void around the focal object.

---

## Iconography

- **No bespoke icon font ships with the brand book.** The system standardizes on
  **[Lucide](https://lucide.dev)** (loaded from CDN in components/kits) — thin
  `~1.75px` stroke, rounded joins. This matches the precise, minimal, hardware feel.
  If you need an icon, reach for Lucide first; flag any substitution.
- **Brand glyphs are assets, not icons:** the **smiley** glyph and the
  **chrome VL monogram** (`assets/vl-monogram.svg`, `assets/logo-vl-chrome.png`) are
  identity marks — use the real files, never redraw them.
- **Emoji:** not used as UI icons. The only "emoji-like" mark is the proprietary
  smiley. Don't substitute Unicode/emoji for Lucide glyphs.
- **Avatars / social:** profile renders live in `assets/pfp-render.png`; social
  banner crops are documented in the Figma `X / YT / LinkedIn` frames.

---

## Index / manifest

**Root**
- `styles.css` — global entry (import-only). Consumers link this.
- `readme.md` — this guide.
- `SKILL.md` — portable Agent-Skill wrapper.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`,
`effects.css`, `base.css` (all reached from `styles.css`).

**`assets/`** — `vl-monogram.svg`, `wordmark.svg`, `logo-vl-chrome.png`,
`logo-chrome-render.png`, `keys-visionlab.png`, `kerambit.png`, `render-1.png`,
`pfp-render.png`, `wordmark-ascii.png`, `ascii-pattern.svg`,
`ascii-texture-1/2.png`, `grain-texture.jpg`, `logo-anim-black.mp4`,
`logo-anim-alpha.webm`.

**`components/`** — reusable React primitives (see cards in the Design System tab):
`core/` Button · IconButton · Badge · Tag · Card · Input · Switch · Avatar.

**`ui_kits/`** — full-screen product recreations:
`brand-site/` (Vision Lab marketing site).

**Foundation cards** — `guidelines/` specimen HTML, surfaced in the Design System tab.

---

## Substitutions & caveats

- **Normalidad Text Black** (display) is a commercial Latinotype font and was **not
  provided**; the system substitutes **Archivo (900)** from Google Fonts. Swap the
  real webfonts into `tokens/fonts.css` + `--font-display` when licensed.
- **DM Sans** is loaded from Google Fonts (the exact brand body face).
- Icons use **Lucide** (CDN) as the standardized set; the brand book ships no icon font.

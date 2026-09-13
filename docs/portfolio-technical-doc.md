# Fawaz Ishola — Portfolio Technical Doc

## 1. Vision

A single-page, senior-software-engineer-level portfolio. Content-dense and credible (real shipped work, not filler), with a sleek, restrained UI — typography and spacing carrying the design, not decoration or effects.

## 2. Design Principles

Distilled from Vercel's internal design philosophy and the reference sites reviewed:

- **Monochrome first.** Color is used only when it carries meaning (state, action, data) — never decoratively.
- **Typography establishes hierarchy** before surfaces, borders, or color.
- **Default to stillness.** Motion only when it explains a state change or confirms an action — no scroll-triggered reveals on every section, no parallax, no auto-playing marquees.
- **One focal point per section.** The page should read as a field of composed relationships, not a stack of equally-weighted cards.
- **Reject generated-design reflexes:** no decorative gradients/glows/blobs/glass effects, no generic centered-hero-plus-card-grid, no icon tiles, no cards nested in cards, no badge/pill overuse, no all-caps eyebrows, no em dashes, no repeated metric boxes.
- **Squint test:** at a glance, the dominant point of each section should be obvious.

## 3. Reference Sites

| Site | Key takeaway |
|---|---|
| rauno.me/craft | Dated "craft log" of small interaction studies — proves ongoing technical curiosity beyond headline projects |
| ian.dev | Sparse, personality-forward copy; simple categorized navigation with search |
| patrickaltair.com | Numbered sections; video/GIF project previews instead of static screenshots; two-sentence bio |
| paulmurray.lol | Bullet-list self-description instead of paragraph bio; autoplay video previews; a small "easter egg" link |
| vercel.com/design | Source of the design principles above |
| mintlify.com | Real-name testimonials with title/company; animated usage counters (transferable pattern, not a portfolio itself) |
| habeebamoo.vercel.app | Single-page flow; hero splits backend vs. product identity; projects labeled by live domain instead of buttons; minimal experience section |
| abdullahiolaiwon.xyz | Projects tagged by category (Fintech, Compliance, etc.); "Organizing" section given equal weight to Experience; Roman-numeral footer year |
| laks.sh | Canvas/WebGL-driven interactive centerpiece — exact mechanism still to be defined |
| ridwantaiwo.com | Source of the terminal motif (typed intro, command-driven feel) and the blog structure — post list with title, date, author, one-line excerpt, and topic tags, plus a tag list at the bottom of the index. Its full terminal/hacker skin (emoji headers, `$` prompts, ASCII framing, green-on-black palette) was intentionally NOT carried over, since it conflicts with the chosen monochrome/restrained direction — only the underlying mechanic (typed text, command interaction, tagged post list) was adopted, restyled to fit |

## 4. Site Structure

1. **Hero** — name, role, one/two sentences splitting infrastructure-level vs. product-level work, availability status
   - **Signature interactive element: terminal system** (resolves the "signature interactive element" open item) — one unified system with three surfaces:
     1. **Typed hero intro** — on first load, a `whoami`-style sequence types out the bio character-by-character in monospace with a blinking cursor, then settles into the normal typographic layout
     2. **Command palette (⌘K)** — site-wide navigation: typing `projects`, `blog`, `contact`, etc. jumps to that section/page — a real functional payoff, not just decoration
     3. **Hidden easter-egg commands** inside the same palette (e.g. `sudo hire-me`, `coffee`, `whoami --verbose`) for visitors who explore further
   - Styling stays within the existing monochrome palette and Geist Mono — no green-on-black terminal colors or ASCII framing elsewhere on the site, so this stays one deliberate touch rather than a full theme change
2. **Featured Projects** (3–6) — title, category/domain tag, problem → approach → outcome, video/GIF preview, live + repo links
3. **Craft / Experiments** (optional) — dated log of smaller technical explorations, open-source contributions, tools built
4. **Experience** — company, role, dates only; no paragraphs
5. **Organizing / Community** (if applicable) — mentoring, talks, meetups, open-source community work, same visual weight as Experience
6. **Blog** — see section 4.1 below
7. **About** — 2–3 concrete sentences, placed near the bottom
8. **Contact** — plain mailto / direct links, resume, GitHub, LinkedIn, X; no contact form
9. **Footer** — one subtle personality detail

### 4.1 Blog

Structural pattern adopted from ridwantaiwo.com/blog, stripped of its terminal/hacker styling (emoji, `$` prompts, ASCII framing) to stay consistent with the chosen monochrome, typography-first design principle:

- Post list view: title (as the link), publish date, author (optional if single-author), a short one-sentence excerpt, and a small set of topic tags per post — no thumbnail images needed if the writing carries the post.
- A tag list/cloud at the bottom of the index for filtering by topic (e.g. distributed-systems, database, performance).
- Individual post page: title, date, tags, then the full write-up — written in MDX so code snippets and any interactive diagrams can be embedded inline.
- This effectively merges with the "Craft / Experiments" concept from section 3 — the blog can host both narrative deep-dives (post-mortems, architecture write-ups) and the shorter dated craft-log entries, rather than running them as two separate sections.

## 5. Tech Stack

- **Framework:** Next.js (App Router) + React + TypeScript
- **Hosting:** Vercel
- **Styling:** Tailwind CSS + a small custom design-token layer for spacing/type/color consistency
- **Typography:** Geist Sans + Geist Mono (via `next/font/google` or self-hosted)
- **Components:** shadcn/ui as an accessible base, restyled
- **Motion:** Framer Motion for micro-interactions; GSAP as an option for precise scroll sequencing
- **Signature interactive element:** terminal system (typed hero intro + ⌘K command palette + hidden commands) — a `cmdk`-style library (e.g. `cmdk` npm package) for the palette, plus a small custom typewriter-effect component for the hero, both built in React/TypeScript — no WebGL/Three.js needed for this approach
- **Content:** MDX for the Craft log/writeups; a local `data/projects.ts` (or JSON) file for project data — no CMS needed at this scale
- **Analytics:** Vercel Analytics or Plausible
- **Theme:** Single, properly executed dark theme (no visible light/dark toggle by default, per Vercel's restraint principle)

## 6. Icon / Brand Mark

- Monogram built from "F" and "I", constructed from simple geometric bars (no serifs/curves) so it stays legible at 16×16px favicon size.
- Angular version selected (minimal corner rounding) over the softer rounded-square version.
- Implementation: drop `icon.svg` / `apple-icon.png` into the Next.js `/app` folder (auto-handled by the App Router's metadata convention); generate 16×16, 32×32, and 180×180 sizes; reuse the same mark as a watermark in Open Graph share images.

## 7. Open Items

- Write the actual list of command-palette commands (real navigation + easter eggs) and the exact typed-intro script for the hero
- Finalize copy for hero, about, and each project case study
- Decide whether a Craft/Experiments log and Organizing section apply, based on Fawaz's actual body of work
- Source or finalize final monogram color/corner treatment before export

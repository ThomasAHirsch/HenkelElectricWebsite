# Henkel Electric Website

## Project overview
- Marketing site for Henkel Electric, Inc., a family-run electrical contractor in Lake County, IL
  (established 1975, incorporated 1979).
- Audience: homeowners and facilities managers, prospective clients
- Pages: About Us (home), Residential, Commercial, Contact Us.

## Tech stack & commands
- Plain HTML, CSS and vanilla JavaScript. No framework, no build step, no package manager.
- Fonts: Barlow and Barlow Condensed from Google Fonts (linked in each page's <head>).
- Don't add frameworks, libraries or npm dependencies without approval.

## Repo structure
```
index.html            About Us (home page)
residential.html      Residential services
commercial.html       Commercial services
contact.html          Contact Us form + info card
assets/
  css/styles.css      All site styles (one file)
  js/contact.js       Contact form handler (placeholder; see below)
  fonts/              Self-hosted Barlow + Barlow Condensed (.woff2) and their LICENSE.txt
  images/             logo.svg, ABC member badge, site photos
design/
  Henkel Electric Website Design.html   Exported design mockup (reference only)
CLAUDE.md, README.md
```

### Pages
- Each page is a complete, standalone HTML file. There's no build step or templating.
- The header (`.site-header`), footer (`.site-footer`) and CTA band are copied into all four
  pages. Change one, change all four, and keep them identical.
- Each page has its own inline SVG icon sprite (`<svg class="sprite">` with `<symbol id="i-…">`)
  holding only the icons that page uses. Icons are referenced with `<use href="#i-bolt">` etc.
  To use a new icon on a page, add its `<symbol>` to that page's sprite.
- Only contact.html loads JavaScript (`assets/js/contact.js`).

### CSS (`assets/css/styles.css`)
- Design tokens are CSS variables in `:root` (navy, amber, red, text and surface colors, font
  stacks). Use the variables; don't hard-code hex values.
- The file is organized in labeled sections: Icons, Type, Buttons, Placeholders, Header,
  Home (hero, trust bar, about, services, split, service area, reviews), Shared (CTA band, footer),
  Residential, Project galleries, Commercial, Contact, Reduced motion.
  Put new rules in the matching section.
- Desktop only for now: `body` has `min-width: 1200px`, and below that the page scrolls
  sideways. Mobile layouts are planned but not built yet.

### Assets
- Fonts are self-hosted via `@font-face` in styles.css. Don't add a Google Fonts link.
  Keep `assets/fonts/LICENSE.txt` with the font files.
- `assets/images/logo.svg` is the official logo and the favicon. Don't edit or redraw it.
- `ABCMemberBadge-white.png` has transparent margins that `.abc-badge` trims with negative
  margins. Keep that rule if the badge is resized.

### Placeholders
- Content that still needs real material (photos, reviews, project captions) is marked with
  the `.ph-tag` class and bracketed text like [Reviewer name]. Keep using that pattern.
- The contact form sends through Web3Forms (`contact.js`, `fetch` to api.web3forms.com),
  which emails henkelelectric@sbcglobal.net. It needs `WEB3FORMS_ACCESS_KEY` set in contact.js.

### design/
- `design/Henkel Electric Website Design.html` is a large (~2 MB) self-contained export of the
  mockups. Use it as the visual reference. Don't edit it or copy code from it into the site.
  
## Business facts (source of truth; don't change without the owner's OK)
- Phone: 847-838-3870 (always a tel: link)
- Email: henkelelectric@sbcglobal.net
- Address: 717 Charles Dr, Antioch, IL 60002
- Service area: Lake, Cook, McHenry and DuPage Counties, Illinois
- Motto: "No job or project is too big or too small."
- Credentials: Licensed · Insured · Bonded; ABC Member
- Service lists: [link to the file where the residential, commercial and specialized lists live]

## Content rules
- Never invent services, certifications, guarantees, awards, hours, prices,
  24/7/emergency service, or customer reviews.
- Anything we don't have yet stays a clearly labeled placeholder, like [Reviewer name].
- Voice: friendly, plain-spoken, local family business. Not corporate.
- Say "50+ years," not a fixed count that goes out of date.

## Design system
- Colors: navy #0A1A3F, amber #F5A623, red #D62B35, off-white #F3F5F9, white
- Red is only for action buttons (Get a Quote, Submit Request, Call Now).
- Amber text only on dark backgrounds. On light backgrounds, use an amber highlighter bar
  behind navy text, because amber text on white fails contrast.
- Type: Barlow Condensed 700–800 uppercase for headings; Barlow for body text.
- Logo: /assets/henkel-electric-logo.svg. Don't recolor or redraw it.
- Motifs: lightning bolt and orbit ring. Use them sparingly.
- Shared components: header, footer, CTA band, buttons, cards, section headers.
  Reuse these; don't create one-off versions.

## Mobile & accessibility
- Design for phones first. The tap-to-call button stays visible in the mobile header.
- Touch targets at least 44px; text contrast at least 4.5:1; real <button>/<a>/<label> elements.
- Visible amber focus ring on form inputs.

## Placeholders still open
- Photos, Google rating/reviews (to come from the Google API), project gallery captions,
  official ABC badge, live Google Map embed, contact form backend.

## Working agreements for Claude
- Ask before adding dependencies or changing business facts.
- Run [lint/build] before saying a change is done.
- Keep diffs small; don't reformat files you didn't otherwise change.
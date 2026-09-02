# Design system

Last reviewed: 2026-09-02

This document records maintained visual and accessibility intent. Exact selectors and dimensions remain authoritative in [`src/styles/global.css`](../src/styles/global.css) and the shared components.

## Visual direction

The interface is premium, professional and restrained: a marine technical-service company rather than yacht-charter or lifestyle advertising. Strong headings, generous negative space, precise borders and limited color keep attention on technical content and enquiry paths.

## Core tokens

Defined in the Tailwind `@theme` block:

| Token    | Value     | Use                                                          |
| -------- | --------- | ------------------------------------------------------------ |
| Navy     | `#0a1d2f` | Brand panels, headings, primary actions, structural accents. |
| Graphite | `#252b31` | Body text and dark neutral states.                           |
| Ivory    | `#f5f3ed` | Page background and light brand contrast.                    |

White and alpha variants of navy, graphite and ivory supply surfaces, borders and secondary text. New colors need contrast and system-level justification.

Tailwind's automatic source detection is retained for application code, while `docs/`, `.agents/skills/` and root Markdown are excluded in `global.css`. This prevents prose that happens to resemble a utility name from changing production CSS. The previously emitted `grayscale` utility is explicitly retained for output stability.

## Typography

- Body stack: Arial, Helvetica Neue, Helvetica and system sans-serif fallbacks.
- Display stack: Avenir Next, Segoe UI, Arial and system sans-serif fallbacks.
- Headings use the display stack, compact line height and restrained negative letter spacing.
- Eyebrows and metadata use smaller, bold, uppercase text with increased tracking.

There are no external font requests or repository `@font-face` declarations. Preserve that privacy/performance characteristic unless policy and implementation are deliberately changed.

## Layout and spacing

- `.site-container` is mobile-first: `min(100% - 2rem, 76rem)`, increasing side gutters at 48rem.
- Long-form and policy layouts use narrower reading widths rather than stretching to the site maximum.
- Sections normally use generous vertical padding, increasing at larger breakpoints.
- Layout shifts occur primarily at 40rem, 48rem, 64rem, 80rem and 88rem. Do not treat these as general Tailwind defaults; inspect the relevant component rule.
- Grids start as one column, grow to two or three only where content remains readable.

## Shared patterns

### Navigation

The sticky white header uses a native mobile disclosure and, at 80rem, a desktop navigation with a native `<details>` Services menu. Active routes use `aria-current="page"`. The language switcher uses real route equivalents and must make homepage fallbacks explicit in accessible labels.

### Buttons and links

`.button` provides a minimum 2.75rem target height. Current variants are light, outline-light, navy and outline-navy. Primary actions use filled contrast; secondary actions use outlines. Text actions use a restrained arrow or underlined link treatment.

### Cards

Service, calculator, Contact and knowledge cards use clean borders, low or no shadow and flex/grid layouts that keep actions aligned. Avoid ornamental glass, gradients or luxury-lifestyle effects that conflict with the technical brand.

### Heroes

Home, service and Survey Tips heroes combine an appropriate technical/marine image with a navy overlay where text is placed over photography. Inner service heroes remain shorter than the homepage. Hero imagery is supporting context, not evidence of a specific survey finding.

### Breadcrumbs and CTAs

[`src/components/Breadcrumbs.astro`](../src/components/Breadcrumbs.astro) renders visible navigation and `BreadcrumbList` schema from the same items. Final CTA sections normally use navy backgrounds, ivory text and one primary plus optional secondary/direct-contact actions.

## Survey Tips archive

The archive is a compact technical knowledge library, not a promotional featured-content grid:

- no “Featured Survey Advice” or Featured Guide block;
- newest articles first;
- mobile cards stack the infographic above the text;
- from 40rem, archive rows are horizontal with the infographic at left and text at right;
- the controlled portrait frame uses a 4:5 aspect ratio;
- archive and article infographics use `object-fit: contain` and preserve the complete graphic;
- important text inside an infographic must never be cropped;
- grayscale treatment is intentional in the current site presentation.

See [Yacht Survey Tips](features/YACHT_SURVEY_TIPS.md).

## Images

- Keep original dimensions in markup to reserve layout space.
- Use descriptive localized alt text for meaningful images; decorative overlays are hidden.
- Load above-the-fold hero/article images eagerly with high fetch priority; lazy-load archive/card images.
- Do not use prominent artificial people or invented yacht-inspection scenes as factual illustration.
- Store stable site assets under [`public/images`](../public/images); the supplied logo lives under [`public/logo`](../public/logo).

## Accessibility

- Maintain WCAG AA contrast, semantic headings and keyboard-accessible native controls.
- Keep the skip link, main-content target, visible focus indicator and reduced-motion rules.
- Do not communicate active state, validation or meaning by color alone.
- Preserve meaningful link labels and localized accessible names.
- Respect touch target sizes and reading widths.
- Verify mobile and desktop behavior directly; screenshots can support visual review but are not automated tests.

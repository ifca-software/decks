# IFCA Sales Decks

Interactive HTML slide decks for IFCA's product portfolio. Zero dependencies — just HTML, CSS, and vanilla JS served by GitHub Pages.

**Live:** [ifca-software.github.io/decks](https://ifca-software.github.io/decks/)

## Structure

```
index.html                    Landing page — deck browser
shared/
  css/                        Design tokens, components, slide system
  js/                         Slide engine, animations, tooltips, glossary
  img/                        Shared images (IFCA logo, etc.)
fmx/
  healthcare/index.html       FMX for Hospitals
  corporate-offices/index.html FMX for Corporate Offices
scripts/
  push-all.sh                 Push submodules + root
```

## Adding a new deck

1. Create `product/segment/index.html` (always 2 levels deep)
2. Include shared CSS/JS via `../../shared/css/*.css` and `../../shared/js/*.js`
3. Add `<meta name="deck-sibling">` tags for inter-deck navigation
4. Add deck-specific glossary terms via `DeckGlossary.addTerms({})`
5. Add a card to `index.html`

## Conventions

- Every deck is exactly 2 levels deep so relative paths are always `../../shared/`
- Slides use `data-title` for menu, `data-animate` + `data-delay` for entrance animations
- Jargon terms: `<span class="jargon" data-term="TERM">TERM</span>`
- Images: `shared/img/` for shared, `product/segment/img/` for deck-specific

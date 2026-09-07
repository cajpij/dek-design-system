# Původní CSS z www.dek.cz

Staženo 7. 9. 2026 z produkce, beze změn. Slouží jako zdroj tokenů a jako
reference v Storybooku (`Reference/Porovnání s dek.cz`). **Do aplikace se
neimportuje** — `index.css` má globální pravidla (html, body, a, h1…), která
by přebila motiv.

| Soubor | Zdroj | Velikost |
| --- | --- | --- |
| `index.css` | `/css-production/index.css?v=1788505365` | 343 kB, 3 269 pravidel, 76 media queries |
| `font.css` | `/fonts/font.css` | @font-face Roboto 300–700 (soubory fontů nejsou součástí — používáme `@fontsource/roboto`) |
| `fontello.css` | `/fonts/fontello/css/fontello.css?v=1741094506` | ikonový font (soubory nejsou součástí) |
| `vue/vue.cart.css` | `/js-production/src/vue-cart/vue.cart.css` | košík |
| `vue/vue.product-slider.css` | `/js-production/src/vue-product-slider/…` | slider produktů |
| `vue/vue.branch-modal.css` | `/js-production/src/vue-branch-modal/…` | výběr pobočky |
| `vue/vue.login-modal.css` | `/js-production/src/vue-login-modal/…` | přihlášení |

## Jak se to stahovalo

Web blokuje stahování z cloudu (403), takže CSS šlo ven přes prohlížeč:
načíst www.dek.cz, `fetch()` všech `<link rel=stylesheet>` v kontextu stránky,
`Blob` → download. Skript je v `scripts/extract-css.js` — spustí se v konzoli
prohlížeče na www.dek.cz a stáhne `dek-css-dump.json`; `scripts/unpack-css.mjs`
z něj vyrobí tuhle složku.

## Jak číst index.css

Pojmenování je BEM s prefixy:

- `dek-*` — sdílené primitivy: `dek-button-*`, `dek-input`, `dek-checkbox`, `dek-radio`, `dek-switch`, `dek-tabs`, `dek-table`, `dek-search`, `dek-mega-menu`, `dek-slider`, `dek-user`
- `com-*` — komponenty stránek: `com-header`, `com-footer`, `com-homepage`, `com-products-grid`, `com-product-price-eshop`, `com-availability-product`, `com-filters`, `com-pagination`, `com-message`, `com-modal`, `com-registration`
- `comd-*` — komponenty detailu/menu: `comd-product-view--detail` (160 pravidel, nejrozsáhlejší), `comd-menu-breadcrumbs`, `comd-article-content`, `comd-category-description`

Tokeny (`:root`) jsou na začátku souboru. Co z nich vzniklo, je v `src/tokens/dek.tokens.ts`.

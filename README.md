# DEK Design System

React komponenty pro www.dek.cz postavené na [MUI](https://mui.com/material-ui/), s tokeny a motivem vytaženými z produkčního CSS webu. Dokumentace a živé ukázky ve Storybooku.

```bash
npm install
npm run storybook        # http://localhost:6006
npm run build-storybook  # statický export do storybook-static/
```

## Co v repu je

| Kde | Co |
| --- | --- |
| `src/tokens/dek.tokens.ts` | Barvy (`:root` proměnné webu 1:1), typografie, rozměry, breakpointy |
| `src/theme/dekTheme.ts` | MUI motiv. Každý override odkazuje na CSS třídu, ze které vychází |
| `src/theme/DekThemeProvider.tsx` | `ThemeProvider` + `CssBaseline` + Roboto — jediné, co aplikace přidá |
| `src/components/` | Button (tóny red/green/blue/gray), AvailabilityBadge, Price, ProductCard, Message, Header, Footer + stories pro čisté MUI (formuláře, záložky, tabulka, stránkování, drobečky) |
| `src/reference/` | Originální markup + originální CSS vedle MUI verze |
| `src/vendor/dek.cz/` | Stažené CSS z webu, beze změn (viz README tam) |
| `scripts/` | Jak CSS stáhnout znovu, až se web změní |
| `.github/workflows/storybook.yml` | Build a nasazení Storybooku na GitHub Pages při push do `main` |

## Použití v aplikaci

```tsx
import { DekThemeProvider, Button, ProductCard } from 'dek-design-system'

<DekThemeProvider>
  <Button tone="green">Do košíku</Button>
</DekThemeProvider>
```

## Odkud jsou hodnoty a co je odhad

Všechno z `https://www.dek.cz/css-production/index.css?v=1788505365` (7. 9. 2026). Přesně převzaté: barvy, Roboto a řezy, velikosti h1–h4 včetně responzivních, `html { font-size: 112.5% }` nad 1200 px, tlačítka (padding, rámeček, radius, hover a active barvy, disabled opacity), inputy, checkbox/radio (zelené), záložky, tabulka, stránkování, zprávy, drobečky, kontejner 1540 px.

Odhad (web to nedefinuje nebo to nejde vyčíst): velikosti `small`/`large` tlačítek, `h5`/`h6`, `caption`, stín karty při hoveru, rozložení patičky, logo (na webu je obrázek — tady je zástupné „D“).

## Aktualizace, až se web změní

1. Otevřít www.dek.cz, do konzole vložit `scripts/extract-css.js` → stáhne `dek-css-dump.json`
2. `npm run unpack-css ~/Downloads/dek-css-dump.json`
3. Projít `Reference/Porovnání s dek.cz` ve Storybooku — kde se strany rozejdou, upravit `dekTheme.ts`

## Nasazení

Push do `main` spustí workflow, které postaví Storybook a nasadí ho na GitHub Pages. V nastavení repozitáře je potřeba jednou zapnout **Settings → Pages → Source: GitHub Actions**.

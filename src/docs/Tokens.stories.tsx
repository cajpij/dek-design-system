import type { Meta, StoryObj } from '@storybook/react-vite'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { dekColors, dekBreakpoints, dekShape, dekSpacing, dekTypography } from '../tokens/dek.tokens'

const meta = { title: 'Tokeny', tags: ['autodocs'] } satisfies Meta
export default meta

const GROUPS: { title: string; keys: (keyof typeof dekColors)[] }[] = [
  { title: 'Značka', keys: ['brandPrimary', 'brandSecondary'] },
  { title: 'Červená', keys: ['red', 'redLight', 'redDark', 'redHover', 'redActive'] },
  { title: 'Zelená', keys: ['green', 'greenLight', 'greenLight2', 'greenLighter', 'greenDark', 'greenHover', 'greenActive'] },
  { title: 'Modrá', keys: ['blue', 'blueLight', 'blueLighter', 'blueLightest', 'blueDark', 'blueHover', 'blueActive'] },
  { title: 'Ostatní', keys: ['purple', 'yellow', 'yellowLight', 'yellowLighter', 'pink'] },
  { title: 'Šedá', keys: ['gray', 'grayMedium', 'grayLight', 'grayLighter', 'grayLightest', 'neutral100', 'neutral800', 'white', 'black'] },
  { title: 'Stavové', keys: ['indicatorOpen', 'indicatorClosed'] },
]

function Swatch({ name, value }: { name: string; value: string }) {
  return (
    <Box sx={{ width: 150 }}>
      <Box sx={{ height: 64, bgcolor: value, border: '1px solid', borderColor: 'divider', borderRadius: 1 }} />
      <Typography sx={{ fontSize: '.8rem', fontWeight: 700, mt: 0.5 }}>{name}</Typography>
      <Typography sx={{ fontSize: '.8rem', color: 'text.secondary', fontFamily: 'ui-monospace, Menlo, monospace' }}>{value}</Typography>
    </Box>
  )
}

/** Přesně `:root` proměnné z index.css. Názvy kopírují web (`--gray-lightest` → `grayLightest`). */
export const Barvy: StoryObj = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {GROUPS.map((g) => (
        <Box key={g.title}>
          <Typography variant="h4" sx={{ mb: 1.5 }}>{g.title}</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {g.keys.map((k) => <Swatch key={k} name={k} value={dekColors[k]} />)}
          </Box>
        </Box>
      ))}
    </Box>
  ),
}

/** Roboto 300/400/500/700. Základ 16 px, nad 1200 px 18 px (html { font-size: 112.5% }). Nadpisy v rem, řádkování 1.2. */
export const Typografie: StoryObj = {
  render: () => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 760 }}>
      <Typography variant="h1">Nadpis h1 — 2 rem, 700</Typography>
      <Typography variant="h2">Nadpis h2 — 1,7 rem, 700</Typography>
      <Typography variant="h3">Nadpis h3 — 1,3 rem, 700</Typography>
      <Typography variant="h4">Nadpis h4 — 1,1 rem, 700</Typography>
      <Typography variant="body1">
        Body1 — 1 rem, řádkování 1,5. Stavebniny DEK jsou největším prodejcem stavebních materiálů v České republice. Roboto v řezech 300, 400, 500 a 700.
      </Typography>
      <Typography variant="body2">Body2 / small — 0,875 rem. Pomocný text, popisky, drobečky.</Typography>
      <Typography variant="caption">Caption — 0,7 rem.</Typography>
      <Box component="table" sx={{ mt: 2, borderCollapse: 'collapse', '& td, & th': { border: '1px solid', borderColor: 'divider', p: 1, textAlign: 'left', fontSize: '.875rem' } }}>
        <thead><tr><th>Prvek</th><th>Desktop (&gt; 980)</th><th>Tablet (≤ 980)</th><th>Mobil (≤ 500)</th></tr></thead>
        <tbody>
          <tr><td>h1</td><td>{dekTypography.headings.h1.rem} rem</td><td>{dekTypography.headings.h1.remTablet} rem</td><td>{dekTypography.headings.h1.remMobile} rem</td></tr>
          <tr><td>h2</td><td>{dekTypography.headings.h2.rem} rem</td><td>{dekTypography.headings.h2.remTablet} rem</td><td>{dekTypography.headings.h2.remMobile} rem</td></tr>
          <tr><td>html</td><td>18 px (&gt; 1200)</td><td colSpan={2}>16 px</td></tr>
        </tbody>
      </Box>
    </Box>
  ),
}

/** Rozměry, zaoblení a breakpointy. Web má 76 různých media queries — tady jsou ty, na kterých se mění základ. */
export const Rozmery: StoryObj = {
  render: () => (
    <Box sx={{ display: 'grid', gap: 3, maxWidth: 640, '& dl': { m: 0, display: 'grid', gridTemplateColumns: 'max-content 1fr', columnGap: 3, rowGap: 0.75 }, '& dt': { fontWeight: 700 }, '& dd': { m: 0, fontFamily: 'ui-monospace, Menlo, monospace' } }}>
      <Box>
        <Typography variant="h4">Mezery</Typography>
        <dl>
          <dt>--gutter</dt><dd>{dekSpacing.gutter} px</dd>
          <dt>.container max-width</dt><dd>{dekSpacing.containerMaxWidth} px</dd>
          <dt>.container padding</dt><dd>0 {dekSpacing.containerPaddingRem} rem (nad 1580 px žádný)</dd>
          <dt>--min-width</dt><dd>{dekSpacing.minWidth} px</dd>
          <dt>MUI spacing(1)</dt><dd>8 px</dd>
        </dl>
      </Box>
      <Box>
        <Typography variant="h4">Zaoblení</Typography>
        <dl>
          <dt>tlačítka, inputy, stránkování</dt><dd>{dekShape.borderRadius} px</dd>
          <dt>checkbox, karty produktů</dt><dd>{dekShape.borderRadiusSmall} px</dd>
        </dl>
      </Box>
      <Box>
        <Typography variant="h4">Breakpointy (MUI)</Typography>
        <dl>
          {Object.entries(dekBreakpoints).map(([k, v]) => <><dt key={k + 'k'}>{k}</dt><dd key={k + 'v'}>{v} px</dd></>)}
        </dl>
      </Box>
    </Box>
  ),
}

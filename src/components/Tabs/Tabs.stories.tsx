import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'

/** .dek-tabs: záložky vedle sebe, šedé, vybraná bílá. Bez indikátoru. */
const meta = { title: 'Komponenty/Tabs', tags: ['autodocs'] } satisfies Meta
export default meta

function Demo() {
  const [v, setV] = useState(0)
  const panels = ['Popis', 'Parametry', 'Dokumenty', 'Hodnocení']
  return (
    <Box sx={{ maxWidth: 720 }}>
      <Tabs value={v} onChange={(_, x) => setV(x)} aria-label="Detail produktu">
        {panels.map((p, i) => <Tab key={p} label={p} id={`tab-${i}`} aria-controls={`panel-${i}`} />)}
      </Tabs>
      <Box role="tabpanel" id={`panel-${v}`} aria-labelledby={`tab-${v}`} sx={{ p: 2, border: 1, borderTop: 0, borderColor: 'divider' }}>
        <Typography>Obsah záložky „{panels[v]}“.</Typography>
      </Box>
    </Box>
  )
}
export const Default: StoryObj = { render: () => <Demo /> }

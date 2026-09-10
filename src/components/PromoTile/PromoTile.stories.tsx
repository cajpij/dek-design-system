import type { Meta, StoryObj } from '@storybook/react-vite'
import Box from '@mui/material/Box'
import { PromoTile } from './PromoTile'
import { BOTTOM_BANNERS, HOME_BANNERS } from '../../pages/data'

const meta = { title: 'Komponenty/PromoTile', component: PromoTile, tags: ['autodocs'], args: { title: 'Katalog stavebnin DEK 2026' } } satisfies Meta<typeof PromoTile>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = { decorators: [(S) => <Box sx={{ width: 300 }}><S /></Box>] }

/** Čtveřice, jak stojí na úvodní stránce pod nadpisem „Vybrali jsme pro vás“. */
export const CtvericeZHomepage: Story = {
  render: () => (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
      {[HOME_BANNERS[3], ...BOTTOM_BANNERS].map((b) => (
        <PromoTile key={b.alt} title={b.alt} imageUrl={b.img} />
      ))}
    </Box>
  ),
}

/** Bez obrázku — dlaždice si poradí i s prostým textem. */
export const BezObrazku: Story = { args: { imageUrl: undefined }, decorators: [(S) => <Box sx={{ width: 300 }}><S /></Box>] }

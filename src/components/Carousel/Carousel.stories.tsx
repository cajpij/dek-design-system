import type { Meta, StoryObj } from '@storybook/react-vite'
import Box from '@mui/material/Box'
import { Carousel } from './Carousel'
import { BRANDS, HOME_BANNERS, MAIN_BANNER } from '../../pages/data'

const meta = { title: 'Komponenty/Carousel', component: Carousel, tags: ['autodocs'] } satisfies Meta<typeof Carousel>
export default meta
type Story = StoryObj<typeof meta>

const banner = (b: { alt: string; img: string }) => (
  <Box component="img" src={b.img} alt={b.alt} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
)

/** Hlavní slider úvodní stránky (.dek-slider--BANNER_HOMEPAGE) — čtyři bannery, přepínané záložkami pod nimi. */
export const HlavniSlider: Story = {
  args: {
    ariaLabel: 'Akce a novinky',
    slides: [
      { label: 'MEGA AKCE', content: banner(MAIN_BANNER) },
      ...HOME_BANNERS.slice(0, 3).map((b) => ({ label: b.alt, content: banner(b) })),
    ],
  },
}

/** Pás výrobců (.dek-slider--MANUFACTURES_HOMEPAGE) — šipky po stranách, bez záložek. */
export const PasVyrobcu: Story = {
  args: {
    variant: 'arrows',
    height: 110,
    ariaLabel: 'Výrobci',
    slides: [0, 6, 12].map((from) => ({
      content: (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 2, width: '100%', px: 3 }}>
          {BRANDS.slice(from, from + 6).map((b) => (
            <Box key={b.name} sx={{ height: 72, display: 'grid', placeItems: 'center', border: '1px solid #dfdfdf', borderRadius: '3px', p: 1 }}>
              {b.img ? <Box component="img" src={b.img} alt={b.name} sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} /> : <Box component="span" sx={{ fontWeight: 700, fontSize: '.8rem', color: '#666' }}>{b.name}</Box>}
            </Box>
          ))}
        </Box>
      ),
    })),
  },
}

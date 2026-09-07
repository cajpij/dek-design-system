import type { Meta, StoryObj } from '@storybook/react-vite'
import Box from '@mui/material/Box'
import { ProductCard } from './ProductCard'

const meta = {
  title: 'Komponenty/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  args: {
    name: 'Asfaltový pás DEKGLASS G200 S40',
    code: '1010101045',
    brand: 'DEK',
    price: 1289,
    priceWithoutVat: 1065.29,
    unit: 'role',
    availability: 'skladem',
    availabilityDetail: 'na 54 pobočkách',
  },
  decorators: [(Story) => <Box sx={{ maxWidth: 280 }}><Story /></Box>],
} satisfies Meta<typeof ProductCard>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}
export const SeSlevou: Story = { args: { price: 999, originalPrice: 1289, priceWithoutVat: 825.62 } }
export const Nedostupny: Story = { args: { availability: 'nedostupne', availabilityDetail: undefined } }

/** Mřížka jako .com-items-grid--col-5 */
export const Mrizka: Story = {
  decorators: [(Story) => <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 2 }}><Story /><Story /><Story /><Story /><Story /></Box>],
}

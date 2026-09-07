import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProductRow } from './ProductRow'
import { LISTING } from '../../pages/data'

const meta = { title: 'Komponenty/ProductRow', component: ProductRow, tags: ['autodocs'], args: LISTING[0] } satisfies Meta<typeof ProductRow>
export default meta
type Story = StoryObj<typeof meta>
export const Playground: Story = {}
export const NaObjednavku: Story = { args: LISTING[2] }
export const Nedostupny: Story = { args: LISTING[4] }

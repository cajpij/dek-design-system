import type { Meta, StoryObj } from '@storybook/react-vite'
import { Price } from './Price'

const meta = {
  title: 'Komponenty/Price',
  component: Price,
  tags: ['autodocs'],
  args: { value: 1289, withoutVat: 1065.29, unit: 'ks', size: 'medium' },
} satisfies Meta<typeof Price>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}
export const SeSlevou: Story = { args: { value: 999, original: 1289, withoutVat: 825.62, size: 'large' } }

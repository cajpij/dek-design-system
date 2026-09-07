import type { Meta, StoryObj } from '@storybook/react-vite'
import { Header } from './Header'

const meta = {
  title: 'Vzory/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  args: { cartCount: 3 },
} satisfies Meta<typeof Header>
export default meta
type Story = StoryObj<typeof meta>

export const Nepřihlášený: Story = {}
export const Přihlášený: Story = { args: { userName: 'Jana Nováková', cartCount: 12 } }

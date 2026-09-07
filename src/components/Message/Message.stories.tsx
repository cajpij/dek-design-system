import type { Meta, StoryObj } from '@storybook/react-vite'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import { Message } from './Message'

const meta = {
  title: 'Komponenty/Message',
  component: Message,
  tags: ['autodocs'],
  args: { severity: 'info', children: 'Ve čtvrtek 28. 9. mají všechny pobočky zavřeno.' },
} satisfies Meta<typeof Message>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}
export const Varianty: Story = {
  render: () => (
    <Stack spacing={1}>
      <Message severity="info">
        Nový ceník platí od 1. 10. <Link href="#">Podrobnosti</Link>
      </Message>
      <Message severity="warning">Kvůli údržbě bude e-shop v neděli 2:00–4:00 nedostupný.</Message>
      <Message severity="success">Objednávka byla odeslána.</Message>
      <Message severity="error">Platbu se nepodařilo ověřit.</Message>
    </Stack>
  ),
}

import type { Meta, StoryObj } from '@storybook/react-vite'
import Stack from '@mui/material/Stack'
import { AvailabilityBadge } from './AvailabilityBadge'

const meta = {
  title: 'Komponenty/AvailabilityBadge',
  component: AvailabilityBadge,
  tags: ['autodocs'],
  args: { status: 'skladem', detail: 'na 54 pobočkách' },
} satisfies Meta<typeof AvailabilityBadge>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}
export const Stavy: Story = {
  render: () => (
    <Stack spacing={1}>
      <AvailabilityBadge status="skladem" detail="na 54 pobočkách" />
      <AvailabilityBadge status="na-objednavku" detail="do 5 dnů" />
      <AvailabilityBadge status="nedostupne" />
    </Stack>
  ),
}

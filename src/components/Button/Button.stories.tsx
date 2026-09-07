import type { Meta, StoryObj } from '@storybook/react-vite'
import Stack from '@mui/material/Stack'
import { Button } from './Button'

const meta = {
  title: 'Komponenty/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    tone: { control: 'select', options: ['red', 'green', 'blue', 'gray'] },
    variant: { control: 'select', options: ['contained', 'outlined', 'text'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
  args: { children: 'Do košíku', tone: 'green', variant: 'contained', size: 'medium', disabled: false },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

/** Všechny barvy z webu vedle sebe. Hover ztmaví, aktivní ještě víc — jako .dek-button-*:hover/:active. */
export const Tony: Story = {
  render: () => (
    <Stack direction="row" spacing={1.5} useFlexGap sx={{ flexWrap: 'wrap' }}>
      <Button tone="red">Koupit (.dek-button-red)</Button>
      <Button tone="green">Do košíku (.dek-button-green)</Button>
      <Button tone="blue">Zjistit dostupnost (.dek-button-blue)</Button>
      <Button tone="gray">Zrušit (.dek-button-gray)</Button>
      <Button variant="outlined">Bílé (.dek-button-white)</Button>
      <Button variant="text">Odkaz (.dek-button-link)</Button>
    </Stack>
  ),
}

export const Velikosti: Story = {
  render: () => (
    <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
      <Button size="small">Malé</Button>
      <Button>Výchozí</Button>
      <Button size="large">Velké</Button>
    </Stack>
  ),
}

/** [class*=dek-button][disabled] { opacity: .5; cursor: not-allowed } */
export const Disabled: Story = {
  render: () => (
    <Stack direction="row" spacing={1.5}>
      <Button tone="red" disabled>Koupit</Button>
      <Button tone="green" disabled>Do košíku</Button>
      <Button variant="outlined" disabled>Bílé</Button>
    </Stack>
  ),
}

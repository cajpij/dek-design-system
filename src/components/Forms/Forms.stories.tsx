import type { Meta, StoryObj } from '@storybook/react-vite'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import MenuItem from '@mui/material/MenuItem'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Stack from '@mui/material/Stack'
import Switch from '@mui/material/Switch'
import TextField from '@mui/material/TextField'
import { Button } from '../Button/Button'

/**
 * Formulářové prvky jsou čisté MUI s motivem DEK: .dek-input (rámeček gray-light, radius 4,
 * padding .375rem .625rem), .dek-checkbox a .dek-radio (zelené po zaškrtnutí), .dek-switch.
 */
const meta = { title: 'Komponenty/Formuláře', tags: ['autodocs'] } satisfies Meta
export default meta
type Story = StoryObj

export const TextovaPole: Story = {
  render: () => (
    <Stack spacing={2} sx={{ maxWidth: 420 }}>
      <TextField label="E-mail" placeholder="jana@firma.cz" fullWidth />
      <TextField label="Telefon" defaultValue="+420 " helperText="Používáme jen pro doručení." fullWidth />
      <TextField label="Poznámka pro řidiče" multiline minRows={3} fullWidth />
      <TextField label="Pobočka" select defaultValue="praha" fullWidth>
        <MenuItem value="praha">Praha – Hostivař</MenuItem>
        <MenuItem value="brno">Brno – Slatina</MenuItem>
        <MenuItem value="ostrava">Ostrava – Hrabová</MenuItem>
      </TextField>
      <TextField label="Chyba" defaultValue="123" error helperText="Zadejte platné IČO." fullWidth />
      <TextField label="Disabled" defaultValue="nelze měnit" disabled fullWidth />
    </Stack>
  ),
}

export const Zaskrtavaci: Story = {
  render: () => (
    <Stack spacing={3}>
      <FormControl>
        <FormLabel>Doprava</FormLabel>
        <RadioGroup defaultValue="pobocka">
          <FormControlLabel value="pobocka" control={<Radio />} label="Osobní odběr na pobočce" />
          <FormControlLabel value="dek" control={<Radio />} label="Doprava DEK" />
          <FormControlLabel value="ppl" control={<Radio />} label="PPL" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Souhlasy</FormLabel>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Souhlasím s obchodními podmínkami" />
        <FormControlLabel control={<Checkbox />} label="Chci dostávat novinky e-mailem" />
        <FormControlLabel control={<Checkbox disabled />} label="Nedostupná volba" />
      </FormControl>
      <FormControlLabel control={<Switch defaultChecked />} label="Zobrazit ceny s DPH" />
    </Stack>
  ),
}

export const CelyFormular: Story = {
  render: () => (
    <Stack component="form" spacing={2} sx={{ maxWidth: 480 }} onSubmit={(e) => e.preventDefault()}>
      <TextField label="Jméno a příjmení" fullWidth required />
      <TextField label="E-mail" type="email" fullWidth required />
      <TextField label="Heslo" type="password" fullWidth required />
      <FormControlLabel control={<Checkbox />} label="Souhlasím s obchodními podmínkami" />
      <Stack direction="row" spacing={1.5}>
        <Button tone="green" type="submit">Registrovat</Button>
        <Button variant="outlined" type="button">Zrušit</Button>
      </Stack>
    </Stack>
  ),
}

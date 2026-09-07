import type { Meta, StoryObj } from '@storybook/react-vite'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Pagination from '@mui/material/Pagination'
import Radio from '@mui/material/Radio'
import Stack from '@mui/material/Stack'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import TextField from '@mui/material/TextField'
import { Button } from '../components/Button/Button'
import { Message } from '../components/Message/Message'
import { Compare } from './DekCss'

/**
 * Originální markup a CSS z www.dek.cz vedle MUI verze se stejným motivem.
 * Když se dvě strany rozejdou, je to buď chyba v motivu, nebo změna na webu — obojí stojí za opravu.
 */
const meta = { title: 'Reference/Porovnání s dek.cz', parameters: { layout: 'padded' } } satisfies Meta
export default meta

export const Tlacitka: StoryObj = {
  render: () => (
    <Compare
      original={
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a className="dek-button-red" role="button" href="#">Koupit</a>
          <a className="dek-button-green" role="button" href="#">Do košíku</a>
          <a className="dek-button-blue" role="button" href="#">Dostupnost</a>
          <a className="dek-button-gray" role="button" href="#">Zrušit</a>
          <a className="dek-button-white" role="button" href="#">Bílé</a>
          <a className="dek-button-link" role="button" href="#">Odkaz</a>
          <a className="dek-button-green disabled" role="button" aria-disabled="true" href="#">Disabled</a>
        </div>
      }
      mui={
        <Stack direction="row" spacing={1.5} useFlexGap sx={{ flexWrap: 'wrap' }}>
          <Button tone="red">Koupit</Button>
          <Button tone="green">Do košíku</Button>
          <Button tone="blue">Dostupnost</Button>
          <Button tone="gray">Zrušit</Button>
          <Button variant="outlined">Bílé</Button>
          <Button variant="text">Odkaz</Button>
          <Button tone="green" disabled>Disabled</Button>
        </Stack>
      }
    />
  ),
}

export const Formulare: StoryObj = {
  render: () => (
    <Compare
      original={
        <div style={{ display: 'grid', gap: 12, maxWidth: 360 }}>
          <input className="dek-input" placeholder="E-mail" />
          <label className="dek-checkbox">
            <input type="checkbox" role="checkbox" defaultChecked style={{ position: 'absolute', opacity: 0 }} />
            <span className="dek-checkbox__check" />
            <span className="dek-checkbox__label">Souhlasím s podmínkami</span>
          </label>
          <label className="dek-radio">
            <input type="radio" role="radio" defaultChecked />
            <span className="dek-radio__check" />
            <span className="dek-radio__label">Osobní odběr</span>
          </label>
          <div className="dek-group">
            <input className="dek-input" placeholder="Hledat" />
            <a className="dek-button-red" role="button" href="#">Hledat</a>
          </div>
        </div>
      }
      mui={
        <Stack spacing={1.5} sx={{ maxWidth: 360 }}>
          <TextField placeholder="E-mail" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Souhlasím s podmínkami" />
          <FormControlLabel control={<Radio checked />} label="Osobní odběr" />
          <Stack direction="row">
            <TextField placeholder="Hledat" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px 0 0 4px' } }} />
            <Button tone="red" sx={{ borderRadius: '0 4px 4px 0' }}>Hledat</Button>
          </Stack>
        </Stack>
      }
    />
  ),
}

export const Zalozky: StoryObj = {
  render: () => (
    <Compare
      original={
        <div className="dek-tabs" style={{ maxWidth: 480 }}>
          <div className="dek-tabs__title active">Popis</div>
          <div className="dek-tabs__title">Parametry</div>
          <div className="dek-tabs__title">Dokumenty</div>
        </div>
      }
      mui={
        <Tabs value={0} sx={{ maxWidth: 480 }}>
          <Tab label="Popis" />
          <Tab label="Parametry" />
          <Tab label="Dokumenty" />
        </Tabs>
      }
    />
  ),
}

export const Strankovani: StoryObj = {
  render: () => (
    <Compare
      original={
        <div className="com-pagination" style={{ justifyContent: 'flex-start' }}>
          <a className="com-pagination__link" href="#">1</a>
          <a className="com-pagination__link active" href="#">2</a>
          <a className="com-pagination__link" href="#">3</a>
          <span>…</span>
          <a className="com-pagination__link" href="#">12</a>
        </div>
      }
      mui={<Pagination count={12} page={2} shape="rounded" />}
    />
  ),
}

export const Zpravy: StoryObj = {
  render: () => (
    <Compare
      original={
        <div style={{ display: 'grid', gap: 8 }}>
          <div className="com-message"><div className="container"><span className="message">Ve čtvrtek mají všechny pobočky zavřeno.</span></div></div>
          <div className="com-message warning"><div className="container"><span className="message">E-shop bude v neděli 2:00–4:00 nedostupný.</span></div></div>
        </div>
      }
      mui={
        <Stack spacing={1}>
          <Message severity="info">Ve čtvrtek mají všechny pobočky zavřeno.</Message>
          <Message severity="warning">E-shop bude v neděli 2:00–4:00 nedostupný.</Message>
        </Stack>
      }
    />
  ),
}

import { useState } from 'react'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import { Button } from '../Button/Button'
import { QuantityInput } from '../QuantityInput/QuantityInput'
import { AvailabilityBadge, type Availability } from '../AvailabilityBadge/AvailabilityBadge'
import { dekColors } from '../../tokens/dek.tokens'

const czk = new Intl.NumberFormat('cs-CZ', { style: 'currency', currency: 'CZK' })

export interface ProductDetailProps {
  name: string
  shortDescription: string
  code: string
  catalogCode: string
  brand: string
  labels?: string[]
  images?: string[]
  unitPrice: number
  unitPriceWithoutVat: number
  unitLabel: string
  packPrice: number
  packPriceWithoutVat: number
  packLabel: string
  packContains: string
  availability: Availability
  availabilityDetail?: string
  description: string
  parameters: [string, string][]
  documents: { title: string; type: string }[]
  promo?: string
}

/**
 * Detail produktu (.comd-product-view--detail): galerie vlevo, název, štítky, krátký popis, kódy,
 * cenový box (.com-product-price-eshop.detail), dostupnost, množství + Do košíku,
 * pod tím záložky popis / Informace o ceně / dokumenty / parametry / hodnocení (.dek-tabs).
 */
export function ProductDetail(p: ProductDetailProps) {
  const [qty, setQty] = useState(1)
  const [tab, setTab] = useState(0)
  const tabs = ['popis', 'Informace o ceně', `dokumenty ${p.documents.length}`, 'parametry', 'hodnocení']
  return (
    <Box>
      <Typography variant="h1" sx={{ mb: 2 }}>{p.name}</Typography>
      {p.promo ? (
        <Box sx={{ bgcolor: dekColors.yellowLighter, border: `1px solid ${dekColors.yellow}`, borderRadius: '3px', px: 2, py: 1, mb: 2, fontWeight: 700, fontSize: '.9rem', textTransform: 'uppercase' }}>
          {p.promo}
        </Box>
      ) : null}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 3fr' }, gap: 4 }}>
        <Box>
          <Box sx={{ aspectRatio: '1', bgcolor: dekColors.grayLightest, borderRadius: '3px', display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
            {p.images?.[0] ? <Box component="img" src={p.images[0]} alt="" sx={{ width: '100%', height: '100%', objectFit: 'contain' }} /> : <Typography sx={{ color: 'text.disabled' }}>obrázek produktu</Typography>}
          </Box>
          <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
            {(p.images?.length ? p.images : [1, 2]).map((_, i) => <Box key={i} sx={{ width: 64, height: 64, bgcolor: dekColors.grayLighter, borderRadius: '3px', border: i === 0 ? `2px solid ${dekColors.red}` : '2px solid transparent' }} />)}
          </Box>
        </Box>

        <Box>
          {p.labels?.length ? (
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1.5 }}>
              {p.labels.map((l) => <Chip key={l} label={l} size="small" sx={{ bgcolor: dekColors.greenLighter, color: dekColors.greenDark, fontWeight: 700 }} />)}
            </Box>
          ) : null}
          <Typography sx={{ mb: 1.5 }}>{p.shortDescription}</Typography>
          <Typography sx={{ fontSize: '.85rem', color: 'text.secondary' }}>Číslo položky: <strong>{p.code}</strong> · Katalogový kód: <strong>{p.catalogCode}</strong></Typography>
          <Typography sx={{ fontSize: '.85rem', color: 'text.secondary', mb: 3 }}>Výrobky značky: <Link href="#">{p.brand}</Link></Typography>

          <Paper variant="outlined" sx={{ borderRadius: '3px', p: 3, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
            <Box>
              <Typography sx={{ fontSize: '.8rem', color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '.06em' }}>Cena s DPH</Typography>
              <Typography sx={{ fontSize: '2rem', fontWeight: 700, lineHeight: 1.1 }}>{czk.format(p.unitPrice)}</Typography>
              <Typography sx={{ fontSize: '.85rem', color: 'text.secondary' }}>za {p.unitLabel}</Typography>
              <Typography sx={{ mt: 1, fontWeight: 700 }}>{czk.format(p.packPrice)} <Typography component="span" sx={{ fontSize: '.85rem', color: 'text.secondary', fontWeight: 400 }}>za {p.packLabel}</Typography></Typography>
              <Typography sx={{ mt: 1.5, fontSize: '.8rem', color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '.06em' }}>Cena bez DPH</Typography>
              <Typography sx={{ fontSize: '.9rem' }}>{czk.format(p.unitPriceWithoutVat)} za {p.unitLabel} · {czk.format(p.packPriceWithoutVat)} za {p.packLabel}</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <AvailabilityBadge status={p.availability} detail={p.availabilityDetail} />
              <Link href="#" underline="hover" sx={{ fontSize: '.85rem' }}>Vyberte si prodejnu</Link>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <QuantityInput value={qty} unit={p.packLabel} onChange={setQty} />
                <Button tone="green" sx={{ flex: 1, height: 40, whiteSpace: 'nowrap' }} disabled={p.availability === 'nedostupne'}>Do košíku</Button>
              </Box>
              <Typography sx={{ fontSize: '.8rem', color: 'text.secondary' }}>
                {qty} {p.packLabel} / {p.packContains} — <strong>{czk.format(qty * p.packPrice)}</strong> s DPH
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>

      <Box sx={{ mt: 5 }}>
        <Tabs value={tab} onChange={(_, v) => setTab(v)} aria-label="Detail produktu">
          {tabs.map((t, i) => <Tab key={t} label={t} id={`pd-tab-${i}`} aria-controls={`pd-panel-${i}`} />)}
        </Tabs>
        <Box role="tabpanel" id={`pd-panel-${tab}`} aria-labelledby={`pd-tab-${tab}`} sx={{ p: 3, border: 1, borderTop: 0, borderColor: 'divider' }}>
          {tab === 0 ? <Typography sx={{ maxWidth: '72ch' }}>{p.description}</Typography> : null}
          {tab === 1 ? (
            <Typography sx={{ maxWidth: '72ch' }}>Uvedená cena je veřejná cena bez přihlášení. Po přihlášení firemním účtem se zobrazí vaše zákaznická cena. Ceny na pobočkách se mohou lišit.</Typography>
          ) : null}
          {tab === 2 ? (
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none', display: 'grid', gap: 1 }}>
              {p.documents.map((d) => (
                <Box component="li" key={d.title} sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, py: 1, borderBottom: 1, borderColor: 'divider' }}>
                  <Box><Typography sx={{ fontSize: '.8rem', color: 'text.secondary' }}>{d.type}</Typography><Typography sx={{ fontWeight: 700 }}>{d.title}</Typography></Box>
                  <Button variant="outlined" size="small">Stáhnout</Button>
                </Box>
              ))}
            </Box>
          ) : null}
          {tab === 3 ? (
            <Box component="table" sx={{ borderCollapse: 'collapse', width: '100%', maxWidth: 640, '& td': { py: 1, px: 1.5, borderBottom: 1, borderColor: 'divider', fontSize: '.95rem' }, '& td:first-of-type': { color: 'text.secondary', width: '45%' } }}>
              <tbody>{p.parameters.map(([k, v]) => <tr key={k}><td>{k}</td><td>{v}</td></tr>)}</tbody>
            </Box>
          ) : null}
          {tab === 4 ? <Typography sx={{ color: 'text.secondary' }}>0,0 · hodnotilo 0 uživatelů. Přidávat hodnocení může pouze přihlášený zákazník.</Typography> : null}
        </Box>
      </Box>
    </Box>
  )
}
export default ProductDetail

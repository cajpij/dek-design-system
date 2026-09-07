import { useState } from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Button } from '../Button/Button'
import { QuantityInput } from '../QuantityInput/QuantityInput'
import { AvailabilityBadge, type Availability } from '../AvailabilityBadge/AvailabilityBadge'
import { dekColors } from '../../tokens/dek.tokens'

const czk = new Intl.NumberFormat('cs-CZ', { style: 'currency', currency: 'CZK' })

export interface ProductRowProps {
  name: string
  code: string
  href?: string
  imageUrl?: string
  /** cena za základní měrnou jednotku (m², kg…) s DPH */
  unitPrice: number
  unitLabel: string
  /** cena za balení (role, pytel…) s DPH */
  packPrice: number
  packLabel: string
  packContains: string
  availability: Availability
  availabilityDetail?: string
  onAddToCart?: (qty: number) => void
}

/**
 * Řádek produktu ve výpisu kategorie (.comd-product-view--long): obrázek vlevo, název,
 * dvě ceny (za m² a za balení), dostupnost, množství + Do košíku a přepočet „celkem s DPH“.
 */
export function ProductRow({ name, code, href = '#', imageUrl, unitPrice, unitLabel, packPrice, packLabel, packContains, availability, availabilityDetail, onAddToCart }: ProductRowProps) {
  const [qty, setQty] = useState(1)
  return (
    <Paper variant="outlined" component="article" sx={{ borderRadius: '3px', p: 2, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '120px 1fr 180px 280px' }, gap: 2.5, alignItems: 'start' }}>
      <Box sx={{ aspectRatio: '1', bgcolor: dekColors.grayLightest, borderRadius: '3px', overflow: 'hidden', display: 'grid', placeItems: 'center' }}>
        {imageUrl ? <Box component="img" src={imageUrl} alt="" sx={{ width: '100%', height: '100%', objectFit: 'contain' }} /> : <Typography sx={{ fontSize: '.75rem', color: 'text.disabled' }}>bez obrázku</Typography>}
      </Box>
      <Box>
        <Link href={href} underline="hover" sx={{ color: dekColors.gray, fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.3 }}>
          {name}
        </Link>
        <Typography sx={{ fontSize: '.8rem', color: 'text.secondary', mt: 0.5 }}>Číslo položky: {code}</Typography>
        <Box sx={{ mt: 1.5 }}>
          <AvailabilityBadge status={availability} detail={availabilityDetail} />
        </Box>
        <Link href="#" underline="hover" sx={{ display: 'inline-block', mt: 0.5, fontSize: '.85rem' }}>
          Vyberte si prodejnu
        </Link>
      </Box>
      <Box>
        <Typography sx={{ fontSize: '1.4rem', fontWeight: 700, lineHeight: 1.1 }}>{czk.format(unitPrice)}</Typography>
        <Typography sx={{ fontSize: '.8rem', color: 'text.secondary' }}>cena za {unitLabel} s DPH</Typography>
        <Typography sx={{ mt: 1, fontWeight: 700 }}>{czk.format(packPrice)}</Typography>
        <Typography sx={{ fontSize: '.8rem', color: 'text.secondary' }}>cena za {packLabel} s DPH</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <QuantityInput value={qty} unit={packLabel} onChange={setQty} />
          <Button tone="green" onClick={() => onAddToCart?.(qty)} disabled={availability === 'nedostupne'} sx={{ flex: 1, height: 40, whiteSpace: 'nowrap' }}>
            Do košíku
          </Button>
        </Box>
        <Typography sx={{ fontSize: '.8rem', color: 'text.secondary' }}>
          do košíku přidáte <strong>{qty} {packLabel}</strong> / <strong>{packContains}</strong> — <strong>{czk.format(qty * packPrice)}</strong> celkem s DPH
        </Typography>
      </Box>
    </Paper>
  )
}
export default ProductRow

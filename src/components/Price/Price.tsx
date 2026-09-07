import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const czk = new Intl.NumberFormat('cs-CZ', { style: 'currency', currency: 'CZK', maximumFractionDigits: 2 })

export interface PriceProps {
  /** Cena s DPH */
  value: number
  /** Cena bez DPH — zobrazí se menším písmem pod hlavní cenou */
  withoutVat?: number
  /** Původní cena před slevou — přeškrtnutá */
  original?: number
  unit?: string
  size?: 'medium' | 'large'
}

/** Cena jako v .com-product-price-eshop: velká cena s DPH, pod ní bez DPH, sleva přeškrtnutá. */
export function Price({ value, withoutVat, original, unit = 'ks', size = 'medium' }: PriceProps) {
  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1, flexWrap: 'wrap' }}>
        <Typography component="span" sx={{ fontSize: size === 'large' ? '1.7rem' : '1.3rem', fontWeight: 700, lineHeight: 1.2 }}>
          {czk.format(value)}
        </Typography>
        <Typography component="span" sx={{ color: 'text.secondary', fontSize: '.875rem' }}>
          / {unit} s DPH
        </Typography>
        {original ? (
          <Typography component="span" sx={{ color: 'text.secondary', fontSize: '.875rem', textDecoration: 'line-through' }}>
            {czk.format(original)}
          </Typography>
        ) : null}
      </Box>
      {withoutVat ? (
        <Typography sx={{ color: 'text.secondary', fontSize: '.875rem' }}>{czk.format(withoutVat)} bez DPH</Typography>
      ) : null}
    </Box>
  )
}

export default Price

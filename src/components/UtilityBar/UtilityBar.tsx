import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import { dekColors } from '../../tokens/dek.tokens'

export interface UtilityBarProps {
  /** Popisek vlevo před telefonem. */
  label?: string
  phone?: string
  storesLabel?: string
  storesHref?: string
  /** Odkaz vpravo. Když je prodejna vybraná, web tu ukazuje její název. */
  storePickerLabel?: string
  onStorePick?: () => void
}

/**
 * Nejvyšší lišta hlavičky (.com-header.top) — nad logem a vyhledáváním:
 * vlevo zákaznické centrum s telefonem a seznamem prodejen, vpravo výběr prodejny.
 *
 * Z produkčního CSS: pozadí `--white`, `margin-top: 5px`; obsah má
 * `border-bottom: 1px solid --gray-lighter`, `column-gap: 1rem`, `padding-bottom: 10px`
 * a `font-size: .875rem`. Zákaznické centrum (.customer-centrum) je `--gray-medium`
 * o velikosti `.9rem`, nezalamuje se a jeho odkazy nemají podtržení.
 */
export function UtilityBar({
  label = 'Zákaznické centrum',
  phone = '510 000 100',
  storesLabel = 'Seznam prodejen',
  storesHref = '#',
  storePickerLabel = 'Vyberte si prodejnu',
  onStorePick,
}: UtilityBarProps) {
  return (
    <Box component="aside" aria-label="Kontakt a prodejny" sx={{ bgcolor: dekColors.white, mt: '5px' }}>
      <Container>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            columnGap: '1rem',
            pb: '10px',
            fontSize: '.875rem',
            borderBottom: `1px solid ${dekColors.grayLighter}`,
          }}
        >
          <Box
            sx={{
              flex: '1 1 0',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              color: dekColors.grayMedium,
              fontSize: '.9rem',
              whiteSpace: 'nowrap',
            }}
          >
            <Box component="span">{label}</Box>
            <Link href={`tel:${phone.replace(/\s/g, '')}`} underline="none" sx={{ color: dekColors.grayMedium, fontWeight: 700 }}>
              {phone}
            </Link>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link href={storesHref} underline="none" sx={{ color: dekColors.grayMedium, '&:hover': { color: dekColors.red } }}>
              {storesLabel}
            </Link>
            <Link
              component="button"
              type="button"
              onClick={onStorePick}
              underline="none"
              sx={{ color: dekColors.red, fontWeight: 700, cursor: 'pointer', border: 0, background: 'none', font: 'inherit' }}
            >
              {storePickerLabel}
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
export default UtilityBar

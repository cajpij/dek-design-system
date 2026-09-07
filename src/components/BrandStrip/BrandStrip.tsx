import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { dekColors } from '../../tokens/dek.tokens'

export interface BrandStripProps {
  title: string
  subtitle?: string
  /** Značky z pásu na homepage; kde má web logo, odkazuje se přímo na něj. */
  brands: { name: string; img?: string }[]
  moreLabel?: string
}

/** „BEZMÁLA 400 KVALITNÍCH VÝROBCŮ“ (.com-homepage__manufacturers): mřížka log značek + odkaz. Loga jsou tady jen textová. */
export function BrandStrip({ title, subtitle, brands, moreLabel = 'Všechny značky' }: BrandStripProps) {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h2" sx={{ textTransform: 'uppercase', letterSpacing: '.04em', mb: 0.5 }}>{title}</Typography>
      {subtitle ? <Typography sx={{ color: 'text.secondary', mb: 3 }}>{subtitle}</Typography> : null}
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 2 }}>
        {brands.map((b) => (
          <Box key={b.name} sx={{ height: 72, border: `1px solid ${dekColors.grayLighter}`, borderRadius: '3px', display: 'grid', placeItems: 'center', p: 1 }}>
            {b.img ? (
              <Box component="img" src={b.img} alt={b.name} loading="lazy" sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            ) : (
              <Box component="span" sx={{ fontWeight: 700, color: dekColors.grayMedium, letterSpacing: '.06em', textTransform: 'uppercase', fontSize: '.8rem' }}>{b.name}</Box>
            )}
          </Box>
        ))}
      </Box>
      <Link href="#" underline="hover" sx={{ display: 'inline-block', mt: 3, fontWeight: 700 }}>{moreLabel} →</Link>
    </Container>
  )
}
export default BrandStrip

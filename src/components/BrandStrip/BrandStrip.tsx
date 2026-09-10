import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Button } from '../Button/Button'
import { Carousel } from '../Carousel/Carousel'
import { dekColors } from '../../tokens/dek.tokens'

export interface BrandStripProps {
  title: string
  subtitle?: string
  /** Značky z pásu na homepage; kde má web logo, odkazuje se přímo na něj. */
  brands: { name: string; img?: string }[]
  moreLabel?: string
  moreHref?: string
  /** Statická mřížka místo slideru — hodí se, když má být vidět všechno naráz. */
  static?: boolean
  /** Kolik log je vidět najednou. Web má položku 180 px širokou, takže se jich při 1440 vejde osm. */
  perSlide?: number
}

/**
 * „BEZMÁLA 400 KVALITNÍCH VÝROBCŮ“ (.com-homepage__manufacturers · .dek-slider--MANUFACTURES_HOMEPAGE).
 *
 * Naměřeno na www.dek.cz 10. 9. 2026 při okně 1440: celý pás je jedno pole s rámečkem
 * 1 px --gray-lighter a zaoblením 4 px, vysoké 182 px. Uvnitř jsou položky 180 × 162
 * s logem 126 × 126 — bez vlastního rámečku, ten má jen ten obal. Pod pásem je tlačítko
 * VŠECHNY ZNAČKY 173 × 44, bílé s rámečkem a zaoblením 3 px, ne textový odkaz.
 */
export function BrandStrip({
  title,
  subtitle,
  brands,
  moreLabel = 'Všechny značky',
  moreHref = '/znacky/vypis',
  static: staticGrid = false,
  perSlide = 8,
}: BrandStripProps) {
  const logo = (b: { name: string; img?: string }) => (
    <Box key={b.name} sx={{ width: 180, height: 162, display: 'grid', placeItems: 'center', flex: '0 0 auto' }}>
      {b.img ? (
        <Box component="img" src={b.img} alt={b.name} loading="lazy" sx={{ width: 126, height: 126, objectFit: 'contain' }} />
      ) : (
        <Box component="span" sx={{ fontWeight: 700, color: dekColors.grayMedium, letterSpacing: '.06em', textTransform: 'uppercase', fontSize: '.8rem', textAlign: 'center', px: 1 }}>
          {b.name}
        </Box>
      )}
    </Box>
  )
  const pages = Array.from({ length: Math.ceil(brands.length / perSlide) }, (_, i) => brands.slice(i * perSlide, (i + 1) * perSlide))

  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h2" sx={{ textTransform: 'uppercase', textAlign: 'center', mb: 0.5 }}>{title}</Typography>
      {subtitle ? <Typography sx={{ color: 'text.secondary', textAlign: 'center', mb: 3 }}>{subtitle}</Typography> : null}

      <Box sx={{ border: `1px solid ${dekColors.grayLighter}`, borderRadius: '4px', px: 1, py: '10px' }}>
        {staticGrid ? (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>{brands.map(logo)}</Box>
        ) : (
          <Carousel
            variant="arrows"
            height={162}
            ariaLabel={title}
            slides={pages.map((page) => ({
              content: (
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>{page.map(logo)}</Box>
              ),
            }))}
          />
        )}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        {/* Naměřeno 173 × 44, rámeček rgb(213,214,214), zaoblení 3 px — jiné než výchozí outlined tlačítko motivu. */}
        <Button
          variant="outlined"
          href={moreHref}
          sx={{ textTransform: 'uppercase', minWidth: 173, height: 44, borderRadius: '3px', borderColor: '#d5d6d6', color: dekColors.gray }}
        >
          {moreLabel}
        </Button>
      </Box>
    </Box>
  )
}
export default BrandStrip

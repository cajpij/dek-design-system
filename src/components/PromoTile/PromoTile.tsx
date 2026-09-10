import Box from '@mui/material/Box'
import { dekColors } from '../../tokens/dek.tokens'

export interface PromoTileProps {
  /** Text bannerku. Web ho má zapečený v obrázku, takže tady slouží jako alt. */
  title: string
  imageUrl?: string
  href?: string
  /** Poměr stran plochy. Web má na homepage dlaždice 300 × 360 px. */
  ratio?: string
}

/**
 * Propagační dlaždice (.comd-banner-banner) — čtveřice pod „Vybrali jsme pro vás“
 * na úvodní stránce: 5 způsobů jak poptat, Aplikace DEK CZ, Články, Katalog stavebnin.
 *
 * Na webu je to odkaz s obrázkem 300 × 360 px, který má text v sobě
 * (`.comd-banner-banner img { width: 100%; height: 100% }`), s přechodem
 * `opacity .35s ease-out`. Liší se tím od HeroBanner, který je celopásový
 * a 460 px vysoký.
 */
export function PromoTile({ title, imageUrl, href = '#', ratio = '300 / 360' }: PromoTileProps) {
  return (
    <Box
      component="a"
      href={href}
      sx={{
        display: 'block',
        borderRadius: '3px',
        overflow: 'hidden',
        lineHeight: 0,
        aspectRatio: ratio,
        bgcolor: dekColors.grayLightest,
        transition: 'opacity .35s ease-out',
        '&:hover': { opacity: 0.85 },
      }}
    >
      {imageUrl ? (
        <Box
          component="img"
          src={imageUrl}
          alt={title}
          loading="lazy"
          sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      ) : (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'grid',
            placeItems: 'center',
            color: dekColors.grayMedium,
            fontWeight: 700,
            fontSize: '.9rem',
            lineHeight: 1.4,
            textAlign: 'center',
            p: 2,
          }}
        >
          {title}
        </Box>
      )}
    </Box>
  )
}
export default PromoTile

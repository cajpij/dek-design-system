import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { dekColors } from '../../tokens/dek.tokens'

export interface CategoryTileProps {
  title: string
  href?: string
  imageUrl?: string
  /** Menší varianta pro podkategorie ve výpisu (.comd-menu-menu-image-slab) */
  size?: 'large' | 'small'
}

/** Dlaždice kategorie s obrázkem (.comd-menu-menu-image-large / -slab): obrázek nahoře, název pod ním. */
export function CategoryTile({ title, href = '#', imageUrl, size = 'large' }: CategoryTileProps) {
  // Web má velkou dlaždici 230 × 230 (naměřeno na homepage), malou ve výpisu podkategorií nižší.
  const h = size === 'large' ? 230 : 96
  return (
    <Link href={href} underline="none" sx={{ display: 'block', color: dekColors.gray, '&:hover .title': { color: dekColors.red } }}>
      <Box sx={{ height: h, bgcolor: dekColors.grayLightest, borderRadius: '3px', overflow: 'hidden', display: 'grid', placeItems: 'center' }}>
        {imageUrl ? <Box component="img" src={imageUrl} alt="" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <Box sx={{ width: '40%', height: '40%', bgcolor: dekColors.grayLighter, borderRadius: 1 }} />}
      </Box>
      <Typography className="title" sx={{ mt: 1, fontWeight: 700, fontSize: size === 'large' ? '1.05rem' : '.9rem', textAlign: 'center' }}>
        {title}
      </Typography>
    </Link>
  )
}
export default CategoryTile

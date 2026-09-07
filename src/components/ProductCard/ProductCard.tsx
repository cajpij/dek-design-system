import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { Button } from '../Button/Button'
import { Price } from '../Price/Price'
import { AvailabilityBadge, type Availability } from '../AvailabilityBadge/AvailabilityBadge'
import { dekColors } from '../../tokens/dek.tokens'

export interface ProductCardProps {
  name: string
  code: string
  brand?: string
  price: number
  priceWithoutVat?: number
  originalPrice?: number
  unit?: string
  availability: Availability
  availabilityDetail?: string
  imageUrl?: string
  href?: string
  onAddToCart?: () => void
}

/**
 * Karta produktu z výpisu kategorie (.com-products-grid + .com-product-preview-mini).
 * Rámeček gray-lighter, radius 3, obrázek nahoře, název, cena, dostupnost, zelené Do košíku.
 */
export function ProductCard({
  name,
  code,
  brand,
  price,
  priceWithoutVat,
  originalPrice,
  unit,
  availability,
  availabilityDetail,
  imageUrl,
  href = '#',
  onAddToCart,
}: ProductCardProps) {
  return (
    <Paper
      variant="outlined"
      component="article"
      sx={{
        borderRadius: '3px',
        p: 1.5,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        height: '100%',
        transition: 'box-shadow .15s',
        '&:hover': { boxShadow: '0 2px 12px rgba(0,0,0,.12)' },
      }}
    >
      <Box
        sx={{
          aspectRatio: '1 / 1',
          bgcolor: dekColors.grayLightest,
          borderRadius: '3px',
          display: 'grid',
          placeItems: 'center',
          overflow: 'hidden',
        }}
      >
        {imageUrl ? (
          <Box component="img" src={imageUrl} alt="" sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        ) : (
          <Typography sx={{ color: 'text.disabled', fontSize: '.8rem' }}>bez obrázku</Typography>
        )}
      </Box>
      {brand ? (
        <Typography sx={{ fontSize: '.75rem', color: 'text.secondary', textTransform: 'uppercase', letterSpacing: '.04em' }}>
          {brand}
        </Typography>
      ) : null}
      <Link href={href} underline="hover" sx={{ color: 'text.primary', fontWeight: 700, lineHeight: 1.3, flex: 1 }}>
        {name}
      </Link>
      <Typography sx={{ fontSize: '.75rem', color: 'text.secondary' }}>Kód: {code}</Typography>
      <Price value={price} withoutVat={priceWithoutVat} original={originalPrice} unit={unit} />
      <AvailabilityBadge status={availability} detail={availabilityDetail} />
      <Button tone="green" fullWidth onClick={onAddToCart} disabled={availability === 'nedostupne'}>
        Do košíku
      </Button>
    </Paper>
  )
}

export default ProductCard

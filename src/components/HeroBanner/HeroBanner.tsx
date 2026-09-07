import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Button } from '../Button/Button'
import { dekColors } from '../../tokens/dek.tokens'

export interface HeroBannerProps {
  title: string
  text?: string
  cta?: string
  href?: string
  imageUrl?: string
  tone?: 'red' | 'gray' | 'green' | 'blue'
  /** Menší banner do mřížky pod sliderem (.comd-banner-banner) */
  compact?: boolean
  /** Web má texty zapečené v obrázku — v tomhle režimu se vykreslí jen obrázek s alt textem. */
  imageOnly?: boolean
}

/** Banner ze sliderů homepage (.com-homepage__main-slider, .comd-banner-banner) — na webu obrázek, tady barevná plocha s textem. */
export function HeroBanner({ title, text, cta, href = '#', imageUrl, tone = 'red', compact = false, imageOnly = false }: HeroBannerProps) {
  if (imageOnly && imageUrl) {
    return (
      <Box component="a" href={href} sx={{ display: 'block', borderRadius: '3px', overflow: 'hidden', lineHeight: 0 }}>
        <Box component="img" src={imageUrl} alt={title} loading="lazy" sx={{ width: '100%', height: 'auto', display: 'block' }} />
      </Box>
    )
  }
  const bg = { red: dekColors.red, gray: dekColors.brandSecondary, green: dekColors.green, blue: dekColors.blue }[tone]
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: compact ? 160 : 260,
        borderRadius: '3px',
        overflow: 'hidden',
        bgcolor: bg,
        color: '#fff',
        backgroundImage: imageUrl ? `linear-gradient(90deg, rgba(0,0,0,.55), rgba(0,0,0,0)), url(${imageUrl})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'flex-end',
        p: compact ? 2.5 : { xs: 3, md: 5 },
      }}
    >
      <Box sx={{ maxWidth: 560 }}>
        <Typography variant={compact ? 'h4' : 'h2'} component="p" sx={{ color: '#fff', mb: compact ? 0 : 1 }}>{title}</Typography>
        {text ? <Typography sx={{ color: 'rgba(255,255,255,.9)', mb: 2 }}>{text}</Typography> : null}
        {cta ? <Button variant="outlined" href={href} sx={{ bgcolor: '#fff' }}>{cta}</Button> : null}
      </Box>
    </Box>
  )
}
export default HeroBanner

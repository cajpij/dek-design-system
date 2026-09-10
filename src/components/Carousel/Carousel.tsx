import { useCallback, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import { dekColors } from '../../tokens/dek.tokens'

export interface CarouselSlide {
  /** Popisek do záložkové navigace (.dek-slider__navigation-item). U varianty „arrows“ se nepoužije. */
  label?: string
  /** Obsah snímku — na webu banner, pás výrobců nebo karty produktů. */
  content: React.ReactNode
}

export interface CarouselProps {
  slides: CarouselSlide[]
  /**
   * `tabs` = hlavní slider homepage (.dek-slider--BANNER_HOMEPAGE): pod snímkem řádek záložek,
   * kterými se přepíná. `arrows` = pás výrobců (.dek-slider--MANUFACTURES_HOMEPAGE): šipky po stranách.
   */
  variant?: 'tabs' | 'arrows'
  /** Výška plochy snímku. Web má u BANNER_HOMEPAGE `.dek-slider__container > * { height: 460px }`. */
  height?: number | string
  /** Který snímek je vidět po vykreslení. */
  defaultIndex?: number
  /** Řízená varianta — když je zadaný, komponenta si index nedrží sama. */
  index?: number
  onIndexChange?: (index: number) => void
  ariaLabel?: string
  /** Šířka pruhu záložek. Web ho má pevný a vycentrovaný, ne přes celou šířku snímku. */
  navWidth?: number | string
}

/**
 * Slider z webu (.dek-slider). Na www.dek.cz běží na úvodní stránce dvakrát:
 * `.dek-slider--BANNER_HOMEPAGE` (čtyři bannery 460 px vysoké, přepínané záložkami pod nimi)
 * a `.dek-slider--MANUFACTURES_HOMEPAGE` (pás log výrobců se šipkami).
 *
 * Hodnoty jsou z produkčního CSS: záložka 54 px vysoká, padding 10/20 px, písmo 14,4 px,
 * aktivní má pozadí `--gray-lighter`, neaktivní při najetí `rgba(223,223,223,.4)`;
 * pod záložkami linka 1 px `--gray-lighter` (.dek-slider__line); šipky 24 × 52 px,
 * pozadí `--gray`, zaoblení .25rem, přesah 12 px přes okraj; přechod `.35s ease-out`.
 *
 * Web přepíná snímky posunem `.dek-slider__container { left }`; tady je to totéž udělané
 * transformem, protože nepotřebuje pevnou šířku kontejneru 2000 px.
 */
export function Carousel({
  slides,
  variant = 'tabs',
  height = variant === 'tabs' ? 460 : 'auto',
  defaultIndex = 0,
  index: controlled,
  onIndexChange,
  ariaLabel = 'Slider',
  navWidth = 1200,
}: CarouselProps) {
  const [uncontrolled, setUncontrolled] = useState(defaultIndex)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const last = slides.length - 1
  // Ořez při renderu, ne v efektu: když se seznam zkrátí, ať nezůstane prázdno.
  const index = Math.max(0, Math.min(last, controlled ?? uncontrolled))

  const go = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(last, next))
      if (controlled === undefined) setUncontrolled(clamped)
      onIndexChange?.(clamped)
    },
    [controlled, last, onIndexChange],
  )

  if (!slides.length) return null

  const onTabKey = (e: React.KeyboardEvent) => {
    const delta = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!delta) return
    e.preventDefault()
    const next = (index + delta + slides.length) % slides.length
    go(next)
    tabRefs.current[next]?.focus()
  }

  const arrow = (dir: 'back' | 'next') => {
    const disabled = dir === 'back' ? index === 0 : index === last
    if (disabled) return null // .dek-slider__button-*.disabled { display: none }
    return (
      <Box
        component="button"
        type="button"
        aria-label={dir === 'back' ? 'Předchozí' : 'Další'}
        onClick={() => go(index + (dir === 'back' ? -1 : 1))}
        sx={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          [dir === 'back' ? 'left' : 'right']: '-12px',
          zIndex: 2,
          width: 24,
          height: 52,
          p: 0,
          cursor: 'pointer',
          border: 0,
          borderRadius: '.25rem',
          bgcolor: dekColors.gray,
          display: 'grid',
          placeItems: 'center',
          '&:hover': { bgcolor: '#262626' },
          '&:focus-visible': { outline: `2px solid ${dekColors.red}`, outlineOffset: 2 },
        }}
      >
        <Box
          aria-hidden
          sx={{
            width: 6,
            height: 6,
            borderLeft: `3px solid ${dekColors.white}`,
            borderBottom: `3px solid ${dekColors.white}`,
            transform: dir === 'back' ? 'rotate(45deg)' : 'rotate(-135deg)',
          }}
        />
      </Box>
    )
  }

  return (
    <Box aria-roledescription="carousel" aria-label={ariaLabel}>
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <Box
          sx={{
            display: 'flex',
            transform: `translateX(-${index * 100}%)`,
            transition: 'transform .35s ease-out', // .dek-slider__container
          }}
        >
          {slides.map((s, i) => (
            <Box
              key={i}
              role={variant === 'tabs' ? 'tabpanel' : 'group'}
              aria-roledescription={variant === 'arrows' ? 'snímek' : undefined}
              aria-label={variant === 'arrows' ? `${i + 1} z ${slides.length}` : undefined}
              aria-hidden={i !== index}
              sx={{
                flex: '0 0 100%',
                minWidth: 0,
                height,
                display: 'grid',
                placeItems: 'center',
                opacity: i === index ? 1 : 0.25, // .dek-slider__item .comd-banner-banner
                transition: 'opacity .35s ease-out',
              }}
            >
              {s.content}
            </Box>
          ))}
        </Box>
        {variant === 'arrows' ? (
          <>
            {arrow('back')}
            {arrow('next')}
          </>
        ) : null}
      </Box>

      {variant === 'tabs' ? (
        <>
          <Box
            role="tablist"
            aria-label={ariaLabel}
            onKeyDown={onTabKey}
            sx={{
              display: 'flex',
              mt: 2,
              mx: 'auto',
              // .dek-slider__navigation — na webu pevný pruh, ne přes celou šířku (naměřeno 1200 px při okně 1440)
              maxWidth: navWidth,
              borderBottom: `1px solid ${dekColors.grayLighter}`,
            }}
          >
            {slides.map((s, i) => (
              <Box
                key={i}
                component="button"
                type="button"
                role="tab"
                ref={(el: HTMLButtonElement | null) => {
                  tabRefs.current[i] = el
                }}
                aria-selected={i === index}
                tabIndex={i === index ? 0 : -1}
                onClick={() => go(i)}
                sx={{
                  flex: 1,
                  minWidth: 0,
                  height: 54,
                  px: '20px',
                  py: '10px',
                  border: 0,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: '14.4px',
                  lineHeight: '120%',
                  color: dekColors.gray,
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: i === index ? dekColors.grayLighter : 'transparent',
                  '&:hover': i === index ? undefined : { bgcolor: 'rgba(223,223,223,.4)' },
                  '&:focus-visible': { outline: `2px solid ${dekColors.red}`, outlineOffset: -2 },
                }}
              >
                {s.label ?? `Snímek ${i + 1}`}
              </Box>
            ))}
          </Box>
        </>
      ) : null}
    </Box>
  )
}
export default Carousel

import Box from '@mui/material/Box'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { UtilityBar } from '../components/UtilityBar/UtilityBar'
import { Header } from '../components/Header/Header'
import { NavBar } from '../components/NavBar/NavBar'
import { Footer } from '../components/Footer/Footer'
import { ProductDetail } from '../components/ProductDetail/ProductDetail'
import { ProductCard } from '../components/ProductCard/ProductCard'
import { Carousel } from '../components/Carousel/Carousel'
import { DEK_LOGO_URL, DETAIL, PRODUCT_CARDS } from './data'

/**
 * Detail produktu (/produkty/detail/…): drobečky (Stavebniny › Hydroizolace › Asfaltové pásy › Parozábrany),
 * detail se záložkami, pod ním „Zákazníci společně nakupují“ a „Související položky“ (.dek-slider → mřížka karet).
 */
export function ProductPage() {
  return (
    <Box>
      <UtilityBar />
      <Header cartCount={2} logoUrl={DEK_LOGO_URL} />
      <NavBar active="Stavebniny" />
      <Container sx={{ pt: 2 }}>
        <Breadcrumbs aria-label="Drobečková navigace">
          <Link href="#" sx={{ color: 'text.secondary' }}>Stavebniny</Link>
          <Link href="#" sx={{ color: 'text.secondary' }}>Hydroizolace</Link>
          <Link href="#" sx={{ color: 'text.secondary' }}>Asfaltové pásy</Link>
          <Typography sx={{ color: 'text.primary' }}>Parozábrany</Typography>
        </Breadcrumbs>
        <Box sx={{ mt: 2 }}>
          <ProductDetail {...DETAIL} />
        </Box>

        <Typography variant="h2" sx={{ mt: 8, mb: 2 }}>Zákazníci společně nakupují</Typography>
        <RelatedSlider items={PRODUCT_CARDS.slice(1)} label="Zákazníci společně nakupují" />

        <Typography variant="h2" sx={{ mt: 8, mb: 2 }}>Související položky</Typography>
        <RelatedSlider items={PRODUCT_CARDS.slice(0, 6)} label="Související položky" />
      </Container>
      <Footer />
    </Box>
  )
}

/** Pás souvisejících položek — na webu .dek-slider, tedy slider se šipkami, ne statická mřížka. */
function RelatedSlider({ items, label, perSlide = 4 }: { items: typeof PRODUCT_CARDS; label: string; perSlide?: number }) {
  const pages = Array.from({ length: Math.ceil(items.length / perSlide) }, (_, i) => items.slice(i * perSlide, (i + 1) * perSlide))
  return (
    <Carousel
      variant="arrows"
      height="auto"
      ariaLabel={label}
      slides={pages.map((page) => ({
        content: (
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: `repeat(${perSlide}, 1fr)` }, gap: 2, width: '100%', px: 3 }}>
            {page.map((p) => <ProductCard key={p.code} {...p} />)}
          </Box>
        ),
      }))}
    />
  )
}

export default ProductPage

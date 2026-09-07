import Box from '@mui/material/Box'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { Header } from '../components/Header/Header'
import { NavBar } from '../components/NavBar/NavBar'
import { Footer } from '../components/Footer/Footer'
import { ProductDetail } from '../components/ProductDetail/ProductDetail'
import { ProductCard } from '../components/ProductCard/ProductCard'
import { DETAIL, FEATURED } from './data'

/**
 * Detail produktu (/produkty/detail/…): drobečky (Stavebniny › Hydroizolace › Asfaltové pásy › Parozábrany),
 * detail se záložkami, pod ním „Zákazníci společně nakupují“ a „Související položky“ (.dek-slider → mřížka karet).
 */
export function ProductPage() {
  return (
    <Box>
      <Header cartCount={2} />
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
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }, gap: 2 }}>
          {FEATURED.slice(1).map((p) => <ProductCard key={p.code} {...p} />)}
        </Box>

        <Typography variant="h2" sx={{ mt: 8, mb: 2 }}>Související položky</Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }, gap: 2 }}>
          {FEATURED.slice(0, 4).map((p) => <ProductCard key={p.code} {...p} />)}
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}
export default ProductPage

import { useState } from 'react'
import Box from '@mui/material/Box'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { Header } from '../components/Header/Header'
import { NavBar } from '../components/NavBar/NavBar'
import { Footer } from '../components/Footer/Footer'
import { CategoryTile } from '../components/CategoryTile/CategoryTile'
import { ProductRow } from '../components/ProductRow/ProductRow'
import { SortBar } from '../components/SortBar/SortBar'
import { LISTING, SUBCATEGORIES_HYDRO } from './data'

/**
 * Výpis kategorie (/produkty/vypis/2-hydroizolace): drobečky, název, dlaždice podkategorií,
 * popis kategorie, lišta řazení + stránkování, řádky produktů (.comd-product-view--long).
 */
export function CategoryPage() {
  const [page, setPage] = useState(1)
  const [sort, setSort] = useState('doporucujeme')
  return (
    <Box>
      <Header cartCount={2} />
      <NavBar active="Stavebniny" />
      <Container sx={{ pt: 2 }}>
        <Breadcrumbs aria-label="Drobečková navigace">
          <Link href="#" sx={{ color: 'text.secondary' }}>Úvod</Link>
          <Link href="#" sx={{ color: 'text.secondary' }}>Stavebniny</Link>
          <Typography sx={{ color: 'text.primary' }}>Hydroizolace</Typography>
        </Breadcrumbs>
        <Typography variant="h1" sx={{ mt: 2 }}>Hydroizolace</Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(4, 1fr)', lg: 'repeat(7, 1fr)' }, gap: 2, mb: 3 }}>
          {SUBCATEGORIES_HYDRO.map((c) => <CategoryTile key={c} title={c} size="small" />)}
        </Box>

        <Typography sx={{ color: 'text.secondary', maxWidth: '80ch', mb: 3 }}>
          Hydroizolace zabraňují pronikání vody do konstrukcí staveb, zejména přes ploché střechy, balkony a základy domu. Ve stavebninách DEK najdete všechny typy hydroizolací — asfaltové pásy, fólie, nátěry i stěrky.
        </Typography>

        <SortBar count={472} page={page} pages={20} sort={sort} onSort={setSort} onPage={setPage} />

        <Box sx={{ display: 'grid', gap: 1.5 }}>
          {LISTING.map((p) => <ProductRow key={p.code} {...p} />)}
        </Box>

        <Box sx={{ mt: 3 }}>
          <SortBar count={472} page={page} pages={20} sort={sort} onSort={setSort} onPage={setPage} />
        </Box>
      </Container>
      <Footer />
    </Box>
  )
}
export default CategoryPage

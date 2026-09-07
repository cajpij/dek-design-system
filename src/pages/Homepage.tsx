import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { Header } from '../components/Header/Header'
import { NavBar } from '../components/NavBar/NavBar'
import { Footer } from '../components/Footer/Footer'
import { HeroBanner } from '../components/HeroBanner/HeroBanner'
import { CategoryTile } from '../components/CategoryTile/CategoryTile'
import { ProductCard } from '../components/ProductCard/ProductCard'
import { InfoBox } from '../components/InfoBox/InfoBox'
import { BrandStrip } from '../components/BrandStrip/BrandStrip'
import { Message } from '../components/Message/Message'
import { BOTTOM_BANNERS, BRANDS, DEK_LOGO_URL, FEATURED, HOME_BANNERS, HOME_CATEGORIES, MAIN_BANNER } from './data'

/**
 * Úvodní stránka podle skutečného pořadí sekcí na www.dek.cz:
 * hlavní slider · 4 bannery · „Vybírejte z našeho širokého sortimentu“ (6 kategorií) ·
 * „Vybrali jsme pro vás“ (produkty + bannery) · info box „Již 33 let zkušeností“ ·
 * výrobci · užitečné odkazy · patička.
 */
export function Homepage({ message }: { message?: string }) {
  return (
    <Box>
      <Header cartCount={0} logoUrl={DEK_LOGO_URL} />
      <NavBar />
      {message ? <Message severity="info">{message}</Message> : null}

      <Container sx={{ pt: 3 }}>
        <HeroBanner title={MAIN_BANNER.alt} imageUrl={MAIN_BANNER.img} imageOnly />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 2, mt: 2 }}>
          {HOME_BANNERS.map((b) => (
            <HeroBanner key={b.alt} title={b.alt} imageUrl={b.img} imageOnly />
          ))}
        </Box>
      </Container>

      <Container sx={{ mt: 8 }}>
        <Typography variant="h1" sx={{ textAlign: 'center', mb: 4 }}>Vybírejte z našeho širokého sortimentu</Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)' }, gap: 2 }}>
          {HOME_CATEGORIES.map((c) => <CategoryTile key={c.title} title={c.title} imageUrl={c.img} />)}
        </Box>
      </Container>

      <Container sx={{ mt: 8 }}>
        <Typography variant="h2" sx={{ mb: 2 }}>Vybrali jsme pro vás</Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }, gap: 2 }}>
          {FEATURED.map((p) => <ProductCard key={p.code} {...p} />)}
        </Box>
      </Container>

      <Box sx={{ mt: 8 }}>
        <InfoBox
          title="Již 33 let zkušeností"
          claim="Strategii stavíme na vysoké odbornosti, profesionalitě a na komplexním poradenském servisu."
          columns={[
            { title: 'Více než 100 prodejen', subtitle: 'po České republice', links: [{ label: 'Kde nás najdete' }] },
            { title: 'Služby na prodejnách', links: [{ label: 'Půjčovna' }, { label: 'Míchárna omítek a barev' }, { label: 'Klempířská dílna' }, { label: 'Všechny služby' }] },
            { title: 'Zaměstnání v DEK', links: [{ label: 'Volná pracovní místa' }, { label: 'Kariéra' }, { label: 'Často kladené otázky' }, { label: 'Zjistit více' }] },
          ]}
        />
      </Box>

      <BrandStrip
        title="Bezmála 400 kvalitních výrobců"
        subtitle="Pro své zákazníky pečlivě vybíráme jen ty nejlepší dodavatele."
        brands={BRANDS}
      />

      <Container sx={{ pb: 2 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2, mb: 6 }}>
          {BOTTOM_BANNERS.map((b) => (
            <HeroBanner key={b.alt} title={b.alt} imageUrl={b.img} imageOnly />
          ))}
        </Box>
        <Typography variant="h3" sx={{ mb: 1.5 }}>Užitečné odkazy</Typography>
        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
          {['Kalkulátory', 'Jak poptat a objednat', 'Katalogy ke stažení', 'Štědrá sezóna'].map((l) => <Link key={l} href="#" underline="hover" sx={{ fontWeight: 700 }}>{l}</Link>)}
        </Box>
      </Container>

      <Footer />
    </Box>
  )
}
export default Homepage

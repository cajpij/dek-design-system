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
import { FEATURED, HOME_CATEGORIES } from './data'

/**
 * Úvodní stránka podle skutečného pořadí sekcí na www.dek.cz:
 * hlavní slider · 4 bannery · „Vybírejte z našeho širokého sortimentu“ (6 kategorií) ·
 * „Vybrali jsme pro vás“ (produkty + bannery) · info box „Již 33 let zkušeností“ ·
 * výrobci · užitečné odkazy · patička.
 */
export function Homepage({ message }: { message?: string }) {
  return (
    <Box>
      <Header cartCount={0} />
      <NavBar />
      {message ? <Message severity="info">{message}</Message> : null}

      <Container sx={{ pt: 3 }}>
        <HeroBanner title="Štědrá sezóna je tady" text="Sbírejte body za nákupy a vyměňte je za dárky. Věrnostní program pro řemeslníky i firmy." cta="Zjistit více" />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 2, mt: 2 }}>
          {[['Doprava zdarma na krytinu plochých střech', 'gray'], ['Kalkulátor spotřeby materiálu', 'blue'], ['Půjčovna nářadí od 1 dne', 'green'], ['Katalogy ke stažení', 'gray']].map(([t, tone]) => (
            <HeroBanner key={t} title={t} tone={tone as 'gray' | 'blue' | 'green'} compact />
          ))}
        </Box>
      </Container>

      <Container sx={{ mt: 8 }}>
        <Typography variant="h1" sx={{ textAlign: 'center', mb: 4 }}>Vybírejte z našeho širokého sortimentu</Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)', lg: 'repeat(6, 1fr)' }, gap: 2 }}>
          {HOME_CATEGORIES.map((c) => <CategoryTile key={c} title={c} />)}
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
        brands={['DEK', 'Isover', 'Rigips', 'Knauf', 'Baumit', 'Weber', 'Bramac', 'Tondach', 'Wienerberger', 'Ytong', 'Makita', 'Bosch']}
      />

      <Container sx={{ pb: 4 }}>
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

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { UtilityBar } from '../components/UtilityBar/UtilityBar'
import { Header } from '../components/Header/Header'
import { NavBar } from '../components/NavBar/NavBar'
import { Footer } from '../components/Footer/Footer'
import { Carousel } from '../components/Carousel/Carousel'
import { CategoryTile } from '../components/CategoryTile/CategoryTile'
import { PromoTile } from '../components/PromoTile/PromoTile'
import { InfoBox } from '../components/InfoBox/InfoBox'
import { BrandStrip } from '../components/BrandStrip/BrandStrip'
import { Message } from '../components/Message/Message'
import { BRANDS, DEK_LOGO_URL, HOME_CATEGORIES, PROMO_TILES, SLIDER_SLIDES } from './data'

/**
 * Úvodní stránka podle skutečného pořadí sekcí na www.dek.cz (přeměřeno 10. 9. 2026,
 * podle svislých pozic prvků na živé stránce):
 *
 * lišta .com-header.top · hlavička · slider se čtyřmi snímky a záložkami (y = 116, 460 px) ·
 * „Vybírejte z našeho širokého sortimentu“ (y = 738) + 6 dlaždic 230 × 230 ve třech sloupcích ·
 * „Vybrali jsme pro vás“ (y = 1522) + 4 propagační dlaždice 300 × 360 (y = 1613) ·
 * „Již 33 let zkušeností“ · pás výrobců jako slider (y = 2761) + Všechny značky ·
 * užitečné odkazy · patička.
 *
 * V sekci „Vybrali jsme pro vás“ na webu žádné produktové karty nejsou — jsou tam
 * jen ty čtyři dlaždice.
 */
export function Homepage({ message }: { message?: string }) {
  return (
    <Box>
      <UtilityBar />
      <Header cartCount={0} logoUrl={DEK_LOGO_URL} />
      <NavBar />
      {message ? <Message severity="info">{message}</Message> : null}

      <Container sx={{ pt: 3 }}>
        <Carousel
          ariaLabel="Akce a novinky"
          slides={SLIDER_SLIDES.map((s) => ({
            label: s.alt,
            content: (
              <Box
                component="a"
                href="#"
                sx={{ display: 'block', width: '100%', height: '100%', lineHeight: 0 }}
              >
                <Box
                  component="img"
                  src={s.img}
                  alt={s.alt}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </Box>
            ),
          }))}
        />
      </Container>

      <Container sx={{ mt: 8 }}>
        <Typography variant="h1" sx={{ textAlign: 'center', mb: 4 }}>Vybírejte z našeho širokého sortimentu</Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)' }, gap: 2 }}>
          {HOME_CATEGORIES.map((c) => <CategoryTile key={c.title} title={c.title} imageUrl={c.img} />)}
        </Box>
      </Container>

      <Container sx={{ mt: 8 }}>
        <Typography variant="h2" sx={{ mb: 2 }}>Vybrali jsme pro vás</Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 2 }}>
          {PROMO_TILES.map((b) => <PromoTile key={b.alt} title={b.alt} imageUrl={b.img} />)}
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
        slider
      />

      <Container sx={{ pb: 2 }}>
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

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { dekColors } from '../../tokens/dek.tokens'

const CDN = 'https://cdn1.idek.cz/file'

/** Barva textu patičky. Naměřeno na webu rgb(206,206,206) — mezi grayLight a grayLighter, token na ni není. */
const FOOTER_TEXT = '#cecece'

/** Sloupce a odkazy opsané z .com-footer 10. 9. 2026, včetně cílů. */
const COLS: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Vše o nákupu',
    links: [
      { label: 'Obchodní podmínky', href: '/obsah/o-nas/obchodni-podminky' },
      { label: 'Reklamace a vrácení zboží', href: '/reklamace' },
      { label: 'Značky', href: '/znacky/vypis' },
      { label: 'Slovník pojmů', href: '/slovnik-pojmu' },
      { label: 'Zpracování osobních údajů', href: '/obsah/o-nas/osobni-udaje' },
      { label: 'Nastavení cookies', href: '/obsah/o-nas/nastaveni-cookies' },
      { label: 'ŠTĚDRÁ SEZÓNA', href: '/stedra' },
    ],
  },
  {
    title: 'Užitečné informace',
    links: [
      { label: 'Dokumenty', href: '/obsah/o-nas/dokumenty' },
      { label: 'Technická podpora', href: '/obsah/technicka-podpora/uvod' },
      { label: 'Dodací listy', href: '/dodaci-listy/' },
      { label: 'Vystavování dokladů | EDI', href: '/obsah/technicka-podpora/edi' },
      { label: 'Projekty a granty', href: '/akce/detail/208' },
      { label: 'O nás', href: '/obsah/o-nas/uvod' },
    ],
  },
  {
    title: 'Skupina DEK',
    links: [
      { label: 'O Skupině DEK', href: 'https://skupina-dek.cz/' },
      { label: 'Volná pracovní místa', href: 'https://skupina-dek.cz/kariera/volna-pracovni-mista' },
      { label: 'Kariéra', href: 'https://skupina-dek.cz/' },
      { label: 'Výroční publikace', href: 'https://skupina-dek.cz/pro-media?type=vyrocni-zpravy' },
      { label: 'Kontakt pro média', href: 'https://skupina-dek.cz/pro-media/kontakt-pro-media' },
    ],
  },
]

const SOCIAL = [
  { alt: 'facebook', src: `${CDN}/fb-db080606.svg`, href: 'https://www.facebook.com/StavebninyDEK', w: 27, h: 27 },
  { alt: 'linkedin', src: `${CDN}/linkedIn-ae2addec.svg`, href: 'https://www.linkedin.com/company/stavebniny-dek', w: 27, h: 27 },
  { alt: 'youtube', src: `${CDN}/yt-b7fa0a95.svg`, href: 'https://www.youtube.com/channel/UCME2nISYQRZs6vybOp11tUg', w: 27, h: 19 },
]

/** Loga v pod-patičce (.com-footer__container--last), přesně v pořadí z webu. */
const PAYMENT = [
  { alt: 'Mastercard', src: `${CDN}/mastercard-logo-2318ae61.svg`, w: 114, h: 20 },
  { alt: 'Visa', src: `${CDN}/visa-logo-1116bf36.svg`, w: 61, h: 20 },
]
const AWARDS = [
  { alt: 'Ověřeno', src: `${CDN}/overeno-zakazniky-5fc8e118.svg`, w: 70, h: 70 },
  { alt: 'Shop roku 2023', src: `${CDN}/shop-roku-2023-b1e060f0.svg`, w: 164, h: 70 },
  { alt: 'Shop roku 2024', src: `${CDN}/shop-roku-2024-38c2b31f.svg`, w: 164, h: 70 },
  { alt: 'Shop roku 2025', src: `${CDN}/shop-roku-2025-0ea606cb.svg`, w: 164, h: 70 },
]

/** Odkaz v patičce se šipkou „›“, jak je má web před každou položkou. */
function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <Box component="li" sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
      <Box
        aria-hidden
        component="span"
        sx={{
          flex: '0 0 auto',
          width: 5,
          height: 5,
          mt: '.45em',
          borderTop: `1.5px solid ${dekColors.grayMedium}`,
          borderRight: `1.5px solid ${dekColors.grayMedium}`,
          transform: 'rotate(45deg)',
        }}
      />
      <Link href={href} underline="hover" sx={{ color: dekColors.grayLight, fontSize: 14, '&:hover': { color: dekColors.white } }}>
        {label}
      </Link>
    </Box>
  )
}

/**
 * Patička (.com-footer) a pod-patička (.com-footer__container--last).
 *
 * Naměřeno na www.dek.cz 10. 9. 2026: pozadí rgb(70,70,70) = --brand-secondary,
 * text rgb(206,206,206), odkazy rgb(195,195,195) = --gray-light o velikosti 14 px.
 * Čtyři sloupce, poslední místo seznamu odkazů nese kontakt na zákaznické centrum
 * ve dvou tmavších polích. Pod dělicí linkou copyright vlevo a sociální sítě vpravo.
 *
 * Pod-patička je bílý pruh: vlevo SSL a platební loga, vpravo ceny a certifikáty.
 * Obrázky se odkazují na CDN webu, takže zůstávají aktuální.
 */
export function Footer() {
  return (
    <Box component="footer" sx={{ mt: 8 }}>
      <Box sx={{ bgcolor: dekColors.brandSecondary, color: FOOTER_TEXT, py: 6 }}>
        <Container>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' }, gap: 4 }}>
            {COLS.map((c) => (
              <Box key={c.title}>
                <Typography sx={{ fontWeight: 700, color: dekColors.white, mb: 2 }}>{c.title}</Typography>
                <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {c.links.map((l) => <FooterLink key={l.label} {...l} />)}
                </Box>
              </Box>
            ))}

            <Box>
              <Typography sx={{ fontWeight: 700, color: dekColors.white, mb: 2 }}>Nevíte si rady?</Typography>
              <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, mb: 2.5 }}>
                <FooterLink label="Často kladené otázky" href="/faq" />
              </Box>
              <Typography sx={{ fontSize: 14 }}>Kontaktujte naše</Typography>
              <Typography sx={{ fontWeight: 700, color: dekColors.white, mb: 1.5 }}>Zákaznické centrum</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px', mb: 1.5 }}>
                <Link
                  href="tel:+420510000100"
                  underline="none"
                  sx={{ bgcolor: 'rgba(0,0,0,.16)', color: dekColors.white, fontWeight: 700, fontSize: '1.15rem', px: 2, py: 1.25, display: 'block' }}
                >
                  510 000 100
                </Link>
                <Link
                  href="mailto:stavebniny@dek.cz"
                  underline="none"
                  sx={{ bgcolor: 'rgba(0,0,0,.16)', color: FOOTER_TEXT, px: 2, py: 1.25, display: 'block', '&:hover': { color: dekColors.white } }}
                >
                  stavebniny@dek.cz
                </Link>
              </Box>
              <Typography sx={{ fontSize: 13, lineHeight: 1.5 }}>
                Naši operátoři jsou vám k dispozici v pracovních dnech v době 7:00–17:00 a v sobotu 7:00–11:30.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              mt: 5,
              pt: 3,
              borderTop: '1px solid rgba(255,255,255,.15)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography sx={{ fontSize: 14 }}>© {new Date().getFullYear()} DEK a.s.</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography sx={{ fontSize: 14 }}>Sledujte nás na:</Typography>
              {SOCIAL.map((s) => (
                <Link key={s.alt} href={s.href} aria-label={s.alt} sx={{ display: 'flex' }}>
                  <Box component="img" src={s.src} alt="" width={s.w} height={s.h} loading="lazy" />
                </Link>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: dekColors.white, py: 3 }}>
        <Container>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2 }}>
              <Box component="img" src={`${CDN}/icon-ssl-5c4034d2.svg`} alt="" width={57} height={30} loading="lazy" />
              <Typography sx={{ fontSize: 14, color: dekColors.gray }}>Bezpečné nakupování díky šifrování SSL</Typography>
              {PAYMENT.map((p) => (
                <Box key={p.alt} component="img" src={p.src} alt={p.alt} width={p.w} height={p.h} loading="lazy" />
              ))}
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2 }}>
              {AWARDS.map((a) => (
                <Box key={a.alt} component="img" src={a.src} alt={a.alt} width={a.w} height={a.h} loading="lazy" sx={{ maxWidth: '100%', height: 'auto' }} />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default Footer

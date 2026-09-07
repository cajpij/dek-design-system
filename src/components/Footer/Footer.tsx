import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { dekColors } from '../../tokens/dek.tokens'

/** Sloupce a odkazy podle skutečné patičky (.com-footer__column) */
const COLS: { title: string; links: string[] }[] = [
  { title: 'Nakupování', links: ['Obchodní podmínky', 'Reklamace a vrácení zboží', 'Značky', 'Slovník pojmů', 'Zpracování osobních údajů', 'Nastavení cookies', 'Štědrá sezóna'] },
  { title: 'Pro zákazníky', links: ['Dokumenty', 'Technická podpora', 'Dodací listy', 'Vystavování dokladů | EDI', 'Projekty a granty', 'O nás'] },
  { title: 'Skupina DEK', links: ['O Skupině DEK', 'Volná pracovní místa', 'Kariéra', 'Výroční publikace', 'Kontakt pro média'] },
  { title: 'Kontakt', links: ['Často kladené otázky', '510 000 100', 'stavebniny@dek.cz'] },
]

/** Patička (.com-footer): tmavě šedá, sloupce odkazů, spodní řádek s copyrightem. */
export function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: dekColors.gray, color: dekColors.grayLighter, mt: 8, py: 6 }}>
      <Container>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 4 }}>
          {COLS.map((c) => (
            <Box key={c.title}>
              <Typography sx={{ fontWeight: 700, color: '#fff', mb: 1.5 }}>{c.title}</Typography>
              <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                {c.links.map((l) => (
                  <li key={l}>
                    <Link href="#" underline="hover" sx={{ color: dekColors.grayLighter, '&:hover': { color: '#fff' } }}>
                      {l}
                    </Link>
                  </li>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
        <Typography sx={{ mt: 5, fontSize: '.8rem', color: dekColors.grayMedium }}>
          © {new Date().getFullYear()} DEK a.s. · Design system postavený z www.dek.cz
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { dekColors } from '../../tokens/dek.tokens'

const COLS: { title: string; links: string[] }[] = [
  { title: 'Nakupování', links: ['Jak nakupovat', 'Doprava a platba', 'Reklamace', 'Vrácení zboží'] },
  { title: 'O nás', links: ['O společnosti', 'Pobočky', 'Kariéra', 'Kontakty'] },
  { title: 'Služby', links: ['Půjčovna', 'Projekční služby', 'Technická podpora', 'Věrnostní program'] },
]

/** Patička (.com-footer): tmavě šedá, sloupce odkazů, spodní řádek s copyrightem. */
export function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: dekColors.gray, color: dekColors.grayLighter, mt: 8, py: 6 }}>
      <Container>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
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

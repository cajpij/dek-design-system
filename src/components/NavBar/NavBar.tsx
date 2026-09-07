import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import { dekColors } from '../../tokens/dek.tokens'

export const DEK_CATEGORIES = [
  { label: 'Stavebniny', href: '/produkty/vypis/25212-stavebniny' },
  { label: 'Elektromateriál', href: '/produkty/vypis/650-elektromaterial' },
  { label: 'Voda Topení Sanita', href: '/produkty/vypis/24911-voda-topeni-sanita' },
  { label: 'Nářadí', href: '/produkty/vypis/4334-naradi' },
  { label: 'Barvy a laky', href: '/produkty/vypis/10-barvy-a-laky' },
  { label: 'Půjčovna', href: '/pujcovna/vypis/1-eu1-pujcovna' },
] as const

/** Řádek hlavních kategorií pod hlavičkou (.dek-mega-menu — bez rozbalovacího menu, jen lišta). */
export function NavBar({ active }: { active?: string }) {
  return (
    <Box component="nav" aria-label="Sortiment" sx={{ bgcolor: dekColors.grayLightest, borderBottom: `1px solid ${dekColors.grayLighter}` }}>
      <Container>
        <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', gap: 0, overflowX: 'auto' }}>
          {DEK_CATEGORIES.map((c) => {
            const isActive = c.label === active
            return (
              <li key={c.label}>
                <Link
                  href={c.href}
                  underline="none"
                  aria-current={isActive ? 'page' : undefined}
                  sx={{
                    display: 'block',
                    px: 2,
                    py: 1.5,
                    fontWeight: 600,
                    fontSize: '.95rem',
                    whiteSpace: 'nowrap',
                    color: isActive ? dekColors.white : dekColors.gray,
                    bgcolor: isActive ? dekColors.red : 'transparent',
                    '&:hover': { color: isActive ? dekColors.white : dekColors.red },
                  }}
                >
                  {c.label}
                </Link>
              </li>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}
export default NavBar

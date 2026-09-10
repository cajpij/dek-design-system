import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { dekColors } from '../../tokens/dek.tokens'

export interface InfoBoxColumn {
  title: string
  subtitle?: string
  links: { label: string; href?: string }[]
}

export interface InfoBoxProps {
  title: string
  claim?: string
  columns: InfoBoxColumn[]
}

/** Šedý pás „JIŽ 33 LET ZKUŠENOSTÍ“ (.com-homepage-info-box): titulek, claim a tři sloupce odkazů. */
export function InfoBox({ title, claim, columns }: InfoBoxProps) {
  return (
    <Box sx={{ bgcolor: dekColors.grayLightest, py: 6 }}>
      <Container>
        {/* .com-homepage-info-box__header-title — 30,6 px, tučné, verzálky, na střed */}
        <Typography variant="h2" sx={{ textTransform: 'uppercase', textAlign: 'center', mb: 1 }}>{title}</Typography>
        {claim ? <Typography sx={{ color: 'text.secondary', maxWidth: 720, mb: 4 }}>{claim}</Typography> : null}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
          {columns.map((c) => (
            <Box key={c.title}>
              <Typography variant="h4" sx={{ mb: 0.25 }}>{c.title}</Typography>
              {c.subtitle ? <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{c.subtitle}</Typography> : <Box sx={{ mb: 1.5 }} />}
              <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                {c.links.map((l, i) => (
                  <li key={l.label}>
                    <Link href={l.href ?? '#'} underline="hover" sx={{ color: i === c.links.length - 1 ? dekColors.red : dekColors.gray, fontWeight: i === c.links.length - 1 ? 700 : 400 }}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
export default InfoBox

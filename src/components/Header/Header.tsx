import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import InputBase from '@mui/material/InputBase'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Button } from '../Button/Button'
import { dekColors, dekInput } from '../../tokens/dek.tokens'

export interface HeaderProps {
  cartCount?: number
  userName?: string
  onSearch?: (query: string) => void
  /** Logo z CDN webu (.dek-logo__img); bez URL se ukáže zástupný čtverec. */
  logoUrl?: string
}

/**
 * Hlavička (.com-header): logo vlevo, vyhledávání uprostřed (.dek-search — šedé pole 40 px,
 * zaoblení jen vlevo, tlačítko vpravo), telefon 510 000 100 + Seznam prodejen, přihlášení a košík vpravo.
 * Bez stínu, bílá. Lišta kategorií je zvlášť: NavBar.
 */
export function Header({ cartCount = 0, userName, onSearch, logoUrl }: HeaderProps) {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: `1px solid ${dekColors.grayLighter}` }}>
      <Container>
        <Toolbar disableGutters sx={{ gap: 3, minHeight: 72 }}>
          <Box component="a" href="#" aria-label="DEK — úvodní stránka" sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none' }}>
            {logoUrl ? (
              <Box component="img" src={logoUrl} alt="DEK" width={120} height={40} sx={{ display: 'block' }} />
            ) : (
              <>
                <Box sx={{ width: 44, height: 44, bgcolor: dekColors.red, borderRadius: '4px', display: 'grid', placeItems: 'center', color: '#fff', fontWeight: 700, fontSize: 20 }}>
                  D
                </Box>
                <Typography sx={{ fontWeight: 700, color: dekColors.gray, fontSize: 18 }}>Stavebniny DEK</Typography>
              </>
            )}
          </Box>

          <Box
            component="form"
            role="search"
            onSubmit={(e) => {
              e.preventDefault()
              const q = new FormData(e.currentTarget).get('q')
              onSearch?.(String(q ?? ''))
            }}
            sx={{ flex: '1 1 33%', display: 'flex', maxWidth: 640 }}
          >
            <InputBase
              name="q"
              placeholder="Hledat produkt, kód, značku…"
              inputProps={{ 'aria-label': 'Hledat' }}
              sx={{
                flex: 1,
                height: dekInput.searchHeight,
                px: 1.25,
                bgcolor: dekInput.searchBackground,
                border: `1px solid ${dekColors.grayLight}`,
                borderRight: 0,
                borderRadius: '4px 0 0 4px',
                fontSize: '1rem',
              }}
            />
            <Button type="submit" tone="red" sx={{ borderRadius: '0 4px 4px 0', height: dekInput.searchHeight }}>
              Hledat
            </Button>
          </Box>

          <Box sx={{ ml: 'auto', display: 'flex', gap: 2, alignItems: 'center' }}>
            <Box sx={{ display: { xs: 'none', lg: 'flex' }, flexDirection: 'column', alignItems: 'flex-end', lineHeight: 1.2 }}>
              <Typography component="a" href="tel:510000100" sx={{ fontWeight: 700, color: dekColors.gray, textDecoration: 'none', fontSize: '.95rem' }}>510 000 100</Typography>
              <Typography component="a" href="#" sx={{ fontSize: '.8rem', color: dekColors.grayMedium }}>Seznam prodejen</Typography>
            </Box>
            <Button variant="text">{userName ?? 'Přihlášení'}</Button>
            <Button tone="gray" variant="contained">
              Košík{cartCount ? ` (${cartCount})` : ''}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header

import { useState } from 'react'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import Container from '@mui/material/Container'
import FormControlLabel from '@mui/material/FormControlLabel'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Button } from '../components/Button/Button'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import { Message } from '../components/Message/Message'
import { dekColors } from '../tokens/dek.tokens'
import { DEK_LOGO_URL } from '../pages/data'

/**
 * Vnitrofiremní formulář: pobočka nahlásí číslo objednávky, částku a termín vývozu.
 *
 * Celé je to poskládané z design systemu — Header, Message, Button, Footer a motiv
 * `dekTheme` (ten dělá `.dek-input` z TextFieldu, `.dek-table` z Table a zelený
 * `.dek-checkbox` z Checkboxu). Jediné vlastní CSS je štítek stavu, a i ten bere
 * barvy z `dekColors`, ne z vlastní palety.
 *
 * Částky formátuje stejný `Intl.NumberFormat('cs-CZ', CZK)` jako komponenta `Price`.
 * `Price` samotná se tu nepoužívá schválně: je na jednotkovou cenu produktu
 * („1 289 Kč / ks s DPH“), ne na součet objednávky. Design system se má používat
 * tam, kam patří — ne ohýbat, protože komponenta zrovna existuje.
 */

export interface Hlaseni {
  id: string
  objednavka: string
  pobocka: string
  /** Kč s DPH */
  castka: number
  /** RRRR-MM-DD */
  termin: string
  poznamka?: string
  /** RRRR-MM-DD, kdy se to nahlásilo */
  nahlaseno: string
}

/** Pobočky jako ve Formulářích v tomhle design systemu — stejné názvy, ať se to nerozjíždí. */
const POBOCKY = ['Praha – Hostivař', 'Brno – Slatina', 'Ostrava – Hrabová', 'Plzeň', 'Hradec Králové'] as const

const czk = new Intl.NumberFormat('cs-CZ', { style: 'currency', currency: 'CZK', maximumFractionDigits: 2 })
const denMesic = new Intl.DateTimeFormat('cs-CZ', { day: 'numeric', month: 'numeric' })

/** Lokální datum jako RRRR-MM-DD — toISOString() je UTC a večer by ukázal jiný den. */
const isoDen = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

const zaDny = (n: number) => {
  const d = new Date()
  d.setDate(d.getDate() + n)
  return isoDen(d)
}

const formatDatum = (iso: string) => denMesic.format(new Date(`${iso}T00:00:00`))

/** „12 480,50“ i „12480.5“ — pobočka to napíše, jak je zvyklá. */
const parseCastka = (s: string) => Number(s.replace(/[\s ]/g, '').replace(',', '.'))

type Stav = { label: string; pozadi: string; text: string }

function stavTerminu(termin: string): Stav {
  const dnes = isoDen(new Date())
  if (termin < dnes) return { label: 'po termínu', pozadi: dekColors.red, text: dekColors.white }
  if (termin === dnes) return { label: 'dnes', pozadi: dekColors.yellow, text: 'rgba(0,0,0,.8)' }
  const dnu = Math.round(
    (new Date(`${termin}T00:00:00`).getTime() - new Date(`${dnes}T00:00:00`).getTime()) / 86_400_000,
  )
  const label = dnu === 1 ? 'zítra' : dnu < 5 ? `za ${dnu} dny` : `za ${dnu} dní`
  return { label, pozadi: dekColors.grayLightest, text: dekColors.gray }
}

/** Ukázkový stav, ať aplikace nezačíná prázdnou tabulkou. Data jsou smyšlená. */
const UKAZKOVA: Hlaseni[] = [
  { id: 'u1', objednavka: '4501298877', pobocka: 'Brno – Slatina', castka: 184_320, termin: zaDny(1), nahlaseno: zaDny(-2), poznamka: 'Vysokozdvih na místě až od 8:00.' },
  { id: 'u2', objednavka: '4501301244', pobocka: 'Praha – Hostivař', castka: 62_480.5, termin: zaDny(4), nahlaseno: zaDny(-1) },
  { id: 'u3', objednavka: '4501287410', pobocka: 'Ostrava – Hrabová', castka: 9_115, termin: zaDny(-1), nahlaseno: zaDny(-6), poznamka: 'Čeká se na doklad od zákazníka.' },
]

type Chyby = Partial<Record<'pobocka' | 'objednavka' | 'castka' | 'termin', string>>

const PRAZDNY = { objednavka: '', castka: '', termin: '', poznamka: '' }

export function HlaseniVyvozu({ pocatecni = UKAZKOVA }: { pocatecni?: Hlaseni[] }) {
  const [hlaseni, setHlaseni] = useState<Hlaseni[]>(pocatecni)
  const [pobocka, setPobocka] = useState<string>('')
  const [pole, setPole] = useState(PRAZDNY)
  const [dispecink, setDispecink] = useState(true)
  const [chyby, setChyby] = useState<Chyby>({})
  const [hotovo, setHotovo] = useState<string | null>(null)

  const zmen = (klic: keyof typeof PRAZDNY) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setPole((p) => ({ ...p, [klic]: e.target.value }))
    setChyby((c) => ({ ...c, [klic]: undefined }))
  }

  function zkontroluj(): Chyby {
    const c: Chyby = {}
    const cislo = pole.objednavka.replace(/[\s ]/g, '')

    if (!pobocka) c.pobocka = 'Vyber pobočku, ze které se vyváží.'

    if (!cislo) c.objednavka = 'Bez čísla objednávky se vývoz nedá spárovat.'
    else if (!/^\d{10}$/.test(cislo)) c.objednavka = 'Číslo objednávky má 10 číslic — najdeš ho v hlavičce dodacího listu.'
    else if (hlaseni.some((h) => h.objednavka === cislo))
      c.objednavka = `Objednávka ${cislo} už je nahlášená — je v tabulce níž.`

    const castka = parseCastka(pole.castka)
    if (!pole.castka.trim()) c.castka = 'Doplň částku s DPH.'
    else if (!Number.isFinite(castka) || castka <= 0) c.castka = 'Částka musí být číslo větší než nula, třeba 12 480,50.'

    if (!pole.termin) c.termin = 'Doplň termín vývozu.'
    else if (pole.termin < isoDen(new Date())) c.termin = 'Termín vývozu nemůže být v minulosti.'

    return c
  }

  function odesli(e: React.FormEvent) {
    e.preventDefault()
    const c = zkontroluj()
    setChyby(c)
    if (Object.keys(c).length > 0) {
      setHotovo(null)
      return
    }
    const cislo = pole.objednavka.replace(/[\s ]/g, '')
    setHlaseni((h) => [
      { id: `${cislo}-${Date.now()}`, objednavka: cislo, pobocka, castka: parseCastka(pole.castka), termin: pole.termin, poznamka: pole.poznamka.trim() || undefined, nahlaseno: isoDen(new Date()) },
      ...h,
    ])
    setHotovo(
      `Vývoz objednávky ${cislo} je nahlášený na ${formatDatum(pole.termin)}${dispecink ? ' — kopie šla na centrální dispečink.' : '.'}`,
    )
    setPole(PRAZDNY) // pobočka zůstává, na jedné se hlásí celý den
  }

  const celkem = hlaseni.reduce((s, h) => s + h.castka, 0)
  const poTerminu = hlaseni.filter((h) => h.termin < isoDen(new Date())).length

  return (
    <Box sx={{ bgcolor: dekColors.white }}>
      <Header logoUrl={DEK_LOGO_URL} userName={pobocka || undefined} />

      <Box aria-live="polite">
        {hotovo ? (
          <Message severity="success" onClose={() => setHotovo(null)}>
            {hotovo}
          </Message>
        ) : null}
      </Box>

      <Container sx={{ py: 4 }}>
        <Typography variant="h1">Hlášení vývozu objednávky</Typography>
        <Typography sx={{ color: 'text.secondary', maxWidth: 720, mb: 4 }}>
          Pobočka nahlásí číslo objednávky, částku a termín vývozu. Dispečink pak nemusí obvolávat,
          co kdy pojede.
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '420px 1fr' }, gap: 5, alignItems: 'start' }}>
          <Stack
            component="form"
            spacing={2}
            noValidate
            onSubmit={odesli}
            sx={{ border: `1px solid ${dekColors.grayLighter}`, borderRadius: 1, p: 3 }}
          >
            <TextField
              label="Pobočka"
              select
              value={pobocka}
              onChange={(e) => {
                setPobocka(e.target.value)
                setChyby((c) => ({ ...c, pobocka: undefined }))
              }}
              error={Boolean(chyby.pobocka)}
              helperText={chyby.pobocka ?? ' '}
              fullWidth
            >
              {POBOCKY.map((p) => (
                <MenuItem key={p} value={p}>
                  {p}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Číslo objednávky"
              value={pole.objednavka}
              onChange={zmen('objednavka')}
              error={Boolean(chyby.objednavka)}
              helperText={chyby.objednavka ?? '10 číslic z hlavičky dodacího listu'}
              placeholder="4501298877"
              inputMode="numeric"
              fullWidth
            />

            <TextField
              label="Částka s DPH (Kč)"
              value={pole.castka}
              onChange={zmen('castka')}
              error={Boolean(chyby.castka)}
              helperText={chyby.castka ?? 'Celá objednávka, ne jednotková cena'}
              placeholder="12 480,50"
              inputMode="decimal"
              fullWidth
            />

            <TextField
              label="Termín vývozu"
              type="date"
              value={pole.termin}
              onChange={zmen('termin')}
              error={Boolean(chyby.termin)}
              helperText={chyby.termin ?? ' '}
              slotProps={{ htmlInput: { min: isoDen(new Date()) } }}
              fullWidth
            />

            <TextField
              label="Poznámka pro řidiče"
              value={pole.poznamka}
              onChange={zmen('poznamka')}
              multiline
              minRows={2}
              placeholder="Nepovinné — příjezd, kontakt na místě, technika."
              fullWidth
            />

            <FormControlLabel
              control={<Checkbox checked={dispecink} onChange={(e) => setDispecink(e.target.checked)} />}
              label="Poslat kopii na centrální dispečink"
            />

            <Stack direction="row" spacing={1.5}>
              <Button tone="green" type="submit">
                Nahlásit vývoz
              </Button>
              <Button
                variant="outlined"
                type="button"
                onClick={() => {
                  setPole(PRAZDNY)
                  setChyby({})
                  setHotovo(null)
                }}
              >
                Vymazat
              </Button>
            </Stack>
          </Stack>

          <Box>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 4,
                bgcolor: dekColors.grayLightest,
                borderRadius: 1,
                px: 3,
                py: 2,
                mb: 3,
              }}
            >
              <Box>
                <Typography sx={{ fontSize: '.8rem', color: 'text.secondary' }}>Nahlášených vývozů</Typography>
                <Typography sx={{ fontSize: '1.7rem', fontWeight: 700, lineHeight: 1.2 }}>{hlaseni.length}</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '.8rem', color: 'text.secondary' }}>Celkem s DPH</Typography>
                <Typography sx={{ fontSize: '1.7rem', fontWeight: 700, lineHeight: 1.2, fontVariantNumeric: 'tabular-nums' }}>
                  {czk.format(celkem)}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '.8rem', color: 'text.secondary' }}>Po termínu</Typography>
                <Typography
                  sx={{ fontSize: '1.7rem', fontWeight: 700, lineHeight: 1.2, color: poTerminu ? dekColors.red : 'inherit' }}
                >
                  {poTerminu}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ overflowX: 'auto' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Objednávka</TableCell>
                    <TableCell>Pobočka</TableCell>
                    <TableCell align="right">Částka s DPH</TableCell>
                    <TableCell>Termín vývozu</TableCell>
                    <TableCell>Stav</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {hlaseni.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} sx={{ color: 'text.secondary', py: 4 }}>
                        Zatím nikdo nic nenahlásil. První vývoz zapiš ve formuláři vlevo.
                      </TableCell>
                    </TableRow>
                  ) : null}
                  {hlaseni.map((h) => {
                    const s = stavTerminu(h.termin)
                    return (
                      <TableRow key={h.id}>
                        <TableCell sx={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: '.875rem', whiteSpace: 'nowrap' }}>
                          {h.objednavka}
                        </TableCell>
                        <TableCell>
                          {h.pobocka}
                          {h.poznamka ? (
                            <Typography sx={{ fontSize: '.8rem', color: 'text.secondary' }}>{h.poznamka}</Typography>
                          ) : null}
                        </TableCell>
                        <TableCell align="right" sx={{ fontWeight: 700, whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}>
                          {czk.format(h.castka)}
                        </TableCell>
                        <TableCell sx={{ whiteSpace: 'nowrap' }}>{formatDatum(h.termin)}</TableCell>
                        <TableCell>
                          <Box
                            component="span"
                            sx={{
                              display: 'inline-block',
                              px: 1,
                              py: 0.25,
                              borderRadius: '3px',
                              fontSize: '.8rem',
                              fontWeight: 700,
                              whiteSpace: 'nowrap',
                              bgcolor: s.pozadi,
                              color: s.text,
                            }}
                          >
                            {s.label}
                          </Box>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </Box>
          </Box>
        </Box>
      </Container>

      <Footer />
    </Box>
  )
}

export default HlaseniVyvozu

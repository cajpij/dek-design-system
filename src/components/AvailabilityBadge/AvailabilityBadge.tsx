import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { dekColors } from '../../tokens/dek.tokens'

export type Availability = 'skladem' | 'na-objednavku' | 'nedostupne'

const MAP: Record<Availability, { color: string; label: string }> = {
  skladem: { color: dekColors.indicatorOpen, label: 'Skladem' },
  'na-objednavku': { color: dekColors.yellow, label: 'Na objednávku' },
  nedostupne: { color: dekColors.indicatorClosed, label: 'Nedostupné' },
}

/** Tečka + text jako u dostupnosti produktu a otevírací doby poboček (--indicator-open / --indicator-closed). */
export function AvailabilityBadge({ status, detail }: { status: Availability; detail?: string }) {
  const m = MAP[status]
  return (
    <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75 }}>
      <Box component="span" aria-hidden sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: m.color, flex: 'none' }} />
      <Typography component="span" sx={{ fontSize: '.875rem', fontWeight: 700, color: m.color }}>
        {m.label}
      </Typography>
      {detail ? (
        <Typography component="span" sx={{ fontSize: '.875rem', color: 'text.secondary' }}>
          {detail}
        </Typography>
      ) : null}
    </Box>
  )
}

export default AvailabilityBadge

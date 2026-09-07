import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import Pagination from '@mui/material/Pagination'
import Select from '@mui/material/Select'
import Typography from '@mui/material/Typography'

export interface SortBarProps {
  count: number
  page: number
  pages: number
  sort?: string
  onSort?: (v: string) => void
  onPage?: (p: number) => void
}

/** Lišta nad výpisem: „Řadit podle“ (Doporučujeme / Nejnižší ceny / Nejvyšší ceny) a stránkování (.com-pagination). */
export function SortBar({ count, page, pages, sort = 'doporucujeme', onSort, onPage }: SortBarProps) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 2, justifyContent: 'space-between', py: 1.5, borderTop: 1, borderBottom: 1, borderColor: 'divider', mb: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Typography component="label" htmlFor="sort" sx={{ fontSize: '.9rem' }}>Řadit podle:</Typography>
        <Select id="sort" size="small" value={sort} onChange={(e) => onSort?.(String(e.target.value))} sx={{ minWidth: 180 }}>
          <MenuItem value="doporucujeme">Doporučujeme</MenuItem>
          <MenuItem value="nejnizsi">Nejnižší ceny</MenuItem>
          <MenuItem value="nejvyssi">Nejvyšší ceny</MenuItem>
        </Select>
        <Typography sx={{ fontSize: '.85rem', color: 'text.secondary' }}>{count} položek</Typography>
      </Box>
      <Pagination count={pages} page={page} shape="rounded" onChange={(_, p) => onPage?.(p)} />
    </Box>
  )
}
export default SortBar

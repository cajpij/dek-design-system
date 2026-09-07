import type { Meta, StoryObj } from '@storybook/react-vite'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { AvailabilityBadge } from '../AvailabilityBadge/AvailabilityBadge'

/** .dek-table: th tučné #464646, padding .875rem .75rem, td zarovnané nahoru. */
const meta = { title: 'Komponenty/Table', tags: ['autodocs'] } satisfies Meta
export default meta

const ROWS = [
  ['1010101045', 'Asfaltový pás DEKGLASS G200 S40', 'role', 'skladem', '1 289 Kč'],
  ['1020304050', 'Minerální vata Isover Unirol Profi 100 mm', 'balení', 'na-objednavku', '689 Kč'],
  ['1030405060', 'Penetrace DEKPRIMER 12 kg', 'ks', 'nedostupne', '1 149 Kč'],
] as const

export const Default: StoryObj = {
  render: () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Kód</TableCell>
          <TableCell>Název</TableCell>
          <TableCell>MJ</TableCell>
          <TableCell>Dostupnost</TableCell>
          <TableCell align="right">Cena s DPH</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {ROWS.map((r) => (
          <TableRow key={r[0]}>
            <TableCell sx={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: '.875rem' }}>{r[0]}</TableCell>
            <TableCell>{r[1]}</TableCell>
            <TableCell>{r[2]}</TableCell>
            <TableCell><AvailabilityBadge status={r[3]} /></TableCell>
            <TableCell align="right" sx={{ fontWeight: 700 }}>{r[4]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
}

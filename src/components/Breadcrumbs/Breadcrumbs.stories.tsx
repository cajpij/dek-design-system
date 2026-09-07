import type { Meta, StoryObj } from '@storybook/react-vite'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

/** .comd-menu-breadcrumbs: spodní linka gray-light, šedé odkazy, poslední položka bez odkazu. */
const meta = { title: 'Komponenty/Breadcrumbs', tags: ['autodocs'] } satisfies Meta
export default meta
export const Default: StoryObj = {
  render: () => (
    <Breadcrumbs aria-label="Drobečková navigace">
      <Link href="#" sx={{ color: 'text.secondary' }}>Úvod</Link>
      <Link href="#" sx={{ color: 'text.secondary' }}>Izolace</Link>
      <Link href="#" sx={{ color: 'text.secondary' }}>Hydroizolace</Link>
      <Typography sx={{ color: 'text.primary' }}>Asfaltové pásy</Typography>
    </Breadcrumbs>
  ),
}

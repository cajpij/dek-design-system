import type { Meta, StoryObj } from '@storybook/react-vite'
import Box from '@mui/material/Box'
import { CategoryTile } from './CategoryTile'
import { SUBCATEGORIES_HYDRO } from '../../pages/data'
const meta = { title: 'Komponenty/CategoryTile', component: CategoryTile, tags: ['autodocs'], args: { title: 'Hydroizolace', size: 'large' } } satisfies Meta<typeof CategoryTile>
export default meta
type Story = StoryObj<typeof meta>
export const Playground: Story = { decorators: [(S) => <Box sx={{ width: 220 }}><S /></Box>] }
export const Mrizka: Story = { render: () => <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 2 }}>{SUBCATEGORIES_HYDRO.map((c) => <CategoryTile key={c.title} title={c.title} imageUrl={c.img} size="small" />)}</Box> }

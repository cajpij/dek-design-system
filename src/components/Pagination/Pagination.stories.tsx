import type { Meta, StoryObj } from '@storybook/react-vite'
import Pagination from '@mui/material/Pagination'

/** .com-pagination: čtverce 32×32, rámeček gray-medium, hover/active gray-lighter. */
const meta = { title: 'Komponenty/Pagination', tags: ['autodocs'] } satisfies Meta
export default meta
export const Default: StoryObj = { render: () => <Pagination count={12} page={3} shape="rounded" /> }

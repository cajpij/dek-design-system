import type { Meta, StoryObj } from '@storybook/react-vite'
import { SortBar } from './SortBar'
const meta = { title: 'Komponenty/SortBar', component: SortBar, tags: ['autodocs'], args: { count: 472, page: 3, pages: 20 } } satisfies Meta<typeof SortBar>
export default meta
export const Default: StoryObj<typeof meta> = {}

import type { Meta, StoryObj } from '@storybook/react-vite'
import { UtilityBar } from './UtilityBar'

const meta = { title: 'Komponenty/UtilityBar', component: UtilityBar, tags: ['autodocs'] } satisfies Meta<typeof UtilityBar>
export default meta
type Story = StoryObj<typeof meta>

/** Tak, jak lišta stojí na www.dek.cz nad hlavičkou. */
export const Vychozi: Story = {}

/** Když si člověk prodejnu vybere, web na jejím místě ukazuje název. */
export const SVybranouProdejnou: Story = { args: { storePickerLabel: 'Praha — Zličín' } }

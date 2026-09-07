import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { QuantityInput } from './QuantityInput'
const meta = { title: 'Komponenty/QuantityInput', component: QuantityInput, tags: ['autodocs'] } satisfies Meta<typeof QuantityInput>
export default meta
function Demo({ unit }: { unit: string }) { const [v, setV] = useState(1); return <QuantityInput value={v} unit={unit} onChange={setV} /> }
export const Role: StoryObj = { render: () => <Demo unit="role" /> }
export const Kusy: StoryObj = { render: () => <Demo unit="ks" /> }

import type { Meta, StoryObj } from '@storybook/react-vite'
import { HeroBanner } from './HeroBanner'
const meta = { title: 'Vzory/HeroBanner', component: HeroBanner, tags: ['autodocs'], args: { title: 'Štědrá sezóna je tady', text: 'Sbírejte body za nákupy a vyměňte je za dárky.', cta: 'Zjistit více', tone: 'red' } } satisfies Meta<typeof HeroBanner>
export default meta
export const Default: StoryObj<typeof meta> = {}

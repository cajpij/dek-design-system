import type { Meta, StoryObj } from '@storybook/react-vite'
import { Footer } from './Footer'

const meta = { title: 'Vzory/Footer', component: Footer, parameters: { layout: 'fullscreen' } } satisfies Meta<typeof Footer>
export default meta
export const Default: StoryObj<typeof meta> = {}

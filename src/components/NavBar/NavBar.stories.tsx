import type { Meta, StoryObj } from '@storybook/react-vite'
import { NavBar } from './NavBar'
const meta = { title: 'Vzory/NavBar', component: NavBar, parameters: { layout: 'fullscreen' } } satisfies Meta<typeof NavBar>
export default meta
export const Default: StoryObj<typeof meta> = {}
export const Aktivni: StoryObj<typeof meta> = { args: { active: 'Stavebniny' } }

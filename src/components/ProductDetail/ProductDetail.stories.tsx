import type { Meta, StoryObj } from '@storybook/react-vite'
import { ProductDetail } from './ProductDetail'
import { DETAIL } from '../../pages/data'

const meta = { title: 'Vzory/ProductDetail', component: ProductDetail, args: DETAIL, parameters: { layout: 'padded' } } satisfies Meta<typeof ProductDetail>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const BezPromoAStitku: Story = { args: { promo: undefined, labels: [] } }

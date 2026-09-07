import type { Meta, StoryObj } from '@storybook/react-vite'
import { Homepage } from './Homepage'
import { CategoryPage } from './CategoryPage'
import { ProductPage } from './ProductPage'

/**
 * Celé stránky poskládané z komponent design systemu. Struktura sekcí odpovídá
 * skutečným stránkám na www.dek.cz (pořadí bloků, texty nadpisů, odkazy); obrázky
 * a loga jsou zástupné, data produktů jsou ukázková ve tvaru, který web používá.
 */
const meta = { title: 'Pages DEK', parameters: { layout: 'fullscreen' } } satisfies Meta
export default meta

export const UvodniStranka: StoryObj = { name: 'Úvodní stránka', render: () => <Homepage /> }
export const UvodniStrankaSeZpravou: StoryObj = { name: 'Úvodní stránka · se zprávou', render: () => <Homepage message="Ve čtvrtek 28. 9. mají všechny pobočky zavřeno. E-shop přijímá objednávky bez omezení." /> }
export const VypisKategorie: StoryObj = { name: 'Výpis kategorie', render: () => <CategoryPage /> }
export const DetailProduktu: StoryObj = { name: 'Detail produktu', render: () => <ProductPage /> }

import type { Meta, StoryObj } from '@storybook/react-vite'
import { Homepage } from './Homepage'
import { CategoryPage } from './CategoryPage'
import { ProductPage } from './ProductPage'

/**
 * Celé stránky poskládané z komponent design systemu. Struktura sekcí odpovídá
 * skutečným stránkám na www.dek.cz (pořadí bloků, texty nadpisů, odkazy); obsah je
 * reálný — fotky, loga a produkty se berou přímo z webu (CDN cdn1.idek.cz), viz data.ts.
 */
const meta = { title: 'Pages DEK', parameters: { layout: 'fullscreen' } } satisfies Meta
export default meta

export const UvodniStranka: StoryObj = { name: 'Úvodní stránka', render: () => <Homepage /> }
export const UvodniStrankaSeZpravou: StoryObj = { name: 'Úvodní stránka · se zprávou', render: () => <Homepage message="Ve čtvrtek 28. 9. mají všechny pobočky zavřeno. E-shop přijímá objednávky bez omezení." /> }
export const VypisKategorie: StoryObj = { name: 'Výpis kategorie', render: () => <CategoryPage /> }
export const DetailProduktu: StoryObj = { name: 'Detail produktu', render: () => <ProductPage /> }

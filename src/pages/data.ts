import type { ProductCardProps } from '../components/ProductCard/ProductCard'
import type { ProductRowProps } from '../components/ProductRow/ProductRow'
import type { ProductDetailProps } from '../components/ProductDetail/ProductDetail'

/** Ukázková data pro stránky. Názvy, kódy a struktura cen odpovídají tomu, co web skutečně zobrazuje. */

export const HOME_CATEGORIES = [
  'Stavebniny', 'Elektromateriál', 'Voda Topení Sanita', 'Nářadí', 'Barvy a laky', 'Půjčovna',
]

export const SUBCATEGORIES_STAVEBNINY = [
  'Hrubá stavba', 'Ploché střechy', 'Šikmé střechy', 'Fasádní systémy', 'Hydroizolace', 'Tepelné izolace',
  'Suchá výstavba', 'Dřevo', 'Suché směsi a stavební chemie', 'Stavební výplně', 'Podlahy a obklady', 'Klempířské prvky',
]

export const SUBCATEGORIES_HYDRO = [
  'Asfaltové pásy', 'Hydroizolační fólie', 'Geotextilie', 'Penetrace, asfaltové nátěry a tmely',
  'Hydroizolační nátěry a stěrky', 'Poplastované plechy', 'Prostupy a těsnění',
]

export const FEATURED: ProductCardProps[] = [
  { name: 'Samolepicí asfaltový pás GLASTEK 30 STICKER PLUS KVK (role/10 m²)', code: '1010410010', brand: 'DEK', price: 1754.5, priceWithoutVat: 1450, unit: 'role', availability: 'skladem', availabilityDetail: 'v 93 prodejnách' },
  { name: 'Geotextilie FILTEK 300 g/m² š. 2 m (role/100 m²)', code: '2615261100', brand: 'DEK', price: 2189, priceWithoutVat: 1809.09, unit: 'role', availability: 'skladem', availabilityDetail: 'v 71 prodejnách' },
  { name: 'Penetrace DEKPRIMER 12 kg', code: '1030405060', brand: 'DEK', price: 1149, priceWithoutVat: 949.59, unit: 'ks', availability: 'na-objednavku', availabilityDetail: 'do 3 dnů' },
  { name: 'Minerální vata ISOVER UNIROL PROFI 100 mm', code: '1020304050', brand: 'Isover', price: 689, originalPrice: 759, priceWithoutVat: 569.42, unit: 'balení', availability: 'skladem', availabilityDetail: 'v 54 prodejnách' },
  { name: 'Sádrokartonová deska RIGIPS RB 12,5 mm 1250×2000', code: '1140011250', brand: 'Rigips', price: 219, priceWithoutVat: 180.99, unit: 'ks', availability: 'nedostupne' },
]

export const LISTING: ProductRowProps[] = [
  { name: 'Samolepicí asfaltový pás GLASTEK 30 STICKER PLUS KVK (role/10 m²)', code: '1010410010', unitPrice: 175.45, unitLabel: 'm²', packPrice: 1754.5, packLabel: 'role', packContains: '10 m²', availability: 'skladem', availabilityDetail: 'v 93 prodejnách' },
  { name: 'Asfaltový pás GLASTEK 40 SPECIAL MINERAL (role/7,5 m²)', code: '1010301040', unitPrice: 189.9, unitLabel: 'm²', packPrice: 1424.25, packLabel: 'role', packContains: '7,5 m²', availability: 'skladem', availabilityDetail: 'v 88 prodejnách' },
  { name: 'Asfaltový pás ELASTEK 40 SPECIAL DEKOR červený (role/7,5 m²)', code: '1010301244', unitPrice: 219, unitLabel: 'm²', packPrice: 1642.5, packLabel: 'role', packContains: '7,5 m²', availability: 'na-objednavku', availabilityDetail: 'do 5 dnů' },
  { name: 'Geotextilie FILTEK 300 g/m² š. 2 m (role/100 m²)', code: '2615261100', unitPrice: 21.89, unitLabel: 'm²', packPrice: 2189, packLabel: 'role', packContains: '100 m²', availability: 'skladem', availabilityDetail: 'v 71 prodejnách' },
  { name: 'Hydroizolační fólie DEKPLAN 76 1,5 mm š. 2,1 m (role/31,5 m²)', code: '1030101076', unitPrice: 289, unitLabel: 'm²', packPrice: 9103.5, packLabel: 'role', packContains: '31,5 m²', availability: 'nedostupne' },
]

export const DETAIL: ProductDetailProps = {
  name: 'Samolepicí asfaltový pás GLASTEK 30 STICKER PLUS KVK (role/10 m²)',
  shortDescription: 'Samolepicí hydroizolační pás z SBS modifikovaného asfaltu s nosnou vložkou ze skleněné tkaniny.',
  code: '1010410010',
  catalogCode: '3RUX3',
  brand: 'DEK',
  labels: ['Výhodná cena', 'Věrnostní program 20 m² = 1 b.'],
  unitPrice: 175.45,
  unitPriceWithoutVat: 145,
  unitLabel: 'm²',
  packPrice: 1754.5,
  packPriceWithoutVat: 1450,
  packLabel: 'role',
  packContains: '10 m²',
  availability: 'skladem',
  availabilityDetail: 'v 93 prodejnách',
  promo: 'Objednejte si krytinu na plochou střechu a dopravu od nás máte zdarma',
  description:
    'GLASTEK 30 STICKER PLUS je samolepicí pás z SBS modifikovaného asfaltu s nosnou vložkou ze skleněné tkaniny. Na horním povrchu je opatřen jemnozrnným minerálním posypem, na spodním povrchu ochrannou snímatelnou fólií. Používá se jako parozábrana nebo spodní pás hydroizolace plochých střech, kde není možné použít natavování.',
  parameters: [
    ['Nosná vložka', 'skleněná tkanina'],
    ['Tloušťka', '3,0 mm'],
    ['Šířka role', '1,0 m'],
    ['Délka role', '10 m'],
    ['Plocha role', '10 m²'],
    ['Způsob spojování', 'samolepicí'],
    ['Odolnost proti ohni', 'E'],
  ],
  documents: [
    { title: 'Radon Glastek 30 Sticker Plus', type: 'Atest na radon' },
    { title: 'GLASTEK 30 STICKER PLUS', type: 'Prohlášení o shodě / vlastnostech' },
    { title: 'GLASTEK 30 STICKER PLUS', type: 'Technický list výrobku' },
  ],
}

import type { ProductCardProps } from '../components/ProductCard/ProductCard'
import type { ProductRowProps } from '../components/ProductRow/ProductRow'
import type { ProductDetailProps } from '../components/ProductDetail/ProductDetail'

/**
 * Reálná data z www.dek.cz, posbíraná 7. 9. 2026 přímo ze stránek
 * (homepage, /produkty/vypis/2-hydroizolace, detail GLASTEK 30 STICKER PLUS).
 * Obrázky se odkazují na CDN webu (cdn1.idek.cz) — do repa se nekopírují,
 * takže zůstávají aktuální a nic se nikam nešíří. Ceny jsou veřejné ceny
 * s DPH z okamžiku sběru; přeškrtnutá je cena před slevou, jak ji web ukazuje.
 */

const CDN = 'https://cdn1.idek.cz'

export const DEK_LOGO_URL = `${CDN}/file/dek-logo-3d5e3743.svg`

export const HOME_CATEGORIES: { title: string; img: string }[] = [
  { title: 'Stavebniny', img: `${CDN}/dek_cz/img/category/-1185575433_ew250_eh250.webp` },
  { title: 'Elektromateriál', img: `${CDN}/dek_cz/img/category/-29662401_ew250_eh250.webp` },
  { title: 'Voda Topení Sanita', img: `${CDN}/dek_cz/img/category/1649845010_ew250_eh250.webp` },
  { title: 'Nářadí', img: `${CDN}/dek_cz/img/category/1676327437_ew250_eh250.webp` },
  { title: 'Barvy a laky', img: `${CDN}/dek_cz/img/category/-1942432845_ew250_eh250.webp` },
  { title: 'Půjčovna', img: `${CDN}/dek_cz/img/category-rental/-1446124805_ew250_eh250.webp` },
]

/**
 * Hlavní slider úvodní stránky (.dek-slider--BANNER_HOMEPAGE). Čtyři snímky 460 px vysoké,
 * přepínané záložkami pod nimi — popisky jsou přesně texty těch záložek. Obrázky mají
 * text v sobě, přesně jako na webu.
 */
export const SLIDER_SLIDES: { alt: string; img: string }[] = [
  { alt: 'MEGA AKCE', img: `${CDN}/img/20c5579deacf78b750cbab8caee623f6.webp` },
  { alt: 'Zářijový stavařský magazín', img: `${CDN}/img/b43e9f9063d47016aa6beccfde75f875.webp` },
  { alt: 'Věrnostní program ŠTĚDRÁ SEZÓNA', img: `${CDN}/img/af476b260461e63f2c93928fe767eb5d.webp` },
  { alt: 'Půjčovna - Bez kauce a bez rizika', img: `${CDN}/img/78c1973e4461b18cac08a85792dc0e4d.webp` },
]

/**
 * Čtyři propagační dlaždice 300 × 360 (.comd-banner-banner) — na webu stojí pod nadpisem
 * „Vybrali jsme pro vás“. Měřeno 10. 9. 2026: všechny čtyři na jedné řadě v y = 1613,
 * a žádné produktové karty v té sekci nejsou.
 */
export const PROMO_TILES: { alt: string; img: string }[] = [
  { alt: '5 způsobů jak poptat', img: `${CDN}/img/61b0fd5485b0f615d3454eb0772dc575.webp` },
  { alt: 'Aplikace DEK CZ', img: `${CDN}/img/3e7c0e743ff0c869e4a24cd19ef969a3.webp` },
  { alt: 'Články', img: `${CDN}/img/a0598f6b606f9b6892ea5d3112db93a3.webp` },
  { alt: 'Katalog stavebnin DEK 2026', img: `${CDN}/img/73c26901eb9cb5bc84a4492ffae2963e.webp` },
]

/** 18 výrobců z pásu na homepage; u prvních šesti má web logo, které jde odkázat přímo. */
export const BRANDS: { name: string; img?: string }[] = [
  { name: 'Wienerberger', img: `${CDN}/img/9091658e0b58070dae8cb535eab7e852_ew248_eh248.webp` },
  { name: 'Porotherm', img: `${CDN}/img/134dacfd8848346064586c18d3e7c73c_ew248_eh248.webp` },
  { name: 'Tondach', img: `${CDN}/img/1206ee45e613b2dbb4ac5d03f946d5d9_ew248_eh248.webp` },
  { name: 'Weber', img: `${CDN}/img/fa4cc15b484dd815b89c120120b9830a_ew248_eh248.webp` },
  { name: 'Sika', img: `${CDN}/img/ea06a6042df4745e0e7338f5622c74ba_ew248_eh248.webp` },
  { name: 'Röben', img: `${CDN}/img/f9a4d4adfe1c4fdc4a77b40adc2d9618_ew248_eh248.webp` },
  { name: 'Isover' }, { name: 'Hager' }, { name: 'Hilti' }, { name: 'Baumit' },
  { name: 'DeWalt' }, { name: 'Philips' }, { name: 'Grohe' }, { name: 'Börner' },
  { name: 'Heluz' }, { name: 'Best' }, { name: 'Bosch' }, { name: 'Rigips' },
]

export const SUBCATEGORIES_HYDRO: { title: string; img: string; href?: string }[] = [
  { title: 'Asfaltové pásy', img: `${CDN}/dek_cz/img/category/-1041301611_ew250_eh250.webp`, href: '/produkty/vypis/23-asfaltove-pasy' },
  { title: 'Hydroizolační fólie', img: `${CDN}/dek_cz/img/category/1936235868_ew250_eh250.webp`, href: '/produkty/vypis/3144-hydroizolacni-folie' },
  { title: 'Geotextilie', img: `${CDN}/dek_cz/img/category/-1401113185_ew250_eh250.webp`, href: '/produkty/vypis/3150-geotextilie' },
  { title: 'Penetrace, asfaltové nátěry a tmely', img: `${CDN}/dek_cz/img/category/-945584233_ew250_eh250.webp`, href: '/produkty/vypis/138-penetrace-asfaltove-natery-a-tmely' },
  { title: 'Hydroizolační nátěry a stěrky', img: `${CDN}/dek_cz/img/category/-1184192486_ew250_eh250.webp`, href: '/produkty/vypis/28413-hydroizolacni-natery-a-sterky' },
  { title: 'Poplastované plechy', img: `${CDN}/dek_cz/img/category/2034238634_ew250_eh250.webp`, href: '/produkty/vypis/20451-poplastovane-plechy' },
  { title: 'Prostupy a těsnění', img: `${CDN}/dek_cz/img/category/2064411603_ew250_eh250.webp`, href: '/produkty/vypis/59700-prostupy-a-tesneni' },
]

const pimg = (id: string) => `${CDN}/dek_cz/img/product-eshop/${id}_ew307_eh307.webp`

/** Prvních osm produktů z výpisu Hydroizolace, tak jak šly za sebou. */
export const LISTING: ProductRowProps[] = [
  { name: 'Samolepicí asfaltový pás GLASTEK 30 STICKER PLUS KVK (role/10 m²)', code: '1010410010', imageUrl: pimg('1383745849'), unitPrice: 175.45, unitLabel: 'm²', packPrice: 1754.5, originalPackPrice: 3227.07, packLabel: 'role', packContains: '10 m²', availability: 'skladem', availabilityDetail: 'v 93 prodejnách' },
  { name: 'Geotextilie netkaná FILTEK 300 šířka 2,0 m (role/100 m²)', code: '2615261100', imageUrl: pimg('1851657787'), unitPrice: 38.5, unitLabel: 'm²', packPrice: 3850.07, originalPackPrice: 6638.06, packLabel: 'role', packContains: '100 m²', availability: 'skladem', availabilityDetail: 'v 90 prodejnách' },
  { name: 'Asfaltový pás s hliníkovou vložkou GLASTEK AL 40 MINERAL (role/7,5 m²)', code: '1010301469', imageUrl: pimg('-1257070088'), unitPrice: 230.14, unitLabel: 'm²', packPrice: 1726.07, originalPackPrice: 2947.56, packLabel: 'role', packContains: '7,5 m²', availability: 'skladem', availabilityDetail: 'v 90 prodejnách' },
  { name: 'Nátěr podkladní asfaltový DEKPRIMER 10 kg', code: '2230101079', imageUrl: pimg('1123177987'), unitPrice: 96.44, unitLabel: 'kg', packPrice: 964.37, originalPackPrice: 1254.77, packLabel: 'ks', packContains: '10 kg', availability: 'skladem', availabilityDetail: 'v 89 prodejnách' },
  { name: 'Asfaltový pás oxidovaný DEKBIT V60 S35 (role/10 m²)', code: '1010101697', imageUrl: pimg('-1632183472'), unitPrice: 120.64, unitLabel: 'm²', packPrice: 1206.37, originalPackPrice: 2405.48, packLabel: 'role', packContains: '10 m²', availability: 'skladem', availabilityDetail: 'v 86 prodejnách' },
  { name: 'Asfaltový lak penetrační Penetral ALP 9 kg', code: '2210101780', imageUrl: pimg('-92370487'), unitPrice: 101.64, unitLabel: 'kg', packPrice: 914.76, originalPackPrice: 1408.08, packLabel: 'ks', packContains: '9 kg', availability: 'skladem', availabilityDetail: 'v 86 prodejnách' },
  { name: 'Fólie hydroizolační z PVC-P DEKPLAN 76 šedá tl. 1,5 mm (role/24 m²)', code: '1015102080', imageUrl: pimg('-1608637572'), unitPrice: 280.14, unitLabel: 'm²', packPrice: 6723.46, originalPackPrice: 7297.17, packLabel: 'role', packContains: '24 m²', availability: 'skladem', availabilityDetail: 'v 85 prodejnách' },
  { name: 'Asfaltový pás oxidovaný DEKGLASS G200 S40 (role/7,5 m²)', code: '1010102096', imageUrl: pimg('-218890262'), unitPrice: 170.97, unitLabel: 'm²', packPrice: 1282.3, originalPackPrice: 2479.29, packLabel: 'role', packContains: '7,5 m²', availability: 'skladem', availabilityDetail: 'v 81 prodejnách' },
]

/**
 * Karty z týchž reálných produktů jako výpis. Na úvodní stránce se nepoužívají —
 * tam web produkty nemá; slouží pásům „Zákazníci společně nakupují“ a „Související
 * položky“ na detailu produktu.
 */
export const PRODUCT_CARDS: ProductCardProps[] = LISTING.map((p) => ({
  name: p.name,
  code: p.code,
  brand: 'DEK',
  price: p.packPrice,
  originalPrice: p.originalPackPrice,
  unit: p.packLabel,
  availability: p.availability,
  availabilityDetail: p.availabilityDetail,
  imageUrl: p.imageUrl,
}))

export const DETAIL: ProductDetailProps = {
  name: 'Samolepicí asfaltový pás GLASTEK 30 STICKER PLUS KVK (role/10 m²)',
  shortDescription: 'Samolepicí hydroizolační pás z SBS modifikovaného asfaltu s nosnou vložkou ze skleněné tkaniny.',
  code: '1010410010',
  catalogCode: '3RUX3',
  brand: 'DEK',
  labels: ['Výhodná cena', 'Věrnostní program 20 m² = 1 b.'],
  images: [pimg('1383745849')],
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
  /** Tabulka parametrů opsaná ze stránky produktu 10. 9. 2026, včetně malých písmen v popiscích. */
  parameters: [
    ['aplikace', 'samolepicí'],
    ['typ asfaltu', 'modifikovaný'],
    ['plošná hmotnost', '3,5 kg/m²'],
    ['barva', 'šedá'],
    ['tloušťka', '3,0 mm'],
    ['šířka', '1 m'],
    ['délka', '10 m'],
    ['balení', '10 m²'],
    ['počet rolí na paletě', '20'],
    ['výztužná vložka', 'skleněná tkanina'],
    ['plošná hmotnost vložky', '200 g/m²'],
    ['ohebnost za nízkých teplot', '-20 °C'],
    ['faktor difuzního odporu', '29000'],
    ['reakce na oheň', 'třída E'],
    ['pevnost v tahu podélně', '900 (+/-200 ) N/50mm'],
    ['pevnost v tahu příčně', '1100 (+/-200 ) N/50mm'],
    ['tažnost podélně', '12 % (+/-5 %)'],
    ['tažnost příčně', '12 % (+/-5 %)'],
    ['odolnost proti protrhávání podélně', '400 (+/-100) N'],
  ],
  documents: [
    { title: 'Radon Glastek 30 Sticker Plus', type: 'Atest na radon' },
    { title: 'GLASTEK 30 STICKER PLUS', type: 'Prohlášení o shodě / vlastnostech' },
    { title: 'GLASTEK 30 STICKER PLUS', type: 'Technický list výrobku' },
  ],
}

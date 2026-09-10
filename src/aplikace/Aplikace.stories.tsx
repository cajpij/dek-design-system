import type { Meta, StoryObj } from '@storybook/react-vite'
import { HlaseniVyvozu } from './HlaseniVyvozu'

/**
 * Celé vnitrofiremní obrazovky poskládané z komponent tohohle design systemu — ne e-shop,
 * ale nástroj, jaký na pobočce nikdo nekreslí a přesto má vypadat jako DEK. Ukazují, že
 * z hlavičky, tlačítek, formulářových polí a motivu `dekTheme` vznikne aplikace bez
 * jediného řádku vlastního CSS.
 */
const meta = { title: 'Aplikace', parameters: { layout: 'fullscreen' } } satisfies Meta
export default meta

export const HlaseniVyvozuObjednavky: StoryObj = {
  name: 'Hlášení vývozu objednávky',
  render: () => <HlaseniVyvozu />,
}

export const PrazdnyStart: StoryObj = {
  name: 'Hlášení vývozu · první den',
  render: () => <HlaseniVyvozu pocatecni={[]} />,
}

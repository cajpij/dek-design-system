import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: '@storybook/react-vite',
  // GitHub Pages servíruje z podsložky — cesty k assetům musí být relativní.
  viteFinal: (cfg) => ({ ...cfg, base: './' }),
}
export default config

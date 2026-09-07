import type { Preview } from '@storybook/react-vite'
import { DekThemeProvider } from '../src/theme/DekThemeProvider'

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { test: 'todo' },
    options: {
      storySort: {
        order: ['Úvod', 'Tokeny', ['Barvy', 'Typografie', 'Rozměry'], 'Komponenty', 'Vzory', 'Reference'],
      },
    },
    backgrounds: { default: 'white', values: [{ name: 'white', value: '#ffffff' }, { name: 'gray-lightest', value: '#f2f2f2' }] },
  },
  decorators: [
    (Story) => (
      <DekThemeProvider>
        <Story />
      </DekThemeProvider>
    ),
  ],
}

export default preview

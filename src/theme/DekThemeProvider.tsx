import type { ReactNode } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { dekTheme } from './dekTheme'

/** Obal aplikace: motiv DEK, Roboto a reset. Tohle je jediné, co si aplikace musí přidat. */
export function DekThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={dekTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

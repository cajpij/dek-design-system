import type { ReactNode } from 'react'
import css from '../vendor/dek.cz/index.css?raw'

/**
 * Obal, který do stránky vloží ORIGINÁLNÍ CSS z www.dek.cz a vykreslí originální markup.
 * Slouží k porovnání: vlevo web tak, jak je, vpravo MUI verze. Nepoužívat v aplikaci —
 * index.css má globální pravidla pro html, body, a, h1… a rozbilo by to motiv.
 */
export function DekCss({ children }: { children: ReactNode }) {
  return (
    <div className="dek-css-reference">
      <style>{css}</style>
      {children}
    </div>
  )
}

export function Compare({ original, mui }: { original: ReactNode; mui: ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, alignItems: 'start' }}>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: 12, textTransform: 'uppercase', letterSpacing: '.08em', color: '#666', fontWeight: 700 }}>
          Originál (dek.cz CSS)
        </p>
        <DekCss>{original}</DekCss>
      </div>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: 12, textTransform: 'uppercase', letterSpacing: '.08em', color: '#666', fontWeight: 700 }}>
          MUI + dekTheme
        </p>
        {mui}
      </div>
    </div>
  )
}

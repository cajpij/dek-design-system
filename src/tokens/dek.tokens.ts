/**
 * Design tokeny DEK — vytažené z produkčního CSS www.dek.cz.
 *
 * Zdroj: `:root` proměnné v /css-production/index.css (v=1788505365) a
 * změřené hodnoty základních prvků (html, body, h1–h4, [class*=dek-button],
 * .dek-input, .container). Nic z toho není odhad — kde web hodnotu nemá,
 * je tady komentář a hodnota převzatá z MUI výchozího nastavení.
 *
 * Názvy proměnných jsou schválně stejné jako na webu (`--brand-primary`,
 * `--gray-lightest`…), aby se dalo hledat oběma směry.
 */

export const dekColors = {
  // značka
  brandPrimary: '#e2001a', // --brand-primary (= --red)
  brandSecondary: '#464646', // --brand-secondary

  // červená
  red: '#e2001a',
  redLight: '#e95151',
  redDark: '#980000',
  redHover: '#a6000e', // .dek-button-red:hover
  redActive: '#8c000c', // .dek-button-red:active

  // zelená
  green: '#2f8000',
  greenLight: '#8baa41',
  greenLight2: '#dce5cf',
  greenLighter: '#e6f1d8',
  greenDark: '#007526',
  greenHover: '#58bc00', // .dek-button-green:hover
  greenActive: '#295700', // .dek-button-green:active

  // modrá
  blue: '#0071b8',
  blueLight: '#62b1b4',
  blueLighter: '#dcebf5',
  blueLightest: '#edf8ff',
  blueDark: '#1e28b4',
  blueHover: '#009edf', // .dek-button-blue:hover
  blueActive: '#004f7f', // .dek-button-blue:active

  // ostatní
  purple: '#614ec8',
  yellow: '#ffa200',
  yellowLight: '#f5ed5c',
  yellowLighter: '#fcfbde',
  pink: '#ebbcbc',

  // šedá
  gray: '#262626', // --gray = základní barva textu
  grayMedium: '#666666',
  grayLight: '#c3c3c3',
  grayLighter: '#dfdfdf',
  grayLightest: '#f2f2f2',
  neutral100: '#e0e0e0',
  neutral800: '#1a1a1a',
  white: '#ffffff',
  black: '#000000',

  // stavové (dostupnost / otevírací doba)
  indicatorOpen: '#2f8000',
  indicatorClosed: '#e2001a',
} as const

export const dekTypography = {
  fontFamily: 'Roboto, sans-serif',
  /** html { font-size: 112.5% } nad 1200 px, 100 % pod ním */
  baseFontSizeDesktop: 18,
  baseFontSizeMobile: 16,
  lineHeight: 1.5,
  weights: { light: 300, regular: 400, medium: 500, bold: 700 },
  headings: {
    // h1 { font-size: 2rem } / 1.8rem ≤ 980 px / 1.6rem ≤ 500 px; line-height 1.2em
    h1: { rem: 2, remTablet: 1.8, remMobile: 1.6, lineHeight: 1.2, weight: 700 },
    h2: { rem: 1.7, remTablet: 1.6, remMobile: 1.4, lineHeight: 1.2, weight: 700 },
    h3: { rem: 1.3, lineHeight: 1.2, weight: 700 },
    h4: { rem: 1.1, lineHeight: 1.2, weight: 700 },
  },
  small: '0.875rem',
} as const

export const dekSpacing = {
  /** --gutter */
  gutter: 10,
  /** .container { max-width: 1540px; padding: 0 1rem } */
  containerMaxWidth: 1540,
  containerPaddingRem: 1,
  minWidth: 320, // --min-width
} as const

export const dekShape = {
  /** [class*=dek-button], .dek-input, .com-pagination * */
  borderRadius: 4,
  /** .dek-checkbox__check, .com-availability-product__product */
  borderRadiusSmall: 3,
} as const

/**
 * Body na webu nejsou systematické (76 různých media queries). Tohle jsou ty,
 * na kterých se mění layout základních prvků — ostatní jsou lokální fixy.
 */
export const dekBreakpoints = {
  xs: 0,
  sm: 500, // h1/h2 zmenšení
  md: 980, // h1/h2 zmenšení, mega menu
  lg: 1200, // html font-size 112.5 % → 100 %
  xl: 1580, // .container přestane mít padding
} as const

export const dekButton = {
  /** [class*=dek-button] */
  paddingY: '.375rem',
  paddingX: '1rem',
  lineHeight: 1.4,
  border: '1px solid',
  transition: 'all .15s ease-in-out',
  disabledOpacity: 0.5,
} as const

export const dekInput = {
  /** .dek-input */
  paddingY: '.375rem',
  paddingX: '.625rem',
  lineHeight: 1.4,
  borderColor: dekColors.grayLight,
  /** .dek-search__input */
  searchBackground: dekColors.grayLightest,
  searchHeight: 40,
} as const

export const dekTokens = {
  colors: dekColors,
  typography: dekTypography,
  spacing: dekSpacing,
  shape: dekShape,
  breakpoints: dekBreakpoints,
  button: dekButton,
  input: dekInput,
} as const

export type DekTokens = typeof dekTokens

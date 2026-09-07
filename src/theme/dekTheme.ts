import { createTheme, type ThemeOptions } from '@mui/material/styles'
import { dekColors, dekBreakpoints, dekButton, dekInput, dekShape, dekSpacing, dekTypography } from '../tokens/dek.tokens'

/*
 * MUI motiv postavený z tokenů dek.cz.
 *
 * Zásada: MUI komponenta má vypadat jako její protějšek na webu, ne jako
 * Material Design. Kde web něco neřeší (elevation, ripple), je to vypnuté.
 * Každý override odkazuje na třídu z index.css, ze které vychází.
 */

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    gray: true
  }
}
declare module '@mui/material/styles' {
  interface Palette {
    gray: Palette['primary']
  }
  interface PaletteOptions {
    gray?: PaletteOptions['primary']
  }
}

export const dekThemeOptions: ThemeOptions = {
  breakpoints: { values: dekBreakpoints },
  shape: { borderRadius: dekShape.borderRadius },
  spacing: dekSpacing.gutter / 1.25, // 8 px — násobky sedí na --gutter (10) i 1rem (16/18) dost blízko
  palette: {
    mode: 'light',
    primary: { main: dekColors.red, dark: dekColors.redHover, contrastText: dekColors.white },
    secondary: { main: dekColors.brandSecondary, contrastText: dekColors.white },
    success: { main: dekColors.green, dark: dekColors.greenHover, light: dekColors.greenLighter, contrastText: dekColors.white },
    info: { main: dekColors.blue, dark: dekColors.blueHover, light: dekColors.blueLightest, contrastText: dekColors.white },
    warning: { main: dekColors.yellow, light: dekColors.yellowLighter, contrastText: 'rgba(0,0,0,.8)' },
    error: { main: dekColors.red, dark: dekColors.redDark, light: dekColors.pink, contrastText: dekColors.white },
    gray: { main: dekColors.gray, dark: dekColors.black, light: dekColors.grayLight, contrastText: dekColors.white },
    text: { primary: dekColors.gray, secondary: dekColors.grayMedium, disabled: dekColors.grayLight },
    divider: dekColors.grayLighter,
    background: { default: dekColors.white, paper: dekColors.white },
    grey: {
      50: dekColors.grayLightest,
      100: dekColors.grayLighter,
      200: dekColors.neutral100,
      300: dekColors.grayLight,
      500: dekColors.grayMedium,
      700: dekColors.brandSecondary,
      900: dekColors.gray,
    },
  },
  typography: {
    fontFamily: dekTypography.fontFamily,
    fontSize: dekTypography.baseFontSizeMobile,
    htmlFontSize: 16,
    fontWeightLight: dekTypography.weights.light,
    fontWeightRegular: dekTypography.weights.regular,
    fontWeightMedium: dekTypography.weights.medium,
    fontWeightBold: dekTypography.weights.bold,
    h1: { fontSize: '2rem', lineHeight: 1.2, fontWeight: 700, margin: '0 0 1rem' },
    h2: { fontSize: '1.7rem', lineHeight: 1.2, fontWeight: 700 },
    h3: { fontSize: '1.3rem', lineHeight: 1.2, fontWeight: 700 },
    h4: { fontSize: '1.1rem', lineHeight: 1.2, fontWeight: 700 },
    h5: { fontSize: '1rem', lineHeight: 1.2, fontWeight: 700 },
    h6: { fontSize: '0.875rem', lineHeight: 1.2, fontWeight: 700 },
    body1: { fontSize: '1rem', lineHeight: dekTypography.lineHeight },
    body2: { fontSize: dekTypography.small, lineHeight: dekTypography.lineHeight },
    button: { textTransform: 'none', fontWeight: 400, fontSize: '1rem', lineHeight: dekButton.lineHeight },
    caption: { fontSize: '0.7rem' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // html { font-size: 112.5% } nad 1200 px — web zvětšuje celý rem
        html: { fontSize: '100%', [`@media (min-width:${dekBreakpoints.lg + 1}px)`]: { fontSize: '112.5%' } },
        body: { color: dekColors.gray, lineHeight: 1.5 },
        // web: h1/h2 se zmenšují na tabletu a mobilu
        h1: {
          [`@media (max-width:${dekBreakpoints.md}px)`]: { fontSize: '1.8rem' },
          [`@media (max-width:${dekBreakpoints.sm}px)`]: { fontSize: '1.6rem' },
        },
        h2: {
          [`@media (max-width:${dekBreakpoints.md}px)`]: { fontSize: '1.6rem' },
          [`@media (max-width:${dekBreakpoints.sm}px)`]: { fontSize: '1.4rem' },
        },
        a: { color: dekColors.red, '&:hover': { color: dekColors.redDark } },
        strong: { fontWeight: 700 },
      },
    },
    MuiContainer: {
      defaultProps: { maxWidth: false },
      styleOverrides: {
        root: {
          maxWidth: dekSpacing.containerMaxWidth,
          paddingLeft: '1rem',
          paddingRight: '1rem',
          [`@media (min-width:${dekBreakpoints.xl + 1}px)`]: { paddingLeft: 0, paddingRight: 0 },
        },
      },
    },
    MuiButtonBase: { defaultProps: { disableRipple: true } },
    MuiButton: {
      defaultProps: { disableElevation: true, variant: 'contained' },
      styleOverrides: {
        // [class*=dek-button]
        root: {
          padding: `${dekButton.paddingY} ${dekButton.paddingX}`,
          border: dekButton.border,
          borderColor: 'currentColor',
          lineHeight: dekButton.lineHeight,
          transition: dekButton.transition,
          '&.Mui-disabled': { opacity: dekButton.disabledOpacity, cursor: 'not-allowed', pointerEvents: 'auto' },
          '&.Mui-focusVisible': { outline: `2px solid ${dekColors.blue}`, outlineOffset: 2 },
        },
        // .dek-button-red / -green / -blue / -gray: pozadí = border, hover tmavší
        contained: ({ theme, ownerState }) => {
          const c = ownerState.color && ownerState.color !== 'inherit' ? theme.palette[ownerState.color] : theme.palette.primary
          return {
            backgroundColor: c.main,
            borderColor: c.main,
            color: c.contrastText,
            '&:hover': { backgroundColor: c.dark, borderColor: c.dark },
            '&:active': { filter: 'brightness(.85)' },
            '&.Mui-disabled': { backgroundColor: c.main, borderColor: c.main, color: c.contrastText },
          }
        },
        // .dek-button-white: bílé pozadí, šedý rámeček, hover gray-lightest
        outlined: {
          backgroundColor: dekColors.white,
          borderColor: dekColors.grayMedium,
          color: dekColors.gray,
          '&:hover': { backgroundColor: dekColors.grayLightest, borderColor: dekColors.grayMedium },
          '&:active': { backgroundColor: dekColors.grayLighter },
        },
        // .dek-button-link: bez pozadí, hover podtržení
        text: {
          padding: 0,
          border: 'none',
          backgroundColor: 'transparent',
          '&:hover': { backgroundColor: 'transparent', textDecoration: 'underline', color: dekColors.black },
        },
        sizeSmall: { padding: '.25rem .75rem', fontSize: '.875rem' },
        sizeLarge: { padding: '.5rem 1.25rem', fontSize: '1.1rem' },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        // .dek-input
        root: {
          borderRadius: dekShape.borderRadius,
          backgroundColor: dekColors.white,
          '& .MuiOutlinedInput-notchedOutline': { borderColor: dekInput.borderColor },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: dekColors.grayMedium },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: dekColors.blue, borderWidth: 1 },
        },
        input: { padding: `${dekInput.paddingY} ${dekInput.paddingX}`, lineHeight: dekInput.lineHeight, height: 'auto' },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: { fontSize: '.875rem', lineHeight: 1.3, color: dekColors.gray, position: 'static', transform: 'none', marginBottom: '.25rem' },
      },
    },
    MuiTextField: { defaultProps: { variant: 'outlined', size: 'small' } },
    MuiCheckbox: {
      styleOverrides: {
        // .dek-checkbox__check — 1rem čtverec, radius 3, zelená po zaškrtnutí
        root: {
          padding: 4,
          color: dekColors.grayLight,
          '&.Mui-checked': { color: dekColors.green },
          '& .MuiSvgIcon-root': { fontSize: '1.25rem', borderRadius: dekShape.borderRadiusSmall },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: { padding: 4, color: dekColors.grayLight, '&.Mui-checked': { color: dekColors.green } },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: { '&.Mui-checked': { color: dekColors.green }, '&.Mui-checked + .MuiSwitch-track': { backgroundColor: dekColors.green, opacity: 0.6 } },
      },
    },
    MuiTabs: {
      styleOverrides: {
        // .dek-tabs: šedé záložky vedle sebe, 40 px, aktivní tmavě šedá s bílým textem, bez podtržení
        root: { minHeight: 40 },
        indicator: { display: 'none' },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 40,
          padding: dekSpacing.gutter,
          flex: '1 1 0',
          textTransform: 'none',
          fontSize: '1.1rem',
          color: dekColors.gray,
          backgroundColor: dekColors.grayLighter,
          '&:not(:first-of-type)': { borderLeft: '1px solid #ccc' },
          '&:hover': { opacity: 0.7 },
          // .dek-tabs__title.active
          '&.Mui-selected': { backgroundColor: dekColors.grayMedium, color: dekColors.white, fontWeight: 700 },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        // .dek-table th/td
        head: { textAlign: 'left', verticalAlign: 'bottom', color: dekColors.brandSecondary, padding: '.875rem .75rem', fontSize: '1rem', fontWeight: 700 },
        body: { verticalAlign: 'top', padding: '.875rem .75rem' },
        footer: { fontSize: '.875rem' },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        // .com-pagination__link — 32×32, rámeček gray-medium, hover gray-lighter
        root: {
          width: 32,
          height: 32,
          minWidth: 32,
          margin: '0 10px 0 0',
          borderRadius: dekShape.borderRadius,
          fontSize: '.8rem',
          color: dekColors.gray,
          border: `1px solid ${dekColors.grayMedium}`,
          backgroundColor: dekColors.white,
          '&:hover, &.Mui-selected, &.Mui-selected:hover': { backgroundColor: dekColors.grayLighter },
        },
      },
    },
    MuiAlert: {
      defaultProps: { variant: 'filled', icon: false },
      styleOverrides: {
        // .com-message: modrý pruh s bílým textem; .warning žlutý
        root: { borderRadius: 0, padding: '.75rem 1rem', fontSize: '1rem', '& a': { fontWeight: 700, color: 'inherit' } },
        filled: ({ ownerState }) => ({
          backgroundColor:
            ownerState.severity === 'warning' ? dekColors.yellow
            : ownerState.severity === 'success' ? dekColors.green
            : ownerState.severity === 'error' ? dekColors.red
            : dekColors.blue,
          color: ownerState.severity === 'warning' ? 'rgba(0,0,0,.8)' : dekColors.white,
        }),
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        // .comd-menu-breadcrumbs: spodní linka, šedé odkazy
        root: { borderBottom: `1px solid ${dekColors.grayLight}`, marginBottom: dekSpacing.gutter, paddingBottom: 4, fontSize: '.875rem' },
        separator: { color: dekColors.grayMedium },
      },
    },
    MuiChip: {
      styleOverrides: { root: { borderRadius: dekShape.borderRadius, fontSize: '.8rem', height: 24 } },
    },
    MuiPaper: { defaultProps: { elevation: 0 }, styleOverrides: { outlined: { borderColor: dekColors.grayLighter } } },
    MuiDialog: {
      styleOverrides: {
        // .com-modal__background rgba(58,58,58,.5); tělo bílé bez zaoblení
        paper: { borderRadius: 0 },
      },
    },
    MuiBackdrop: { styleOverrides: { root: { backgroundColor: 'rgba(58,58,58,.5)' } } },
    MuiLink: { defaultProps: { underline: 'hover' }, styleOverrides: { root: { color: dekColors.red, '&:hover': { color: dekColors.redDark } } } },
  },
}

export const dekTheme = createTheme(dekThemeOptions)
export default dekTheme

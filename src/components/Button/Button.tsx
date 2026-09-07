import MuiButton, { type ButtonProps as MuiButtonProps } from '@mui/material/Button'

/**
 * Tlačítko DEK. Mapuje třídy z webu na MUI:
 *
 * | web                | tone      | variant     |
 * |--------------------|-----------|-------------|
 * | .dek-button-red    | red       | contained   |
 * | .dek-button-green  | green     | contained   |
 * | .dek-button-blue   | blue      | contained   |
 * | .dek-button-gray   | gray      | contained   |
 * | .dek-button-white  | —         | outlined    |
 * | .dek-button-link   | —         | text        |
 */
export type ButtonTone = 'red' | 'green' | 'blue' | 'gray'

export interface ButtonProps extends Omit<MuiButtonProps, 'color'> {
  /** Barva podle webu. Platí jen pro variant="contained". */
  tone?: ButtonTone
}

const TONE_TO_COLOR: Record<ButtonTone, MuiButtonProps['color']> = {
  red: 'primary',
  green: 'success',
  blue: 'info',
  gray: 'gray',
}

export function Button({ tone = 'red', variant = 'contained', ...rest }: ButtonProps) {
  return <MuiButton variant={variant} color={variant === 'contained' ? TONE_TO_COLOR[tone] : 'inherit'} {...rest} />
}

export default Button

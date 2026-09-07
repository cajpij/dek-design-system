import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import { dekColors, dekInput } from '../../tokens/dek.tokens'

export interface QuantityInputProps {
  value: number
  unit: string
  onChange?: (v: number) => void
  min?: number
}

/** Množství + jednotka jako v .com-add-to-cart-eshop: pole s jednotkou přilepenou vpravo (.dek-group). */
export function QuantityInput({ value, unit, onChange, min = 1 }: QuantityInputProps) {
  return (
    <Box sx={{ display: 'inline-flex', height: 40 }}>
      <InputBase
        type="number"
        value={value}
        inputProps={{ min, 'aria-label': 'Množství', style: { textAlign: 'center' } }}
        onChange={(e) => onChange?.(Math.max(min, Number(e.target.value) || min))}
        sx={{ width: 72, px: 1, border: `1px solid ${dekInput.borderColor}`, borderRadius: '4px 0 0 4px', fontSize: '1rem' }}
      />
      <Box component="label" sx={{ display: 'grid', placeItems: 'center', px: 1.25, border: `1px solid ${dekInput.borderColor}`, borderLeft: 0, borderRadius: '0 4px 4px 0', bgcolor: dekColors.grayLightest, fontSize: '.9rem' }}>
        {unit}
      </Box>
    </Box>
  )
}
export default QuantityInput

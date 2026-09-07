import Alert, { type AlertProps } from '@mui/material/Alert'
import Container from '@mui/material/Container'

/**
 * Celoplošný informační pruh (.com-message): modrý s bílým textem, varianta .warning žlutá.
 * Používá se pod hlavičkou pro provozní zprávy (svátky, výpadky, akce).
 */
export function Message({ severity = 'info', children, ...rest }: AlertProps) {
  return (
    <Alert severity={severity} {...rest} sx={{ '& .MuiAlert-message': { width: '100%' }, ...rest.sx }}>
      <Container sx={{ px: 0 }}>{children}</Container>
    </Alert>
  )
}

export default Message

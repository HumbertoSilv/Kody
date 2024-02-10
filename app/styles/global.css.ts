import { globalStyle } from '@vanilla-extract/css'
import { vars } from './theme.css'

// Reset CSS
globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
})

globalStyle('body', {
  WebkitFontSmoothing: 'antialiased',
  backgroundColor: vars.color.backgroundPrimary,
  color: vars.color.textSecondary,
  width: '70%',
  height: '100vh',
  margin: 'auto'
})

globalStyle('body, input, textarea, button', {
  fontFamily: vars.font.primary,
  fontWeight: 400
})

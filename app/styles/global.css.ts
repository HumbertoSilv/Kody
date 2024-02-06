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
  backgroundColor: vars.color.primary,
  color: vars.color.text
})

globalStyle('body, input, textarea, button', {
  fontFamily: vars.font.body,
  fontWeight: 400
})
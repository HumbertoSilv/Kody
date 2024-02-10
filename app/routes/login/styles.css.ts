import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const containerStyle = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  maxWidth: '24rem',
  margin: '100px auto',
  textAlign: 'center',
})

export const titleContainerStyles = style({
  marginBottom: '4rem'
})

export const titleH2Style = style({
  fontSize: '3.5rem',
  lineHeight: '3.875rem',
  fontWeight: '900',
  paddingBottom: '0.75rem',

  color: vars.color.textPrimary
})

export const titleSpanStyle = style({
  fontSize: '1.25rem'
})

export const formStyles = style({
  display: 'flex',
  alignItems: 'baseline',
  flexDirection: 'column',
  width: '100%',
  borderBottom: `solid 1px ${vars.color.backgroundSecondary}`

})

export const labelStyle = styleVariants({
  primary: {
    fontSize: '0.875rem',
    fontWeight: '500',
    lineHeight: 1.5,
    color: vars.color.textPrimary
  },
  secondary: {
    color: vars.color.textSecondary
  }
})

export const inputStyle = style({
  width: '100%',
  padding: '0.5rem 0.75rem',
  marginBottom: '2rem',
  fontSize: '0.875rem',
  lineHeight: '1.5rem',
  textTransform: 'lowercase',
  borderRadius: 6,
  border: `solid 1px ${vars.color.backgroundSecondary}`,

  color: vars.color.textPrimary,
  background: vars.color.backgroundPrimary,
})

export const helperBoxStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: '1rem',
  fontSize: '0.875rem',
})

export const checkBoxStyle = style({
  marginRight: '0.5rem',
  cursor: 'pointer'
})

export const linkStyle = styleVariants({
  primary: {
    textDecoration: 'none',
    fontWeight: '600',
    color: vars.color.white
  },
  secondary: {
    textDecoration: 'none',
    color: vars.color.textSecondary
  }
})

export const button = style({
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  gap: '0.3rem',
  width: '100%',
  margin: '1rem auto',
  fontSize: '0.875rem',
  fontWeight: '500',
  border: 'none',
  borderRadius: '6px',
  background: vars.color.white,
  cursor: 'pointer',
  padding: '0.5rem 1rem',
  lineHeight: '1.25rem'
})

export const createAccountStyles = style({
  display: 'flex',
  gap: '0.5rem',
  padding: '1.5rem'
})
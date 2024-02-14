import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const containerStyles = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  margin: '9rem auto 12rem',
  borderRadius: '20px',
  gap: '2rem',

  backgroundColor: '#151c29',
})

export const profileImageStyles = style({
  width: '14rem',
  height: '14rem',
  marginTop: '-6rem',
  textAlign: 'center',
  borderRadius: '100%',
  background: vars.color.white
})

export const profileInfoContainerStyles = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
})

export const usernameStyles = style({
  fontSize: '2.5rem',
  fontWeight: 700,
  padding: '1rem',
  color: vars.color.textPrimary
})

export const dateStyles = style({
  fontSize: '1rem',
  fontWeight: 400,
})

export const logoutButtonStyles = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.2rem',
  padding: '1rem 0',
  margin: '0.5rem',
  fontSize: '0.875rem',
  fontWeight: '500',
  border: 'none',

  backgroundColor: 'transparent',
  color: vars.color.textPrimary,

  ':hover': {
    textDecorationLine: 'underline'
  }

})

export const buttonContainerStyles = style({
  display: 'flex',
  gap: '1rem',
  marginBottom: '2rem'
})

export const buttonStyles = style({
  fontSize: '0.875rem',
  fontWeight: '500',
  padding: '0.7rem 1rem',
  border: 'none',
  borderRadius: '6px',
  textDecoration: 'none',

  color: '#4a3e3e',
  background: vars.color.white,

  ':hover': {
    opacity: '0.80'
  }
})

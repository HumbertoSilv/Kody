import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const introBox = style({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  lineHeight: '0.8',
  padding: '20% 0 0 8%'
})

export const titleOne = style({
  fontSize: '7rem',
  color: vars.color.textPrimary
})

export const titleTwo = style({
  fontSize: '13rem',
  color: vars.color.textPrimary

})

export const text = style({
  padding: '0.4rem 1rem',
  fontSize: '1.5rem',
})

export const linkStyle = style({
  padding: '0 1rem',
  fontSize: '1.5rem',
  textDecoration: 'underline',
  color: vars.color.textSecondary
})
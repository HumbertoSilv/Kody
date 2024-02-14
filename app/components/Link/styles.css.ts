import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const linkStyles = style({
  fontSize: '0.875rem',
  fontWeight: '500',
  padding: '0.7rem 2rem',
  border: 'none',
  borderRadius: '6px',
  textDecoration: 'none',

  color: '#4a3e3e',
  background: vars.color.white,

  ':hover': {
    opacity: '0.80'
  }
})
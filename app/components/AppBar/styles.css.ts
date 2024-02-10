import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const container = style({
  display: 'flex',
  justifyContent: 'end',
  padding: '1.5rem 0',
  gap: '2rem'
})

export const formSearch = style({
  display: 'flex',
  gap: '0.5rem',
  height: '2.5rem',
  width: '30%'
})

export const inputStyle = style({
  background: vars.color.backgroundPrimary,
  padding: '0.5rem 0.75rem',
  fontSize: '0.875rem',
  borderRadius: 6,
  border: `solid 1px ${vars.color.backgroundSecondary}`,
  flex: 1
})

export const button = style({
  fontSize: '0.875rem',
  fontWeight: '500',
  border: 'none',
  borderRadius: '6px',
  background: vars.color.white,
})


export const buttonLogin = style([button, {
  padding: '0 2rem',
}])

export const buttonSearch = style([button, {
  padding: '0.5rem 1rem',
  height: '2.5rem'
}])

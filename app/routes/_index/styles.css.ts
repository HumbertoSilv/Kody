import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const container = style({
  width: '100%',
  height: '100vh',
})

export const introBox = style({
  width: '50%',
  lineHeight: '0.8',
  padding: '20% 0 0 15%'
})

export const titleOne = style({
  fontSize: '7rem',
  color: vars.color.title
})

export const titleTwo = style({
  fontSize: '13rem',
  color: vars.color.title

})

export const text = style({
  padding: '1rem',
  fontSize: '2rem',
})
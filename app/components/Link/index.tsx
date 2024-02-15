import { Link as LinkRemix } from "@remix-run/react"
import { linkStyles } from "./styles.css"

export interface LinkProps {
  to: string
  children: React.ReactNode
}
export default function Link({ to, children }: LinkProps) {
  return (
    <LinkRemix className={linkStyles} to={to}>
      {children}
    </LinkRemix>
  )
}
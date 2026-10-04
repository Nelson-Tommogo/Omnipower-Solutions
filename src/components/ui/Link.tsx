import NextLink from "next/link"
import { ReactNode, AnchorHTMLAttributes } from "react"

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  component?: typeof NextLink
  children: ReactNode
  sx?: Record<string, unknown>
}

export function Link({ href, children, component, sx, style, ...props }: LinkProps) {
  const Component = component || "a"
  
  if (Component === NextLink) {
    return (
      <NextLink href={href} style={style} {...props}>
        {children}
      </NextLink>
    )
  }

  return (
    <a href={href} style={style} {...props}>
      {children}
    </a>
  )
}
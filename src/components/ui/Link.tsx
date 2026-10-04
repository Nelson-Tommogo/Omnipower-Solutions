import NextLink from "next/link"
import { AnchorHTMLAttributes, CSSProperties, ReactNode } from "react"

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  children: ReactNode
  /** Pass NextLink to use client-side routing */
  component?: typeof NextLink | "a"
  sx?: CSSProperties
}

export function Link({ href, children, component, sx, style, ...props }: LinkProps) {
  const Component = component || "a"
  const mergedStyle: CSSProperties = { ...sx, ...style }

  if (Component === NextLink) {
    return (
      <NextLink href={href} style={mergedStyle} {...props}>
        {children}
      </NextLink>
    )
  }

  return (
    <a href={href} style={mergedStyle} {...props}>
      {children}
    </a>
  )
}
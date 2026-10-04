import { ReactNode, HTMLAttributes, ElementType, CSSProperties } from "react"

type Variant =
  | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  | "subtitle1" | "subtitle2"
  | "body1" | "body2" | "caption"

type TypographyProps = HTMLAttributes<HTMLElement> & {
  variant?: Variant
  component?: ElementType
  sx?: CSSProperties
  children: ReactNode
}

const variantStyles: Record<Variant, CSSProperties> = {
  h1: { fontSize: 40, fontWeight: 700, lineHeight: 1.2 },
  h2: { fontSize: 32, fontWeight: 700, lineHeight: 1.3 },
  h3: { fontSize: 28, fontWeight: 700, lineHeight: 1.3 },
  h4: { fontSize: 24, fontWeight: 700, lineHeight: 1.4 },
  h5: { fontSize: 20, fontWeight: 700, lineHeight: 1.4 },
  h6: { fontSize: 18, fontWeight: 700, lineHeight: 1.5 },
  subtitle1: { fontSize: 16, fontWeight: 600, lineHeight: 1.5 },
  subtitle2: { fontSize: 14, fontWeight: 600, lineHeight: 1.5 },
  body1: { fontSize: 16, fontWeight: 400, lineHeight: 1.6 },
  body2: { fontSize: 14, fontWeight: 400, lineHeight: 1.6 },
  caption: { fontSize: 12, fontWeight: 400, lineHeight: 1.5 },
}

export function Typography({
  variant = "body1",
  component: Component = "p",
  children,
  sx,
  style,
  ...props
}: TypographyProps) {
  return (
    <Component
      style={{ margin: 0, ...variantStyles[variant], ...sx, ...style }}
      {...props}
    >
      {children}
    </Component>
  )
}
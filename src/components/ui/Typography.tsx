import { ReactNode, HTMLAttributes,JSX } from "react"

type TypographyProps = HTMLAttributes<HTMLElement> & {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption"
  component?: keyof JSX.IntrinsicElements
  children: ReactNode
}

const variantStyles: Record<string, React.CSSProperties> = {
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
  component,
  children,
  style,
  ...props
}: TypographyProps) {
  const Component = component || "p"
  return (
    <Component style={{ margin: 0, ...variantStyles[variant], ...style }} {...props}>
      {children}
    </Component>
  )
}
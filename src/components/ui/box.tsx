import { forwardRef, HTMLAttributes, ElementType, CSSProperties } from "react"

type BoxProps = HTMLAttributes<HTMLElement> & {
  component?: ElementType
  sx?: CSSProperties
  children?: React.ReactNode
}

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ component: Component = "div", sx, style, children, ...props }, ref) => {
    return (
      <Component ref={ref} style={{ ...sx, ...style }} {...props}>
        {children}
      </Component>
    )
  }
)

Box.displayName = "Box"
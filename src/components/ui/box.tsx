import { forwardRef, HTMLAttributes, JSX } from "react"

type BoxProps = HTMLAttributes<HTMLDivElement> & {
  component?: keyof JSX.IntrinsicElements
  sx?: Record<string, unknown>
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ component: Component = "div", sx, style, ...props }, ref) => {
    return <Component ref={ref} style={{ ...style }} {...props} />
  }
)

Box.displayName = "Box"
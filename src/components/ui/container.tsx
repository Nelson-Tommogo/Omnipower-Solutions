import { ReactNode, HTMLAttributes } from "react"

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  maxWidth?: "sm" | "md" | "lg" | "xl"
  children: ReactNode
}

const maxWidthMap = {
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
}

export function Container({ maxWidth = "lg", children, style, ...props }: ContainerProps) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: maxWidthMap[maxWidth],
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: 16,
        paddingRight: 16,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
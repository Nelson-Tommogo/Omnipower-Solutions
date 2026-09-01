import * as React from "react"
import { TextField, type TextFieldProps } from "@mui/material"

import { cn } from "@/src/lib/utils"

const Textarea = React.forwardRef<HTMLTextAreaElement, TextFieldProps>(
  ({ className, ...props }, ref) => {
    return (
      <TextField
        {...props}
        inputRef={ref}
        className={cn(className)}
        multiline
        minRows={4}
        variant="outlined"
        size="small"
      />
    )
  }
)

Textarea.displayName = "Textarea"

export { Textarea }

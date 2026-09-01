import * as React from "react";
import { FormLabel, FormLabelProps, Typography } from "@mui/material";

interface LabelProps extends FormLabelProps {
  required?: boolean;
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({
  required = false,
  children,
  sx,
  ...props
}) => {
  return (
    <FormLabel
      {...props}
      sx={{
        fontSize: "0.875rem",
        fontWeight: 500,
        display: "flex",
        alignItems: "center",
        gap: 0.5,
        mb: 1,
        ...sx,
      }}
    >
      {children}
      {required && (
        <Typography
          component="span"
          color="error"
          sx={{ fontSize: "1.25rem", fontWeight: 600 }}
        >
          *
        </Typography>
      )}
    </FormLabel>
  );
};

export default Label;
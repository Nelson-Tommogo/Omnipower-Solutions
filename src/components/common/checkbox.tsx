// components/ui/checkbox.tsx
import * as React from "react";
import {
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  FormControlLabel,
  FormControlLabelProps,
  Typography,
} from "@mui/material";

interface CheckboxProps extends MuiCheckboxProps {
  label?: string;
  labelPlacement?: FormControlLabelProps["labelPlacement"];
  required?: boolean;
  error?: boolean;
  helperText?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  labelPlacement = "end",
  required = false,
  error = false,
  helperText,
  checked,
  onChange,
  disabled,
  size = "medium",
  color = "primary",
  sx,
  ...props
}) => {
  const checkbox = (
    <MuiCheckbox
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      size={size}
      color={color}
      sx={{
        ...(error && {
          "& .MuiSvgIcon-root": {
            color: "error.main",
          },
        }),
        ...sx,
      }}
      {...props}
    />
  );

  if (label) {
    return (
      <div>
        <FormControlLabel
          control={checkbox}
          label={
            <Typography variant="body2" sx={{ fontWeight: 400 }}>
              {label}
              {required && (
                <Typography component="span" color="error" sx={{ ml: 0.5 }}>
                  *
                </Typography>
              )}
            </Typography>
          }
          labelPlacement={labelPlacement}
          disabled={disabled}
        />
        {helperText && (
          <Typography
            variant="caption"
            color={error ? "error" : "text.secondary"}
            sx={{ ml: 2, mt: 0.5, display: "block" }}
          >
            {helperText}
          </Typography>
        )}
      </div>
    );
  }

  return checkbox;
};

export default Checkbox;
"use client";

import * as React from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

export const Input = (props: any) => {
  const {
    name,
    label,
    type = "text",
    value,
    onChange,
    onBlur,
    placeholder,
    required,
    disabled,
    error,
    helperText,
    size = "small",
    fullWidth = true,
    sx,
    className,
    defaultValue,
    leftIcon,
    rightIcon,
    password = false,
    showPasswordToggle = true, 
    ...rest
  } = props;

  const [showPassword, setShowPassword] = React.useState(false);

  const inputType = password ? (showPassword ? "text" : "password") : type;

  const inputProps: any = {};

  if (leftIcon) {
    inputProps.startAdornment = (
      <InputAdornment position="start">{leftIcon}</InputAdornment>
    );
  }

  if (password && showPasswordToggle) {
    inputProps.endAdornment = (
      <InputAdornment position="end">
        <IconButton
          onClick={() => setShowPassword(!showPassword)}
          edge="end"
          size="small"
          disabled={disabled}
        >
          {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
        </IconButton>
      </InputAdornment>
    );
  } else if (rightIcon && !password) {
    inputProps.endAdornment = (
      <InputAdornment position="end">{rightIcon}</InputAdornment>
    );
  }

  return (
    <TextField
      name={name}
      label={label}
      type={inputType}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      error={error}
      helperText={helperText}
      size={size}
      fullWidth={fullWidth}
      variant="outlined"
      defaultValue={defaultValue}
      className={className}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "8px",
        },
        ...sx,
      }}
      slotProps={{ input: inputProps }}
      {...rest}
    />
  );
};

export default Input;
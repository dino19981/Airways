import { TextField, TextFieldVariants } from '@mui/material';

export type InputProps = {
  label?: string;
  // name: string;
  type?: string;
  className?: string;
  multiline?: boolean;
  rows?: number;
  customField?: never;
  placeholder?: string;
  disabled?: boolean;
  labelOnTop?: boolean;
  // error?: FieldError
  variant?: TextFieldVariants;
};

export function Input({
  label,
  // name,
  type,
  multiline,
  rows,
  className,
  //   register,
  //   error,
  placeholder,
  disabled,
  labelOnTop,
  variant,
}: InputProps) {
  return (
    <TextField
      label={label}
      InputLabelProps={{
        shrink: labelOnTop,
      }}
      type={type}
      //   error={!!error}
      //   helperText={error?.message as string}
      multiline={multiline}
      rows={rows}
      fullWidth
      className={className}
      placeholder={placeholder}
      disabled={disabled}
      inputProps={{
        autoComplete: 'new-password',
      }}
      variant={variant}
      //   {...register(name)}
    />
  );
}

'use client';

import { useState } from 'react';
import styles from './style.module.scss';

import { MenuItem, Select as MUISelect, SelectChangeEvent } from '@mui/material';

export type SelectProps = {
  selectItems: { text: string; value: string }[];
  label?: string;
  selectClassName?: string;
  defaultValue?: string;
  onChange?: (e: SelectChangeEvent<string>) => void;
  value?: string;
  disabled?: boolean;
};

export function Select({
  label,
  selectItems,
  selectClassName,
  defaultValue,
  onChange,
  value,
  disabled,
}: SelectProps): JSX.Element {
  const [selectElement, setSelectElement] = useState<HTMLSelectElement | null>(null);

  function changeSelectedValue(e: SelectChangeEvent<string>) {
    // if (registerData?.onChange) {
    //   registerData.onChange(e);
    // }

    if (onChange) {
      onChange(e);
    }
  }

  return (
    // <Box sx={{ width: '100%' }}>
    // <FormControl className={formControlClassName} fullWidth /*error={!!validateError}*/>
    <MUISelect
      defaultValue={defaultValue || ''}
      label={label}
      inputRef={setSelectElement}
      fullWidth
      className={selectClassName}
      disabled={disabled}
      value={value}
      onChange={changeSelectedValue}
    >
      {selectItems.map(({ text, value }) => (
        <MenuItem key={value} value={value}>
          {text}
        </MenuItem>
      ))}
    </MUISelect>

    // </FormControl>
  );
}

{
  /* {validateError && (
  <FormHelperText error sx={{ ml: 2 }}>
    {validateError.message}
  </FormHelperText>
)} */
}
// </Box>

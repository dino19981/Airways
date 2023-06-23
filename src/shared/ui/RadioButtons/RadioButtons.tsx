'use client';

import { Radio, RadioGroup, FormControlLabel, FormControlLabelProps } from '@mui/material';
import { ChangeEvent } from 'react';

export type RadioButtonsProps = {
  items: Omit<FormControlLabelProps, 'control'>[];
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export function RadioButtons({ items, className, onChange, value }: RadioButtonsProps) {
  return (
    <RadioGroup row onChange={onChange} value={value} className={className}>
      {items.map((item) => (
        <FormControlLabel key={item.value as string} {...item} control={<Radio />} />
      ))}
    </RadioGroup>
  );
}

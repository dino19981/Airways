'use client';

import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { IconButton } from '@mui/material';

export function ShoppingCart() {
  return (
    <IconButton sx={{ color: '#fff' }}>
      <ShoppingBasketOutlinedIcon />
    </IconButton>
  );
}

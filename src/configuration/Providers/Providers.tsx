'use client';

import { CssBaseline } from '@mui/material';
import { ReactNode } from 'react';
import { store } from '../store/store';
import { Provider } from 'react-redux';

type Props = {
  children: ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <Provider store={store}>
      <CssBaseline />
      {children}
    </Provider>
  );
}

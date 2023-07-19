'use client';

import { Button } from '@mui/material';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import styles from './style.module.scss';

export function AuthenticationButtonWithModal() {
  return (
    <>
      <Button variant='outlined' startIcon={<Person2OutlinedIcon />} className={styles.button}>
        Sign in
      </Button>
    </>
  );
}

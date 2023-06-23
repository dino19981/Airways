'use client';

import { Select } from '@/shared/ui/Select/Select';
import styles from './style.module.scss';
import { CurrencyFormatByValue, changeCurrencyFormat } from '@/entities/settings/slice';
import { useAppDispatch, useStateSelector } from '@/configuration/store/hooks';

const selectItems = [
  { text: 'RUB', value: CurrencyFormatByValue['RUB'] },
  { text: 'USD', value: CurrencyFormatByValue['USD'] },
  { text: 'EUR', value: CurrencyFormatByValue['EUR'] },
  { text: 'PLN', value: CurrencyFormatByValue['PLN'] },
];

export function CurrencySelector() {
  const dispatch = useAppDispatch();
  const currencyFormat = useStateSelector((state) => state.settings.currencyFormat);

  return (
    <Select
      selectItems={selectItems}
      value={currencyFormat}
      selectClassName={styles.select}
      onChange={(e) => dispatch(changeCurrencyFormat(e.target.value as CurrencyFormatByValue))}
    />
  );
}

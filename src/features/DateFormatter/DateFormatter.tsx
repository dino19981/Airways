'use client';

import { Select } from '@/shared/ui/Select/Select';
import styles from './style.module.scss';
import { DateFormatByValue, changeDateFormat } from '@/entities/settings/slice';
import { useAppDispatch, useStateSelector } from '@/configuration/store/hooks';

const selectItems = [
  { text: 'MM/DD/YYYY', value: DateFormatByValue['MM/DD/YYYY'] },
  { text: 'DD/MM/YYYY', value: DateFormatByValue['DD/MM/YYYY'] },
  { text: 'YYYY/DD/MM', value: DateFormatByValue['YYYY/DD/MM'] },
  { text: 'YYYY/MM/DD', value: DateFormatByValue['YYYY/MM/DD'] },
];

export function DateFormatter() {
  const dispatch = useAppDispatch();
  const dateFormat = useStateSelector((state) => state.settings.dateFormat);

  return (
    <Select
      selectItems={selectItems}
      value={dateFormat}
      onChange={(e) => dispatch(changeDateFormat(e.target.value as DateFormatByValue))}
      selectClassName={styles.select}
    />
  );
}

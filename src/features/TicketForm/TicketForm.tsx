'use client';
import { RadioButtons } from '@/shared/ui/RadioButtons/RadioButtons';
import { Grid, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import { Input } from '@/shared/ui/Input/Input';
import reverseIcon from '../../configuration/images/main/reverse.svg';
import Image from 'next/image';
import { AirportSelector } from '@/entities/airports/AirportSelector/AirportSelector';
import { Airport, getAirports } from '@/shared/api/requests/airport';
import { AxiosError } from 'axios';

enum TicketVariants {
  'DOUBLE' = 'DOUBLE',
  'ONE' = 'ONE',
}

const radioButtons = [
  {
    label: 'Round Trip',
    value: TicketVariants.DOUBLE,
    className: styles.radio,
  },
  {
    label: 'One Way',
    value: TicketVariants.ONE,
    className: styles.radio,
  },
];

export function TicketForm() {
  const [ticketType, setTicketType] = useState(TicketVariants.DOUBLE);
  const [airports, setAirports] = useState<Airport[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  useEffect(() => {
    setLoading(true);
    getAirports()
      .then((response) => setAirports(response.data))
      .catch((e) => {
        const error = e as AxiosError;
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Grid className={styles.wrapper}>
      <RadioButtons
        value={ticketType}
        items={radioButtons}
        onChange={(e) => setTicketType(e.target.value as TicketVariants)}
        className={styles.radioButtons}
      />

      <form>
        <div className={styles.airportSelectorsWrapper}>
          <div className={styles.inputWrapper}>
            <AirportSelector airports={airports} label='from' />
            {/* <Input variant='standard' className={styles.input} /> */}
          </div>
          <div className={styles.inputWrapper}>
            <Input variant='standard' className={styles.input} />
          </div>

          <IconButton className={styles.reverseIcon}>
            <Image src={reverseIcon} width={16} height={16} alt='switch' />
          </IconButton>
        </div>
      </form>
    </Grid>
  );
}

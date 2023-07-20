import { TicketForm } from '@/features/TicketForm/TicketForm';
import styles from './style.module.scss';

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={`${styles.wrapper} container`}>
        <div className={styles.form}>
          <TicketForm />
        </div>
      </div>
    </div>
  );
}

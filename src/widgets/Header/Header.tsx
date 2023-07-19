import { BurgerMenuLinks } from '@/features/BurgerMenuLinks/BurgerMenuLinks';
import { BurgerMenu } from '@/features/BurgerMenu/BurgerMenu';
import styles from './style.module.scss';
import Image from 'next/image';

import logo from '@/configuration/images/header/logo.png';
import { DateFormatter } from '@/features/DateFormatter/DateFormatter';
import { CurrencySelector } from '@/features/CurrencySelector/CurrencySelector';
import { AuthenticationButtonWithModal } from '@/features/AuthenticationButtonWithModal/AuthenticationButtonWithModal';
import { ShoppingCart } from '@/features/ShoppingCart/ShoppingCart';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner} `}>
        <div className='d-flex align-items-center'>
          <Image className={styles.logo} src={logo} alt='airplane' width={38} height={38} />
          <h2 className={styles.title}>Airways</h2>
        </div>

        <div className='d-flex align-items-center'>
          <DateFormatter />
          <CurrencySelector />
          <AuthenticationButtonWithModal />
          <ShoppingCart />
        </div>
      </div>
    </header>
  );
}

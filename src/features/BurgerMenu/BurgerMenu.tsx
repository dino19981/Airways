'use client';

import { ReactNode, useState } from 'react';
type Props = {
  children?: ReactNode | undefined;
};

export function BurgerMenu({ children }: Props) {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <div>
      <button></button>

      <nav></nav>
    </div>
  );
}

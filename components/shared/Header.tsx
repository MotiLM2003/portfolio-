import react, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SlidingMenu } from './SlidingMenu';
interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <header className='p-[0.3rem] sm:p-3 shadow-md   h-14 md:h-20 flex items-center bg-white sticky top-0 z-10'>
      <div className='flex  justify-between w-full'>
        <SlidingMenu borderWidth={3}>
          <ul className='flex items-center gap-12 pr-10 text-xs sm:text-base'>
            <li className='sm-item'>
              <Link href='#'>לראשי</Link>
            </li>
            <li className='sm-item'>
              <Link href='#'>גלריית עבודות</Link>
            </li>
            <li className='sm-item'>
              <Link href='#'>אודות</Link>
            </li>
          </ul>
        </SlidingMenu>
        <div className='hidden sm:block'>other menu</div>
      </div>
    </header>
  );
};

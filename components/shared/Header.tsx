import react, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SlidingMenu } from './SlidingMenu';
interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <header className='p-[0.3rem] sm:p-3 shadow-md   h-14 md:h-20 flex items-center'>
      <div className='flex  justify-between w-full'>
        <SlidingMenu>
          <ul className='flex items-center gap-12 pr-10'>
            <li className='sm-item'>
              <Link href='#'>ראשי</Link>
            </li>
            <li className='sm-item'>
              <Link href='#'>עבודות</Link>
            </li>
            <li className='sm-item'>
              <Link href='#'>אודות</Link>
            </li>
          </ul>
        </SlidingMenu>
        <div>other menu</div>
      </div>
    </header>
  );
};

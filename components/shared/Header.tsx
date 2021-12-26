import react, { useState, useEffect } from 'react';
import Link from 'next/link';
interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <header className='p-[0.3rem] sm:p-3 shadow-md   h-14 md:h-20 flex items-center'>
      <div className='flex  justify-between w-full'>
        <ul className='flex items-center gap-12 pr-10'>
          <li className='border-b-[3px]'>
            <Link href='#'>ראשי</Link>
          </li>
          <li>
            {' '}
            <Link href='#'>ראשעבודות</Link>
          </li>
          <li>
            {' '}
            <Link href='#'>ראשאודות</Link>
          </li>
        </ul>
        <div>other menu</div>
      </div>
    </header>
  );
};

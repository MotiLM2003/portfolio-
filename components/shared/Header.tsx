import react, { useState, useEffect } from 'react';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';

import { SlidingMenu } from './SlidingMenu';
interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <header className='p-[0.3rem] sm:p-3 shadow-md   h-14 md:h-20 flex items-center bg-white sticky top-0 z-10'>
      <nav className='flex  justify-between w-full'>
        <SlidingMenu borderWidth={3}>
          <ul className='flex items-center gap-5 md:gap-12 pr-10 text-xs sm:text-base'>
            <li className='sm-item'>
              <Link
                activeClass='active'
                className='test1'
                to='section-1'
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                לראשי
              </Link>
            </li>
            <li className='sm-item'>
              <Link
                activeClass='active'
                className='test1'
                to='section-2'
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                גלריית עבודות
              </Link>
            </li>

            <li className='sm-item'>
              <Link
                activeClass='active'
                className='test1'
                to='section-3'
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                קצת עלי
              </Link>
            </li>

            <li className='sm-item'>
              <Link
                activeClass='active'
                className='test1'
                to='section-4'
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                צור קשר
              </Link>
            </li>
          </ul>
        </SlidingMenu>
        <div className='hidden sm:block'>other menu</div>
      </nav>
    </header>
  );
};

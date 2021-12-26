import react, { useState, useEffect, useRef } from 'react';

interface Props {
  children?: JSX.Element | JSX.Element[];
}

export const SlidingMenu: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    const menuItems = containerRef.current?.children[0];
    // console.log(menuItems?.children.length);

    if (menuItems) {
      for (let item of menuItems?.children as any) {
        // console.log(item);
        console.log(item.classList.contains('sm-item'));
      }
    }
  }, [children]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className='sliding-menu' ref={containerRef}>
      {children && children}
    </div>
  );
};

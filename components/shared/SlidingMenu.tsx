import react, { useState, useEffect, useRef } from 'react';

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const loopOverItems = (menuItems: any, action: Function) => {
  let index = 0;
  const items = menuItems?.children;
  for (let item of items as HTMLCollection) {
    if (item.classList.contains('sm-item')) {
      const li = items[index];
      action(li);
    }
    index++;
  }
};

export const SlidingMenu: React.FC<Props> = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  useEffect(() => {
    const menuItems = containerRef.current?.children[0];
    if (menuItems) {
      loopOverItems(menuItems, (li: any) => {
        li.addEventListener('click', (e: Event) => {
          console.log(li);
        });
      });
    }

    return () => {
      loopOverItems(menuItems, (li: HTMLElement) => {
        li.removeEventListener('click', (e: Event) => {
          console.log(e);
        });
      });
    };
  }, []);
  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className='sliding-menu' ref={containerRef}>
      {children && children}
      <div className='selected-item'>test</div>
      <div></div>
    </div>
  );
};

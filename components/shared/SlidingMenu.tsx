import react, { useState, useEffect, useRef } from 'react';

interface Props {
  children?: JSX.Element | JSX.Element[];
  borderWidth?: number;
  borderColor?: string;
}

const loopOverItems = (menuItems: any, action: Function) => {
  let index = 0;
  const items = menuItems?.children;
  for (let item of items as HTMLCollection) {
    if (item.classList.contains('sm-item')) {
      const li = items[index];
      // is a function supplied
      if (typeof action === 'function') {
        action(li);
      }
    }
    index++;
  }
};
export const SlidingMenu: React.FC<Props> = ({
  children,
  borderWidth = 1,
  borderColor = '#65a30d',
}) => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const selectedRef = useRef<HTMLDivElement | null>(null);

  const callbackAddEventListenr = (li: HTMLElement) => {
    const item = selectedRef.current;
    const width = li.offsetWidth + 10;
    const left = li.offsetLeft - 5;
    if (item) {
      item.style.width = `${width}px`;
      item.style.left = `${left}px`;
    }
  };

  useEffect(() => {
    const selectedItem = selectedRef.current;
    const menuItems = containerRef.current?.children[0];
    if (selectedItem) {
      selectedItem.style.borderColor = borderColor;
      selectedItem.style.borderBottomWidth = `${borderWidth}px`;
      selectedItem.style.borderTopWidth = `${borderWidth}px`;
      console.log('here', borderWidth);
      if (menuItems) {
        console.log('menu', menuItems);
        callbackAddEventListenr(menuItems.children[0] as HTMLElement);
      }
    }

    if (menuItems) {
      loopOverItems(menuItems, (li: HTMLElement) => {
        li.addEventListener('click', () => {
          callbackAddEventListenr(li);
        });
      });
    }

    return () => {
      loopOverItems(menuItems, callbackAddEventListenr);
    };
  }, []);

  return (
    <div className='sliding-menu' ref={containerRef}>
      {children && children}
      <div className='selected-item' ref={selectedRef}>
        &nbsp;
      </div>
      <div></div>
    </div>
  );
};

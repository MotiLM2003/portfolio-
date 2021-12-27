import { useGetElementPropries } from 'hooks/useGetElementPropries';
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
  const [selectedMenu, setSelectedMenu] = useState<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const selectedRef = useRef<HTMLDivElement | null>(null);
  const [intWidth, strWidthPX, intLeft, strLeft] = useGetElementPropries(
    selectedMenu,
    10,
    -5
  );
  useEffect(() => {
    const item = selectedRef.current;
    if (item && strWidthPX) {
      item.style.width = strWidthPX as string;
      item.style.left = strLeft as string;
    }
  }, [selectedMenu, intWidth, strWidthPX, intLeft, strLeft]);

  const callbackAddEventListenr = (li: HTMLElement) => {
    const item = selectedRef.current;
    if (item) {
      setSelectedMenu(li);
    }
  };

  useEffect(() => {
    const selectedItem = selectedRef.current;
    const menuItems = containerRef.current?.children[0];

    if (selectedItem) {
      setSelectedMenu(selectedItem);
      selectedItem.style.borderColor = borderColor;
      selectedItem.style.borderBottomWidth = `${borderWidth}px`;
      selectedItem.style.borderTopWidth = `${borderWidth}px`;

      if (menuItems) {
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
  }, [borderColor, borderWidth]);

  return (
    <div className='sliding-menu' ref={containerRef}>
      {children && children}
      <div className='selected-item ' ref={selectedRef}>
        &nbsp;
      </div>
      <div></div>
    </div>
  );
};

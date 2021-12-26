import { useEffect, useState } from 'react';

export const useGetElementPropries = (item: HTMLElement | null) => {
  const [intWidth, setIntWidth] = useState<number>(0);
  const strWidthPX = `${item?.offsetWidth}`;
  useEffect(() => {
    if (item) {
      setIntWidth(item.offsetWidth);
    }
    console.log('element', item, 'width:', item?.offsetWidth);
  }, [item]);
  return [intWidth, strWidthPX];
};

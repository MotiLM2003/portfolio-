import { useEffect, useState } from 'react';

export const useGetElementPropries = (
  item: HTMLElement | null,
  widthOffset: number = 0,
  leftOffset: number = 0
) => {
  const [intWidth, setIntWidth] = useState<number>(0);
  const [strWidthPX, setStrWidthPX] = useState<string>('');
  const [intLeft, setIntLeft] = useState<number>(0);
  const [strLeft, setStrLeft] = useState<string>('');

  useEffect(() => {
    if (item) {
      setIntWidth(item.offsetWidth);
      setIntLeft(item.offsetLeft);
      setStrWidthPX(`${item.offsetWidth + widthOffset}px`);
      setStrLeft(`${item.offsetLeft + leftOffset}px`);
    }
    console.log('element', item, 'width:', strWidthPX);
  }, [item, strWidthPX, intLeft]);
  return [intWidth + widthOffset, strWidthPX, intLeft, strLeft];
};

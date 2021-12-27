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
      const width = item.offsetWidth + widthOffset;
      const left = item.offsetLeft + leftOffset;
      setIntWidth(width);
      setIntLeft(left);

      setStrWidthPX(`${width}px`);
      setStrLeft(`${left}px`);
      console.log('here');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);
  return [intWidth, strWidthPX, intLeft, strLeft];
};

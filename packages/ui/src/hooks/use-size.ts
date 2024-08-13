import { useState } from 'react';
import { useLayoutEffect } from './use-layout-effect';

export function useSize(element: HTMLElement | null) {
  const [size, setSize] = useState<
    { width: number; height: number } | undefined
  >();

  useLayoutEffect(() => {
    if (element) {
      setSize({ width: element.offsetWidth, height: element.offsetHeight });

      const resizeObserver = new ResizeObserver((entries) => {
        if (!Array.isArray(entries)) {
          return;
        }

        if (!entries.length) {
          return;
        }

        const entry = entries[0] as ResizeObserverEntry;
        let width: number;
        let height: number;

        if ('borderBoxSize' in entry) {
          const borderBoxSizeEntry = entry.borderBoxSize;
          const borderSize = (
            Array.isArray(borderBoxSizeEntry)
              ? borderBoxSizeEntry[0]
              : borderBoxSizeEntry
          ) as ResizeObserverSize;

          width = borderSize.inlineSize;
          height = borderSize.blockSize;
        } else {
          width = element.offsetWidth;
          height = element.offsetHeight;
        }

        setSize({ width, height });
      });

      resizeObserver.observe(element);

      return () => {
        resizeObserver.unobserve(element);
      };
    } else {
      setSize(undefined);
    }
  }, [element]);

  return size;
}

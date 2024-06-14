import {
  type CSSProperties,
  type MutableRefObject,
  useEffect,
  useState,
} from 'react';
import { useScroll } from './use-scroll';

type Layout = 'bottom' | 'left' | 'right' | 'top';

type Side = 'end' | 'start';

export type Placement = Layout | `${Layout}-${Side}`;

export function usePosition(
  ref: MutableRefObject<any> | null,
  placement: Placement = 'bottom',
) {
  const [rect, setRect] = useState<CSSProperties>({});
  const { scrollX, scrollY } = useScroll();

  const heightScrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  const widthScrollbarHeight =
    window.innerHeight - document.documentElement.clientHeight;
  const screenWidth = window.innerWidth - heightScrollbarWidth;
  const screenHeight = window.innerHeight - widthScrollbarHeight;

  useEffect(() => {
    if (!ref) {
      return;
    }

    const { top, right, bottom, left } = (
      ref as MutableRefObject<HTMLElement>
    ).current.getBoundingClientRect();

    switch (placement) {
      case 'bottom':
      case 'bottom-start':
        setRect({
          top: bottom,
          left,
        });

        break;
      case 'bottom-end':
        setRect({
          top: bottom,
          right: screenWidth - right,
        });

        break;
      case 'left':
      case 'left-start':
        setRect({
          top,
          right: screenWidth - left,
        });

        break;
      case 'left-end':
        setRect({
          bottom: screenHeight - bottom,
          right: screenWidth - left,
        });

        break;
      case 'right':
      case 'right-start':
        setRect({
          top,
          left: right,
        });

        break;
      case 'right-end':
        setRect({
          bottom: screenHeight - bottom,
          left: right,
        });

        break;
      case 'top':
      case 'top-start':
        setRect({
          bottom: screenHeight - top,
          left: left,
        });

        break;
      case 'top-end':
        setRect({
          bottom: screenHeight - top,
          right: screenWidth - right,
        });

        break;
    }
  }, [ref, placement, screenWidth, screenHeight, scrollX, scrollY]);

  return rect as Record<Layout, number>;
}

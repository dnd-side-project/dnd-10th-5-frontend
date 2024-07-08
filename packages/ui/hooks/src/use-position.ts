import {
  type CSSProperties,
  type MutableRefObject,
  type Ref,
  useEffect,
  useState,
} from 'react';
import { useScroll } from './use-scroll';
import { useWindowDimension } from './use-window-dimension';

type Layout = 'bottom' | 'left' | 'right' | 'top';

type Side = 'end' | 'start';

export type Placement = Layout | `${Layout}-${Side}`;

function getCenterLocation(target: number, container: number, control: number) {
  const halfDifference = Math.abs(target - container) / 2;

  return target > container
    ? control + halfDifference
    : control - halfDifference;
}

export function usePosition(
  targetRef: Ref<HTMLElement>,
  containerRef: Ref<HTMLElement>,
  placement: Placement = 'bottom',
  sideOffset: number = 0,
) {
  const [rect, setRect] = useState<CSSProperties>({});
  const { scrollX, scrollY } = useScroll();
  const { innerWidth, innerHeight } = useWindowDimension();

  const heightScrollbarWidth =
    innerWidth - document.documentElement.clientWidth;
  const widthScrollbarHeight =
    innerHeight - document.documentElement.clientHeight;
  const screenWidth = innerWidth - heightScrollbarWidth;
  const screenHeight = innerHeight - widthScrollbarHeight;

  useEffect(() => {
    if (!targetRef || !containerRef) {
      return;
    }

    if ([targetRef, containerRef].every((ref) => typeof ref === 'function')) {
      return;
    }

    const {
      top: targetTop,
      right: targetRight,
      bottom: targetBottom,
      left: targetLeft,
      width: targetWidth,
      height: targetHeight,
    } = (
      targetRef as MutableRefObject<HTMLElement>
    ).current.getBoundingClientRect();
    const { width: containerWidth, height: containerHeight } = (
      containerRef as MutableRefObject<HTMLElement>
    ).current.getBoundingClientRect();

    const bottomTop = targetBottom + sideOffset;
    const leftRight = screenWidth - targetLeft + sideOffset;
    const rightLeft = targetRight + sideOffset;
    const topBottom = screenHeight - targetTop + sideOffset;
    const verticalCenter = getCenterLocation(
      targetHeight,
      containerHeight,
      targetTop,
    );
    const horizontalCenter = getCenterLocation(
      targetWidth,
      containerWidth,
      targetLeft,
    );

    switch (placement) {
      case 'bottom':
        setRect({
          top: bottomTop,
          left: horizontalCenter,
        });

        break;
      case 'bottom-start':
        setRect({
          top: bottomTop,
          left: targetLeft,
        });

        break;
      case 'bottom-end':
        setRect({
          top: bottomTop,
          right: screenWidth - targetRight,
        });

        break;
      case 'left':
        setRect({
          top: verticalCenter,
          right: leftRight,
        });

        break;
      case 'left-start':
        setRect({
          top: targetTop,
          right: leftRight,
        });

        break;
      case 'left-end':
        setRect({
          bottom: screenHeight - targetBottom,
          right: leftRight,
        });

        break;
      case 'right':
        setRect({
          top: verticalCenter,
          left: rightLeft,
        });

        break;
      case 'right-start':
        setRect({
          top: targetTop,
          left: rightLeft,
        });

        break;
      case 'right-end':
        setRect({
          bottom: screenHeight - targetBottom,
          left: rightLeft,
        });

        break;
      case 'top':
        setRect({
          bottom: topBottom,
          left: horizontalCenter,
        });

        break;
      case 'top-start':
        setRect({
          bottom: topBottom,
          left: targetLeft,
        });

        break;
      case 'top-end':
        setRect({
          bottom: topBottom,
          right: screenWidth - targetRight,
        });

        break;
    }
  }, [
    containerRef,
    targetRef,
    placement,
    screenWidth,
    screenHeight,
    scrollX,
    scrollY,
    innerWidth,
    innerHeight,
    sideOffset,
  ]);

  return rect;
}

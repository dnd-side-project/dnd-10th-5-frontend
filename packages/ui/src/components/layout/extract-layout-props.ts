import { assignInlineVars } from '@vanilla-extract/dynamic';
import { type CSSProperties } from 'react';
import * as Styles from './layout.css';
import { cx, mergeStyles, px } from '../../utils';

export function extractLayoutProps<
  P extends Styles.LayoutVariants & {
    [key: string]: any;
    className?: string;
    style?: CSSProperties;
  },
>(props: P) {
  const {
    padding,
    paddingX,
    paddingY,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    position,
    inset,
    top,
    right,
    bottom,
    left,
    overflow,
    overflowX,
    overflowY,
    flexBasis,
    flexShrink,
    flexGrow,
    ...restProps
  } = props;

  const newClassName = cx(
    padding && Styles.padding,
    paddingX && Styles.paddingX,
    paddingY && Styles.paddingY,
    paddingTop && Styles.paddingTop,
    paddingRight && Styles.paddingRight,
    paddingBottom && Styles.paddingBottom,
    paddingLeft && Styles.paddingLeft,
    width && Styles.width,
    minWidth && Styles.minWidth,
    maxWidth && Styles.maxWidth,
    height && Styles.width,
    minHeight && Styles.minHeight,
    maxHeight && Styles.maxHeight,
    inset && Styles.inset,
    top && Styles.top,
    right && Styles.right,
    bottom && Styles.bottom,
    left && Styles.left,
    flexBasis && Styles.flexBasis,
    Styles.layoutEnumVariants({
      position,
      overflow,
      overflowX,
      overflowY,
      flexShrink,
      flexGrow,
    }),
    props.className,
  );

  const newStyle = mergeStyles(
    assignInlineVars({
      [Styles.dynamicVars.padding]: px(padding),
      [Styles.dynamicVars.paddingX]: px(paddingX),
      [Styles.dynamicVars.paddingY]: px(paddingY),
      [Styles.dynamicVars.paddingTop]: px(paddingTop),
      [Styles.dynamicVars.paddingRight]: px(paddingRight),
      [Styles.dynamicVars.paddingBottom]: px(paddingBottom),
      [Styles.dynamicVars.paddingLeft]: px(paddingLeft),
      [Styles.dynamicVars.width]: px(width),
      [Styles.dynamicVars.minWidth]: px(minWidth),
      [Styles.dynamicVars.maxWidth]: px(maxWidth),
      [Styles.dynamicVars.height]: px(height),
      [Styles.dynamicVars.minHeight]: px(minHeight),
      [Styles.dynamicVars.maxHeight]: px(maxHeight),
      [Styles.dynamicVars.inset]: px(inset),
      [Styles.dynamicVars.top]: px(top),
      [Styles.dynamicVars.right]: px(right),
      [Styles.dynamicVars.bottom]: px(bottom),
      [Styles.dynamicVars.left]: px(left),
      [Styles.dynamicVars.flexBasis]: px(flexBasis),
    }),
    props.style,
  );

  const resultProps = {
    ...restProps,
    className: newClassName,
    style: newStyle,
  } as Omit<P, keyof Styles.LayoutVariants>;

  return resultProps;
}

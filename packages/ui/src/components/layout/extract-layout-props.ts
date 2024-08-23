import { assignInlineVars } from '@vanilla-extract/dynamic';
import { type CSSProperties } from 'react';
import * as styles from './layout.css';
import { cx, mergeStyles, px } from '../../utils';

export function extractLayoutProps<
  P extends styles.LayoutVariants & {
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
    padding && styles.padding,
    paddingX && styles.paddingX,
    paddingY && styles.paddingY,
    paddingTop && styles.paddingTop,
    paddingRight && styles.paddingRight,
    paddingBottom && styles.paddingBottom,
    paddingLeft && styles.paddingLeft,
    width && styles.width,
    minWidth && styles.minWidth,
    maxWidth && styles.maxWidth,
    height && styles.width,
    minHeight && styles.minHeight,
    maxHeight && styles.maxHeight,
    inset && styles.inset,
    top && styles.top,
    right && styles.right,
    bottom && styles.bottom,
    left && styles.left,
    flexBasis && styles.flexBasis,
    styles.layoutEnumVariants({
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
      [styles.dynamicVars.padding]: px(padding),
      [styles.dynamicVars.paddingX]: px(paddingX),
      [styles.dynamicVars.paddingY]: px(paddingY),
      [styles.dynamicVars.paddingTop]: px(paddingTop),
      [styles.dynamicVars.paddingRight]: px(paddingRight),
      [styles.dynamicVars.paddingBottom]: px(paddingBottom),
      [styles.dynamicVars.paddingLeft]: px(paddingLeft),
      [styles.dynamicVars.width]: px(width),
      [styles.dynamicVars.minWidth]: px(minWidth),
      [styles.dynamicVars.maxWidth]: px(maxWidth),
      [styles.dynamicVars.height]: px(height),
      [styles.dynamicVars.minHeight]: px(minHeight),
      [styles.dynamicVars.maxHeight]: px(maxHeight),
      [styles.dynamicVars.inset]: px(inset),
      [styles.dynamicVars.top]: px(top),
      [styles.dynamicVars.right]: px(right),
      [styles.dynamicVars.bottom]: px(bottom),
      [styles.dynamicVars.left]: px(left),
      [styles.dynamicVars.flexBasis]: px(flexBasis),
    }),
    props.style,
  );

  const resultProps = {
    ...restProps,
    className: newClassName,
    style: newStyle,
  } as Omit<P, keyof styles.LayoutVariants>;

  return resultProps;
}

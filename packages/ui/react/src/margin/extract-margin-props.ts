import { assignInlineVars } from '@vanilla-extract/dynamic';
import { type CSSProperties } from 'react';
import * as styles from './margin.css';
import { cx, mergeStyles, px } from '../utils';

export function extractMarginProps<
  P extends styles.MarginVariants & {
    [key: string]: any;
    className?: string;
    style?: CSSProperties;
  },
>(props: P) {
  const {
    className,
    style,
    margin,
    marginX,
    marginY,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    ...restProps
  } = props;

  const newClassName = cx(
    margin && styles.margin,
    marginX && styles.marginX,
    marginY && styles.marginY,
    marginTop && styles.marginTop,
    marginRight && styles.marginRight,
    marginBottom && styles.marginBottom,
    marginLeft && styles.marginLeft,
    className,
  );

  const newStyle = mergeStyles(
    assignInlineVars({
      [styles.marginVars.margin]: px(margin),
      [styles.marginVars.marginX]: px(marginX),
      [styles.marginVars.marginY]: px(marginY),
      [styles.marginVars.marginTop]: px(marginTop),
      [styles.marginVars.marginRight]: px(marginRight),
      [styles.marginVars.marginBottom]: px(marginBottom),
      [styles.marginVars.marginLeft]: px(marginLeft),
    }),
    style,
  );

  const resultProps = {
    ...restProps,
    className: newClassName,
    style: newStyle,
  } as Omit<P, keyof styles.MarginVariants>;

  return resultProps;
}

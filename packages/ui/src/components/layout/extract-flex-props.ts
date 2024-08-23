import { assignInlineVars } from '@vanilla-extract/dynamic';
import { type CSSProperties } from 'react';
import * as styles from './flex.css';
import { cx, mergeStyles, px } from '../../utils';

export function extractFlexProps<
  P extends styles.FlexVariants & {
    [key: string]: any;
    className?: string;
    style?: CSSProperties;
  },
>(props: P) {
  const {
    display,
    direction,
    align,
    justify,
    wrap,
    gap,
    gapX,
    gapY,
    ...restProps
  } = props;

  const newClassName = cx(
    gap && styles.gap,
    gapX && styles.gapX,
    gapY && styles.gapY,
    styles.flexEnumVariants({ display, direction, align, justify, wrap }),
    props.className,
  );

  const newStyle = mergeStyles(
    assignInlineVars({
      [styles.dynamicVars.gap]: px(gap),
      [styles.dynamicVars.gapX]: px(gapX),
      [styles.dynamicVars.gapY]: px(gapY),
    }),
    props.style,
  );

  const resultProps = {
    ...restProps,
    className: newClassName,
    style: newStyle,
  } as Omit<P, keyof styles.FlexVariants>;

  return resultProps;
}

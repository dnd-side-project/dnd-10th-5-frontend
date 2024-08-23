import { assignInlineVars } from '@vanilla-extract/dynamic';
import { type CSSProperties } from 'react';
import * as Styles from './flex.css';
import { cx, mergeStyles, px } from '../../utils';

export function extractFlexProps<
  P extends Styles.FlexVariants & {
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
    gap && Styles.gap,
    gapX && Styles.gapX,
    gapY && Styles.gapY,
    Styles.flexEnumVariants({ display, direction, align, justify, wrap }),
    props.className,
  );

  const newStyle = mergeStyles(
    assignInlineVars({
      [Styles.dynamicVars.gap]: px(gap),
      [Styles.dynamicVars.gapX]: px(gapX),
      [Styles.dynamicVars.gapY]: px(gapY),
    }),
    props.style,
  );

  const resultProps = {
    ...restProps,
    className: newClassName,
    style: newStyle,
  } as Omit<P, keyof Styles.FlexVariants>;

  return resultProps;
}

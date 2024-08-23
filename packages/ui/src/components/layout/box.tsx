import * as Styles from './box.css';
import { extractLayoutProps } from './extract-layout-props';
import type * as CommonStyles from './layout.css';
import {
  type HTMLFavolinkPropsWithout,
  type RemovedProps,
  Slot,
  forwardRef,
} from '../../system';
import { cx } from '../../utils';
import { type MarginVariants, extractMarginProps } from '../margin';

type BoxDivProps = HTMLFavolinkPropsWithout<'div', RemovedProps> & {
  as?: 'div';
};

type BoxSpanProps = HTMLFavolinkPropsWithout<'span', RemovedProps> & {
  as: 'span';
};

export type BoxProps = CommonStyles.LayoutVariants &
  MarginVariants &
  Styles.BoxVariants &
  (BoxDivProps | BoxSpanProps);

export const Box = forwardRef<BoxProps, 'div'>(
  function Box(props, forwardedRef) {
    const {
      as: Tag = 'div',
      asChild,
      className,
      display,
      ...restProps
    } = extractMarginProps(extractLayoutProps(props));

    return (
      <Slot
        {...restProps}
        ref={forwardedRef}
        className={cx(
          'favolink-box',
          Styles.boxVariants({ display }),
          className,
        )}
      >
        {asChild ? props.children : <Tag>{props.children}</Tag>}
      </Slot>
    );
  },
);

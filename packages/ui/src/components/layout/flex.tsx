import { extractFlexProps } from './extract-flex-props';
import { extractLayoutProps } from './extract-layout-props';
import type * as Styles from './flex.css';
import type * as CommonStyles from './layout.css';
import {
  type HTMLFavolinkPropsWithout,
  type RemovedProps,
  Slot,
  forwardRef,
} from '../../system';
import { cx } from '../../utils';
import { type MarginVariants, extractMarginProps } from '../margin';

type FlexDivProps = HTMLFavolinkPropsWithout<'div', RemovedProps> & {
  as?: 'div';
};

type FlexSpanProps = HTMLFavolinkPropsWithout<'span', RemovedProps> & {
  as: 'span';
};

export type FlexProps = CommonStyles.LayoutVariants &
  MarginVariants &
  Styles.FlexVariants &
  (FlexDivProps | FlexSpanProps);

export const Flex = forwardRef<FlexProps, 'div'>(
  function Flex(props, forwardedRef) {
    const {
      as: Tag = 'div',
      asChild,
      className,
      children,
      ...restProps
    } = extractMarginProps(extractFlexProps(extractLayoutProps(props)));

    return (
      <Slot
        {...restProps}
        ref={forwardedRef}
        className={cx('favolink-flex', className)}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  },
);

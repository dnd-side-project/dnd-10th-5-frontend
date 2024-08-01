import { type HTMLFavolinkProps, Slot, forwardRef } from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
import * as styles from './heading.css';
import * as commonStyles from './typography.css';
import { type MarginVariants, extractMarginProps } from '../../margin';

export type HeadingProps = commonStyles.TypographyVariants &
  HTMLFavolinkProps<'h1'> &
  MarginVariants &
  styles.HeadingVariants;

export const Heading = forwardRef<HeadingProps, 'h1'>(
  function Heading(props, forwardedRef) {
    const {
      as: Tag = 'h1',
      asChild,
      className,
      children,
      align,
      color,
      truncate,
      wrap,
      weight,
      ...restProps
    } = extractMarginProps(props);

    return (
      <Slot
        {...restProps}
        ref={forwardedRef}
        className={cx(
          'favolink-heading',
          commonStyles.typographyVariants({ align, color, truncate, wrap }),
          styles.headingVariants({ as: Tag, weight }),
          className,
        )}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  },
);

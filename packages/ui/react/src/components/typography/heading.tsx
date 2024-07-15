import { type HTMLFavolinkProps, Slot, forwardRef } from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
import * as styles from './heading.styles.css';

export type HeadingProps = HTMLFavolinkProps<'h2'> &
  Omit<styles.HeadingVariants, 'variant'> & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    weight?: 'bold' | 'semibold';
  };

export const Heading = forwardRef<HeadingProps, 'h1'>(
  function Heading(props, ref) {
    const {
      as: Tag = 'h1',
      asChild,
      align,
      className,
      children,
      weight = 'bold',
      truncate,
      ...restProps
    } = props;

    const variant = `${Tag}${weight}` as styles.HeadingVariants['variant'];

    return (
      <Slot
        {...restProps}
        ref={ref}
        className={cx(
          'favolink-heading',
          styles.headingVariants({ variant, truncate, align }),
          className,
        )}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  },
);

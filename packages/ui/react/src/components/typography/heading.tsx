import { type HTMLFavolinkProps, Slot, forwardRef } from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
import * as styles from './heading.styles.css';

export type HeadingProps = HTMLFavolinkProps<'h2'> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  weight?: 'bold' | 'semibold';
};

export const Heading = forwardRef<HeadingProps, 'h2'>(
  function Heading(props, ref) {
    const {
      children,
      className,
      as: Tag = 'h2',
      asChild,
      weight = 'bold',
      ...restProps
    } = props;

    const _weight = `${Tag as string}${weight}` as Exclude<
      styles.HeadingVariants,
      undefined
    >['weight'];

    return (
      <Slot
        {...restProps}
        ref={ref}
        className={cx(
          'favolink-heading',
          styles.heading({ weight: _weight }),
          className,
        )}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  },
);

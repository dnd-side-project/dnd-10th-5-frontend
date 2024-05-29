import { favolink, forwardRef } from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
import { type ComponentPropsWithoutRef, type ElementType } from 'react';
import * as styles from './heading.styles.css';

type PolymorphicHeadingProps = {
  as?: ElementType<any, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
  asChild?: boolean;
};

export type HeadingProps = ComponentPropsWithoutRef<'h2'> &
  PolymorphicHeadingProps & {
    weight?: 'bold' | 'semibold';
  };

export const Heading = forwardRef<HeadingProps, 'h2'>(
  function Heading(props, ref) {
    const {
      children,
      className,
      as: Tag = 'h2',
      weight = 'bold',
      ...restProps
    } = props;

    const _weight = `${Tag as string}${weight}` as Exclude<
      styles.HeadingVariants,
      undefined
    >['weight'];

    return (
      <favolink.h2
        {...restProps}
        ref={ref}
        as={Tag}
        className={cx(
          'favolink-heading',
          styles.heading({ weight: _weight }),
          className,
        )}
      >
        {children}
      </favolink.h2>
    );
  },
);

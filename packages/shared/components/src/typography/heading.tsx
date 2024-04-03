import { favolink, forwardRef } from '@favolink/system';
import { classNames } from '@favolink/utils';
import { type ComponentPropsWithoutRef, type ElementType } from 'react';
import * as styles from './heading.styles.css';

type AsHeading = {
  as?: ElementType<any, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
};

export type HeadingProps = AsHeading &
  ComponentPropsWithoutRef<'h2'> & {
    weight?: 'bold' | 'semibold';
  };

export const Heading = forwardRef<HeadingProps, 'h2'>(
  function Heading(props, ref) {
    const { children, className, weight = 'bold', ...restProps } = props;

    const realWeight = `${props.as as string}${weight}` as styles.HeadingWeight;

    return (
      <favolink.h2
        {...restProps}
        ref={ref}
        className={classNames(
          'favolink-heading',
          styles.headingWeight[realWeight],
          className,
        )}
      >
        {children}
      </favolink.h2>
    );
  },
);

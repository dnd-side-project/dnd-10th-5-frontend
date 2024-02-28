import { classNames } from '@favolink/utils';
import {
  type ComponentPropsWithoutRef,
  type ElementType,
  forwardRef,
} from 'react';
import * as styles from './styles.css';

type HeadingProps = ComponentPropsWithoutRef<'h2'> & {
  weight?: 'bold' | 'semibold';
  as?: ElementType<
    { className: string },
    'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  >;
};

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading(props, ref) {
    const { children, className, as, weight = 'bold', ...restProps } = props;

    const Component = as ?? 'h2';
    const realWeight = `${Component as string}${weight}` as styles.Weight;

    return (
      <Component
        {...restProps}
        ref={ref}
        className={classNames(styles.weight[realWeight], className)}
      >
        {children}
      </Component>
    );
  },
);

export default Heading;

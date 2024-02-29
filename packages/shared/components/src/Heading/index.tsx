import { classNames } from '@favolink/utils';
import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ElementType,
  forwardRef,
} from 'react';
import * as styles from './styles.css';

const HEADING_CLASSNAME = 'favolink-heading';

type HeadingProps = ComponentPropsWithoutRef<'h2'> & {
  weight?: 'bold' | 'semibold';
  as?: ElementType<
    { className: string },
    'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  >;
};

const Heading = forwardRef<ComponentRef<'h2'>, HeadingProps>(
  function Heading(props, ref) {
    const {
      children,
      className,
      as: Component = 'h2',
      weight = 'bold',
      ...restProps
    } = props;

    const realWeight = `${Component as string}${weight}` as styles.Weight;

    return (
      <Component
        {...restProps}
        ref={ref}
        className={classNames(
          HEADING_CLASSNAME,
          styles.weight[realWeight],
          className,
        )}
      >
        {children}
      </Component>
    );
  },
);

export default Heading;

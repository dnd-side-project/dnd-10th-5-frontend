import { classNames } from '@favolink/utils';
import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  forwardRef,
} from 'react';
import * as styles from './styles.css';

const TEXT_CLASSNAME = 'favolink-text';

type TextProps = ComponentPropsWithoutRef<'p'> & {
  scale?: styles.Scale;
};

const Text = forwardRef<ComponentRef<'p'>, TextProps>(
  function Text(props, ref) {
    const { children, className, scale = '2regular', ...restProps } = props;

    return (
      <p
        {...restProps}
        ref={ref}
        className={classNames(TEXT_CLASSNAME, styles.scale[scale], className)}
      >
        {children}
      </p>
    );
  },
);

export default Text;

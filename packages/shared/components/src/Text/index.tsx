import { classNames } from '@favolink/utils';
import { type ComponentPropsWithoutRef, forwardRef } from 'react';
import * as styles from './styles.css';

type TextProps = ComponentPropsWithoutRef<'p'> & {
  scale?: styles.Scale;
};

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  function Text(props, ref) {
    const { children, className, scale = '2regular', ...restProps } = props;

    return (
      <p
        {...restProps}
        ref={ref}
        className={classNames(styles.scale[scale], className)}
      >
        {children}
      </p>
    );
  },
);

export default Text;

import { classNames } from '@favolink/utils';
import { type ComponentPropsWithoutRef, forwardRef } from 'react';
import * as styles from './styles.css';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  colorScheme?: styles.ColorScheme;
  size?: styles.Size;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    const {
      children,
      className,
      colorScheme = 'white',
      size = 'medium',
      ...restProps
    } = props;

    return (
      <button
        {...restProps}
        ref={ref}
        className={classNames(
          styles.base,
          styles.size[size],
          styles.colorScheme[colorScheme],
          className,
        )}
      >
        {children}
      </button>
    );
  },
);

export default Button;

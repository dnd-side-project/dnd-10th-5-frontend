import { classNames } from '@favolink/utils';
import {
  type ComponentPropsWithoutRef,
  type ComponentRef,
  forwardRef,
} from 'react';
import * as styles from './styles.css';

const BUTTON_CLASSNAME = 'favolink-button';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  colorScheme?: styles.ColorScheme;
  size?: styles.Size;
};

const Button = forwardRef<ComponentRef<'button'>, ButtonProps>(
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
          BUTTON_CLASSNAME,
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

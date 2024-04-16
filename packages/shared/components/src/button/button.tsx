import { type HTMLFavolinkProps, favolink, forwardRef } from '@favolink/system';
import { cx } from '@favolink/utils';
import * as styles from './button.styles.css';

export type ButtonProps = HTMLFavolinkProps<'button'> & {
  colorScheme?: styles.ButtonColorScheme;
  size?: styles.ButtonSize;
};

export const Button = forwardRef<ButtonProps, 'button'>(
  function Button(props, ref) {
    const {
      children,
      className,
      colorScheme = 'white',
      size = 'medium',
      ...restProps
    } = props;

    return (
      <favolink.button
        {...restProps}
        ref={ref}
        className={cx(
          'favolink-button',
          styles.buttonBase,
          styles.buttonSize[size],
          styles.buttonColorScheme[colorScheme],
          className,
        )}
      >
        {children}
      </favolink.button>
    );
  },
);

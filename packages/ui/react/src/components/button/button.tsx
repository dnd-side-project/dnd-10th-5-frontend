import {
  type HTMLFavolinkProps,
  favolink,
  forwardRef,
} from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
import * as styles from './button.styles.css';

export type ButtonProps = HTMLFavolinkProps<'button'> & styles.ButtonVariants;

export const Button = forwardRef<ButtonProps, 'button'>(
  function Button(props, ref) {
    const { children, className, colorScheme, size, ...restProps } = props;

    return (
      <favolink.button
        {...restProps}
        ref={ref}
        className={cx(
          'favolink-button',
          styles.button({ size, colorScheme }),
          className,
        )}
      >
        {children}
      </favolink.button>
    );
  },
);

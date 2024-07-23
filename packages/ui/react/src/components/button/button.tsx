import {
  type HTMLFavolinkProps,
  Slottable,
  favolink,
  forwardRef,
} from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
import { type ReactElement } from 'react';
import * as styles from './button.styles.css';

export type ButtonProps = HTMLFavolinkProps<'button'> &
  styles.ButtonVariants & {
    rightElement?: ReactElement;
    leftElement?: ReactElement;
  };

export const Button = forwardRef<ButtonProps, 'button'>(
  function Button(props, ref) {
    const {
      children,
      className,
      rightElement,
      leftElement,
      colorScheme,
      justify,
      variant,
      weight,
      radius,
      width,
      ...restProps
    } = props;

    const hasElement = Boolean(rightElement || leftElement);

    return (
      <favolink.button
        type="button"
        {...restProps}
        ref={ref}
        className={cx(
          'favolink-button',
          styles.buttonVariants({
            colorScheme,
            justify,
            variant,
            weight,
            radius,
            width,
          }),
          hasElement && styles.buttonHasElement,
          className,
        )}
      >
        {leftElement}
        <Slottable>{children}</Slottable>
        <span className={cx(styles.justifyStartButtonHasRightElement)}>
          {rightElement}
        </span>
      </favolink.button>
    );
  },
);

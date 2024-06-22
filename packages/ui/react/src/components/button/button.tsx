import {
  type HTMLFavolinkProps,
  Slottable,
  favolink,
  forwardRef,
} from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
import { type ReactElement } from 'react';
import * as styles from './button.styles.css';

type ExtendedButtonProps = {
  rightElement?: ReactElement;
  leftElement?: ReactElement;
};

export type ButtonProps = ExtendedButtonProps &
  HTMLFavolinkProps<'button'> &
  styles.ButtonVariants & { colorScheme?: styles.ButtonColorScheme };

export const Button = forwardRef<ButtonProps, 'button'>(
  function Button(props, ref) {
    const {
      children,
      className,
      rightElement,
      leftElement,
      radius,
      variant,
      fullfill,
      justify,
      text,
      colorScheme = 'white',
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
            radius,
            variant,
            fullfill,
            justify,
            text,
          }),
          styles.buttonColorScheme[colorScheme],
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

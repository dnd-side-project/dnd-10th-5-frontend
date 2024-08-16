import { type ReactElement, useMemo } from 'react';
import * as styles from './button.styles.css';
import {
  type HTMLFavolinkPropsWithout,
  type RemovedProps,
  Slottable,
  favolink,
  forwardRef,
} from '../../system';
import { cx } from '../../utils';
import { extractMarginProps } from '../margin';

export type ButtonProps = HTMLFavolinkPropsWithout<'button', RemovedProps> &
  styles.ButtonVariants & {
    rightElement?: ReactElement;
    leftElement?: ReactElement;
  };

export const Button = forwardRef<ButtonProps, 'button'>(
  function Button(props, ref) {
    const {
      className,
      rightElement,
      leftElement,
      color,
      justify,
      variant,
      weight,
      radius,
      width,
      ...restProps
    } = extractMarginProps(props);

    const hasElement = useMemo(
      () => Boolean(rightElement || leftElement),
      [rightElement, leftElement],
    );

    return (
      <favolink.button
        type="button"
        {...restProps}
        ref={ref}
        className={cx(
          'favolink-button',
          styles.buttonVariants({
            color,
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
        <Slottable>{props.children}</Slottable>
        <span className={styles.justifyStartButtonHasRightElement}>
          {rightElement}
        </span>
      </favolink.button>
    );
  },
);

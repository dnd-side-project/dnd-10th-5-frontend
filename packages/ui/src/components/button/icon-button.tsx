import { type ReactElement } from 'react';
import * as styles from './icon-button.styles.css';
import { type HTMLFavolinkProps, favolink, forwardRef } from '../../system';
import { cx } from '../../utils';

export type IconButtonProps = Omit<HTMLFavolinkProps<'button'>, 'children'> &
  styles.IconButtonVariants & {
    icon: ReactElement;
  };

export const IconButton = forwardRef<IconButtonProps, 'button'>(
  function IconButton(props, ref) {
    const { className, icon, colorScheme, size, ...restProps } = props;

    return (
      <favolink.button
        {...restProps}
        ref={ref}
        className={cx(
          'favolink-button',
          styles.iconButton({ colorScheme, size }),
          className,
        )}
      >
        {icon}
      </favolink.button>
    );
  },
);

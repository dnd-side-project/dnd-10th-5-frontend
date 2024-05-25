import { type ReactElement } from 'react';
import {
  type HTMLFavolinkProps,
  favolink,
  forwardRef,
} from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
import * as styles from './icon-button.styles.css';

export type IconButtonProps = HTMLFavolinkProps<'button'> & {
  icon: ReactElement;
  colorScheme?: styles.IconButtonColorScheme;
  size?: styles.IconButtonSize;
};

export const IconButton = forwardRef<IconButtonProps, 'button'>(
  function IconButton(props, ref) {
    const {
      className,
      icon,
      colorScheme = 'white',
      size = 'small',
      ...restProps
    } = props;

    return (
      <favolink.button
        {...restProps}
        ref={ref}
        className={cx(
          'favolink-button',
          styles.iconButtonBase,
          styles.iconButtonSize[size],
          styles.iconButtoncolorScheme[colorScheme],
          className,
        )}
      >
        {icon}
      </favolink.button>
    );
  },
);

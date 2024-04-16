import { type HTMLFavolinkProps, favolink, forwardRef } from '@favolink/system';
import { cx } from '@favolink/utils';
import { type ReactElement } from 'react';
import * as styles from './icon-button.styles.css';
import * as theme from './icon-button.theme.css';

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
          theme.iconButtonColor,
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

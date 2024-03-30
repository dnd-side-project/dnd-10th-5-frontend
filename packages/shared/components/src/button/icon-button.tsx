import { type HTMLFavolinkProps, favolink, forwardRef } from '@favolink/system';
import { classNames } from '@favolink/utils';
import { type ReactElement } from 'react';
import * as styles from './icon-button.styles.css';
import * as theme from './icon-button.theme.css';

const CLASSNAME_ICONBUTTOM = 'favolink-iconbutton';

export type IconButtonProps = HTMLFavolinkProps<'button'> & {
  icon: ReactElement;
  colorScheme?: styles.ColorScheme;
  size?: styles.Size;
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
        className={classNames(
          CLASSNAME_ICONBUTTOM,
          theme.color,
          styles.base,
          styles.size[size],
          styles.colorScheme[colorScheme],
          className,
        )}
      >
        {icon}
      </favolink.button>
    );
  },
);

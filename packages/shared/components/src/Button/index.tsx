import { type HTMLFavolinkProps, favolink, forwardRef } from '@favolink/system';
import { classNames } from '@favolink/utils';
import * as styles from './styles.css';

const BUTTON_CLASSNAME = 'favolink-button';

export type ButtonProps = HTMLFavolinkProps<'button'> & {
  colorScheme?: styles.ColorScheme;
  size?: styles.Size;
};

const Button = forwardRef<ButtonProps, 'button'>(function Button(props, ref) {
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
      className={classNames(
        BUTTON_CLASSNAME,
        styles.base,
        styles.size[size],
        styles.colorScheme[colorScheme],
        className,
      )}
    >
      {children}
    </favolink.button>
  );
});

export default Button;

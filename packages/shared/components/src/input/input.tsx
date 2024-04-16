import { type HTMLFavolinkProps, favolink, forwardRef } from '@favolink/system';
import { cx } from '@favolink/utils';
import * as styles from './input.styles.css';

export type InputProps = HTMLFavolinkProps<'input'> & {
  variant?: styles.InputVariant;
};

export const Input = forwardRef<InputProps, 'input'>(
  function Input(props, ref) {
    const { className, variant = 'outline', ...restPorps } = props;

    return (
      <favolink.input
        {...restPorps}
        ref={ref}
        className={cx(
          'favolink-input',
          styles.inputBase,
          styles.inputVariant[variant],
          className ?? styles.inputWithElement,
          className,
        )}
      />
    );
  },
);

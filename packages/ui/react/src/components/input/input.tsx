import * as styles from './input.styles.css';
import { type HTMLFavolinkProps, favolink, forwardRef } from '../../system';
import { cx } from '../../utils';

export type InputProps = HTMLFavolinkProps<'input'> & styles.InputVariants;

export const Input = forwardRef<InputProps, 'input'>(
  function Input(props, ref) {
    const { className, variant, ...restPorps } = props;

    return (
      <favolink.input
        {...restPorps}
        ref={ref}
        className={cx(
          'favolink-input',
          styles.input({ variant }),
          className ?? styles.inputWithElement,
          className,
        )}
      />
    );
  },
);

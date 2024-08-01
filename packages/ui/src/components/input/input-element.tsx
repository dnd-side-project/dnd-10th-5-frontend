import * as styles from './input-element.styles.css';
import { type HTMLFavolinkProps, favolink, forwardRef } from '../../system';
import { cx } from '../../utils';

type InputElementProps = HTMLFavolinkProps<'div'>;

export type InputLeftElementProps = InputElementProps;

export const InputLeftElement = forwardRef<InputLeftElementProps, 'div'>(
  function InputElement(props, ref) {
    const { children, className, ...restProps } = props;

    return (
      <favolink.div
        {...restProps}
        ref={ref}
        className={cx(
          '$favolink-input__left-element',
          styles.inputElement({ direction: 'left' }),
          className,
        )}
      >
        {children}
      </favolink.div>
    );
  },
);

export type InputRightElementProps = InputElementProps;

export const InputRightElement = forwardRef<InputRightElementProps, 'div'>(
  function InputElement(props, ref) {
    const { children, className, ...restProps } = props;

    return (
      <favolink.div
        {...restProps}
        ref={ref}
        className={cx(
          'favolink-input__right-element',
          styles.inputElement({ direction: 'right' }),
          className,
        )}
      >
        {children}
      </favolink.div>
    );
  },
);

import { type HTMLFavolinkProps, favolink, forwardRef } from '@favolink/system';
import { classNames } from '@favolink/utils';
import * as styles from './input-element-styles.css';

type InputElementProps = HTMLFavolinkProps<'div'>;

export type InputLeftElementProps = InputElementProps;

export const InputLeftElement = forwardRef<InputLeftElementProps, 'div'>(
  function InputElement(props, ref) {
    const { children, className, ...restProps } = props;

    return (
      <favolink.div
        {...restProps}
        ref={ref}
        className={classNames(
          '$favolink-input__left-element',
          styles.inputElementDirection.left,
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
        className={classNames(
          'favolink-input__right-element',
          styles.inputElementDirection.right,
          className,
        )}
      >
        {children}
      </favolink.div>
    );
  },
);

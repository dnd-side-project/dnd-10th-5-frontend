import { type HTMLFavolinkProps, favolink, forwardRef } from '@favolink/system';
import { classNames } from '@favolink/utils';
import * as styles from './styles.css';

const INPUT_CLASSNAME = 'favolink-input';

export type InputGroupProps = HTMLFavolinkProps<'div'>;

export const InputGroup = forwardRef<InputGroupProps, 'div'>(
  function InputGroup(props, ref) {
    const { children, className, ...restProps } = props;

    return (
      <favolink.div
        {...restProps}
        ref={ref}
        className={classNames(
          `${INPUT_CLASSNAME}__group`,
          styles.groupBase,
          className,
        )}
      >
        {children}
      </favolink.div>
    );
  },
);

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
          `${INPUT_CLASSNAME}__left-element`,
          styles.elementDirection.left,
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
          `${INPUT_CLASSNAME}__right-element`,
          styles.elementDirection.right,
          className,
        )}
      >
        {children}
      </favolink.div>
    );
  },
);

export type InputProps = HTMLFavolinkProps<'input'> & {
  variant?: styles.Variant;
};

const Input = forwardRef<InputProps, 'input'>(function Input(props, ref) {
  const { className, variant = 'outline', ...restPorps } = props;

  return (
    <favolink.input
      {...restPorps}
      ref={ref}
      className={classNames(
        INPUT_CLASSNAME,
        styles.base,
        styles.variant[variant],
        className ?? styles.withElement,
        className,
      )}
    />
  );
});

export default Input;

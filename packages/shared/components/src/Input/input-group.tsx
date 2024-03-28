import { type HTMLFavolinkProps, favolink, forwardRef } from '@favolink/system';
import { classNames } from '@favolink/utils';
import * as styles from './input-group-styles.css';

export type InputGroupProps = HTMLFavolinkProps<'div'>;

export const InputGroup = forwardRef<InputGroupProps, 'div'>(
  function InputGroup(props, ref) {
    const { children, className, ...restProps } = props;

    return (
      <favolink.div
        {...restProps}
        ref={ref}
        className={classNames(
          'favolink-input__group',
          styles.inputGroupBase,
          className,
        )}
      >
        {children}
      </favolink.div>
    );
  },
);

import { cx } from '@favolink-ui/utils';
import * as styles from './input-group.styles.css';
import { type HTMLFavolinkProps, favolink, forwardRef } from '../../system';

export type InputGroupProps = HTMLFavolinkProps<'div'>;

export const InputGroup = forwardRef<InputGroupProps, 'div'>(
  function InputGroup(props, ref) {
    const { children, className, ...restProps } = props;

    return (
      <favolink.div
        {...restProps}
        ref={ref}
        className={cx(
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

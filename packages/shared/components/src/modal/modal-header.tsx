import { type HTMLFavolinkProps, favolink, forwardRef } from '@favolink/system';
import { cx } from '@favolink/utils';
import * as styles from './modal-header.styles.css';

export type ModalHeaderProps = HTMLFavolinkProps<'header'>;

export const ModalHeader = forwardRef<ModalHeaderProps, 'header'>(
  function ModalHeader(props, ref) {
    const { children, className, ...restProps } = props;

    return (
      <favolink.header
        {...restProps}
        ref={ref}
        className={cx(
          'favolink-modal__header',
          styles.modalHeaderBase,
          className,
        )}
      >
        {children}
      </favolink.header>
    );
  },
);

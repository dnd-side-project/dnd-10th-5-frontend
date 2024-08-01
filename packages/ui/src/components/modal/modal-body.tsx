import { type HTMLFavolinkProps, favolink, forwardRef } from '../../system';
import { cx } from '../../utils';

export type ModalBodyProps = HTMLFavolinkProps<'main'>;

export const ModalBody = forwardRef<ModalBodyProps, 'main'>(
  function ModalBody(props, ref) {
    const { children, className, ...restProps } = props;

    return (
      <favolink.main
        {...restProps}
        ref={ref}
        className={cx('favolink-modal__body', className)}
      >
        {children}
      </favolink.main>
    );
  },
);

import { useModalContext } from './modal.context';
import { type HTMLFavolinkProps, favolink, forwardRef } from '../../system';
import { cx, mergeFns } from '../../utils';

const CLOSE_NAME = 'ModalClose';

export type ModalCloseProps = HTMLFavolinkProps<'button'>;

export const ModalClose = forwardRef<ModalCloseProps, 'button'>(
  function ModalClose(props, ref) {
    const { children, className, onClick, ...restProps } = props;

    const { onOpenChange } = useModalContext(CLOSE_NAME);

    return (
      <favolink.button
        {...restProps}
        asChild
        ref={ref}
        className={cx('favolink-modal__close', className)}
        onClick={mergeFns(onClick, () => {
          onOpenChange(false);
        })}
      >
        {children}
      </favolink.button>
    );
  },
);

ModalClose.displayName = CLOSE_NAME;

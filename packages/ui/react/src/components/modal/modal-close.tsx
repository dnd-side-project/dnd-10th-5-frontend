import { cx, mergeFns } from '@favolink-ui/utils';
import { useModalContext } from './modal.context';
import { type HTMLFavolinkProps, favolink, forwardRef } from '../../system';

export type ModalCloseProps = HTMLFavolinkProps<'button'>;

export const ModalClose = forwardRef<ModalCloseProps, 'button'>(
  function ModalClose(props, ref) {
    const { children, className, onClick, ...restProps } = props;

    const { onOpenChange } = useModalContext();

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

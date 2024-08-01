import { cx, mergeFns } from '@favolink-ui/utils';
import { useModalContext } from './modal.context';
import { type HTMLFavolinkProps, favolink, forwardRef } from '../../system';

export type ModalTriggerProps = HTMLFavolinkProps<'button'>;

export const ModalTrigger = forwardRef<ModalTriggerProps, 'button'>(
  function MenuTrigger(props, ref) {
    const { className, children, onClick, ...restProps } = props;

    const { onOpenChange } = useModalContext();

    return (
      <favolink.button
        {...restProps}
        asChild
        ref={ref}
        className={cx('favolink-modal__trigger', className)}
        onClick={mergeFns(onClick, () => {
          onOpenChange(true);
        })}
      >
        {children}
      </favolink.button>
    );
  },
);

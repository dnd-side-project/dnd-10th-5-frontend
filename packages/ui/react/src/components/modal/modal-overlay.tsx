import * as styles from './modal-overlay.styles.css';
import { useModalContext } from './modal.context';
import { type HTMLFavolinkProps, favolink, forwardRef } from '../../system';
import { cx, mergeFns } from '../../utils';

export type ModalOverlayProps = HTMLFavolinkProps<'div'>;

export const ModalOverlay = forwardRef<ModalOverlayProps, 'div'>(
  function ModalOverlay(props, ref) {
    const { className, onClick, ...restProps } = props;

    const { onOpenChange, closeOnOverlayClick } = useModalContext();

    return (
      <favolink.div
        {...restProps}
        ref={ref}
        onClick={
          closeOnOverlayClick
            ? mergeFns(() => {
                onOpenChange(false);
              }, onClick)
            : onClick
        }
        className={cx(
          'favolink-modal__overlay',
          styles.modalOverlayBase,
          className,
        )}
      />
    );
  },
);

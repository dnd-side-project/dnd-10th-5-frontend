import {
  type HTMLFavolinkProps,
  favolink,
  forwardRef,
} from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
import * as styles from './modal-content.styles.css';
import { ModalOverlay } from './modal-overlay';
import { useModalContext } from './modal.context';

export type ModalContentProps = HTMLFavolinkProps<'div'>;

export const ModalContent = forwardRef<ModalContentProps, 'div'>(
  function ModalContent(props, ref) {
    const { children, className, ...restPorps } = props;

    const { onClose, closeOnOverlayClick } = useModalContext();

    return (
      <>
        <ModalOverlay
          onClick={closeOnOverlayClick ? onClose : undefined}
          variant="withContent"
        />
        <favolink.div
          {...restPorps}
          ref={ref}
          className={cx(
            'favolink-modal__content',
            styles.modalContentBase,
            className,
          )}
        >
          {children}
        </favolink.div>
      </>
    );
  },
);

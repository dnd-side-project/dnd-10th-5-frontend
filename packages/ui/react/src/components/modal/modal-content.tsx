import * as styles from './modal-content.styles.css';
import { type HTMLFavolinkProps, favolink, forwardRef } from '../../system';
import { cx } from '../../utils';

export type ModalContentProps = HTMLFavolinkProps<'div'>;

export const ModalContent = forwardRef<ModalContentProps, 'div'>(
  function ModalContent(props, ref) {
    const { children, className, ...restPorps } = props;

    return (
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
    );
  },
);

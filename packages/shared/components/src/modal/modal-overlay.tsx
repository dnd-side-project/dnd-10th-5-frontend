import { type HTMLFavolinkProps, favolink, forwardRef } from '@favolink/system';
import { cx } from '@favolink/utils';
import * as styles from './modal-overlay.styles.css';

export type ModalOverlayProps = HTMLFavolinkProps<'div'> & {
  variant?: styles.ModalOverlayVariant;
};

export const ModalOverlay = forwardRef<ModalOverlayProps, 'div'>(
  function ModalOverlay(props, ref) {
    const { variant = 'original', ...restProps } = props;

    return (
      <favolink.div
        {...restProps}
        ref={ref}
        className={cx(
          'favolink-modal__overlay',
          styles.modalOverlayBase,
          styles.modalOverlayVariant[variant],
        )}
      />
    );
  },
);

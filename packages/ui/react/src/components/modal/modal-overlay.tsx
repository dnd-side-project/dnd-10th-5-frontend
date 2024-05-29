import {
  type HTMLFavolinkProps,
  favolink,
  forwardRef,
} from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
import * as styles from './modal-overlay.styles.css';

export type ModalOverlayProps = HTMLFavolinkProps<'div'> &
  styles.ModalOverlayVariants;

export const ModalOverlay = forwardRef<ModalOverlayProps, 'div'>(
  function ModalOverlay(props, ref) {
    const { variant, ...restProps } = props;

    return (
      <favolink.div
        {...restProps}
        ref={ref}
        className={cx(
          'favolink-modal__overlay',
          styles.modalOverlay({ variant }),
        )}
      />
    );
  },
);

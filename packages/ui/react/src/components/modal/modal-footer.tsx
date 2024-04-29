import {
  type HTMLFavolinkProps,
  favolink,
  forwardRef,
} from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
import * as styles from './modal-footer.styles.css';

export type ModalFooterProps = HTMLFavolinkProps<'footer'>;

export const ModalFooter = forwardRef<ModalFooterProps, 'footer'>(
  function ModalFooter(props, ref) {
    const { children, className, ...restProps } = props;

    return (
      <favolink.footer
        {...restProps}
        ref={ref}
        className={cx(
          `favolink-modal__footer`,
          styles.modalFooterBase,
          className,
        )}
      >
        {children}
      </favolink.footer>
    );
  },
);

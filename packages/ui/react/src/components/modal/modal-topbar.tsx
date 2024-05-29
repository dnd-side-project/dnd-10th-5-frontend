import {
  type HTMLFavolinkProps,
  favolink,
  forwardRef,
} from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
import * as styles from './modal-topbar.styles.css';
import { useModalContext } from './modal.context';
import { Text } from '../typography';

export type ModalTopbarProps = HTMLFavolinkProps<'div'> &
  styles.ModalTopbarVariants;

export const ModalTopbar = forwardRef<ModalTopbarProps, 'div'>(
  function ModalTopBar(props, ref) {
    const { children, layout, className, ...restProps } = props;

    const { onClose } = useModalContext();

    const isCouple = layout !== 'single';

    return (
      <favolink.div
        {...restProps}
        ref={ref}
        className={cx(
          `favolink-modal__topbar`,
          styles.modalTopbar({ layout }),
          className,
        )}
      >
        {isCouple && <Text>{children}</Text>}
        <Text onClick={onClose}>닫기</Text>
      </favolink.div>
    );
  },
);

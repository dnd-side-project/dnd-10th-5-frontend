import { type HTMLFavolinkProps, favolink, forwardRef } from '@favolink/system';
import { classNames } from '@favolink/utils';
import * as styles from './modal-topbar.styles.css';
import { useModalContext } from './modal.context';
import { Text } from '../typography';

export type ModalTopbarProps = HTMLFavolinkProps<'div'> & {
  layout: styles.ModalTopbarLayout;
};

export const ModalTopbar = forwardRef<ModalTopbarProps, 'div'>(
  function ModalTopBar(props, ref) {
    const { children, layout, className, ...restProps } = props;

    const { onClose } = useModalContext();

    const isCouple = layout === 'couple';

    return (
      <favolink.div
        {...restProps}
        ref={ref}
        className={classNames(
          `favolink-modal__topbar`,
          styles.modalTopbarBase,
          styles.modalTopbarLayout[layout],
          className,
        )}
      >
        {isCouple && <Text>{children}</Text>}
        <Text onClick={onClose}>닫기</Text>
      </favolink.div>
    );
  },
);

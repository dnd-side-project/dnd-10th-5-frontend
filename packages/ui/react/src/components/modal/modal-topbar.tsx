import { ChevronLeftIcon, CloseIcon } from '@favolink-ui/icons';
import { cx, mergeFns } from '@favolink-ui/utils';
import { type MouseEvent } from 'react';
import * as styles from './modal-topbar.styles.css';
import { useModalContext } from './modal.context';
import { type HTMLFavolinkProps, favolink, forwardRef } from '../../system';

export type ModalTopbarProps = HTMLFavolinkProps<'div'> &
  styles.ModalTopbarVariants & {
    onLeftIconClick?: (event: MouseEvent) => void;
    onRightIconClick?: (event: MouseEvent) => void;
  };

export const ModalTopbar = forwardRef<ModalTopbarProps, 'div'>(
  function ModalTopBar(props, ref) {
    const {
      layout,
      className,
      onLeftIconClick,
      onRightIconClick,
      ...restProps
    } = props;

    const { onOpenChange } = useModalContext();

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
        {isCouple && (
          <ChevronLeftIcon
            className={styles.modalTopbarIcon}
            onClick={onLeftIconClick}
          />
        )}
        <CloseIcon
          className={styles.modalTopbarIcon}
          onClick={mergeFns(() => {
            onOpenChange(false);
          }, onRightIconClick)}
        />
      </favolink.div>
    );
  },
);

import { favolink, forwardRef } from '@favolink/system';
import { cx } from '@favolink/utils';
import * as styles from './modal-title.styles.css';
import { Heading, type HeadingProps } from '../typography';

export type ModalTitleProps = HeadingProps & {
  layout: styles.ModalTitleContainerLayout;
};

export const ModalTitle = forwardRef<ModalTitleProps, typeof Heading>(
  function ModalTitle(props, ref) {
    const { children, className, layout, ...restProps } = props;

    return (
      <favolink.div className={styles.modalTitleContainerLayout[layout]}>
        <Heading
          as="h4"
          {...restProps}
          ref={ref}
          className={cx(
            'favolink-modal__title',
            styles.modalTitleBase,
            className,
          )}
        >
          {children}
        </Heading>
      </favolink.div>
    );
  },
);

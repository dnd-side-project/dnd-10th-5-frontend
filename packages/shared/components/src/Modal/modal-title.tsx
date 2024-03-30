import { favolink, forwardRef } from '@favolink/system';
import { classNames } from '@favolink/utils';
import * as styles from './modal-title.styles.css';
import { Heading, type HeadingProps } from '../heading';

export type ModalTitleProps = HeadingProps & {
  layout: styles.ModalTitleLayout;
};

export const ModalTitle = forwardRef<ModalTitleProps, typeof Heading>(
  function ModalTitle(props, ref) {
    const { children, className, layout, ...restProps } = props;

    return (
      <favolink.div className={styles.modalTitlelayout[layout]}>
        <Heading
          as="h4"
          {...restProps}
          ref={ref}
          className={classNames(
            'favolink-modal__title',
            styles.modalTitle,
            className,
          )}
        >
          {children}
        </Heading>
      </favolink.div>
    );
  },
);

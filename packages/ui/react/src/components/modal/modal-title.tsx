import { cx } from '@favolink-ui/utils';
import * as styles from './modal-title.styles.css';
import { forwardRef } from '../../system';
import { Heading, type HeadingProps } from '../typography';

export type ModalTitleProps = HeadingProps & styles.ModalTitleVariants;

export const ModalTitle = forwardRef<ModalTitleProps, typeof Heading>(
  function ModalTitle(props, ref) {
    const { children, className, layout, ...restProps } = props;

    return (
      <Heading
        as="h4"
        {...restProps}
        ref={ref}
        className={cx(
          'favolink-modal__title',
          styles.modalTitleVariants({ layout }),
          className,
        )}
      >
        {children}
      </Heading>
    );
  },
);

import {
  type HTMLFavolinkProps,
  favolink,
  forwardRef,
} from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
import * as styles from './card-body.styles.css';

export type CardBodyProps = HTMLFavolinkProps<'section'>;

export const CardBody = forwardRef<CardBodyProps, 'section'>(
  function CardBody(props, ref) {
    const { children, className, ...restProps } = props;

    return (
      <favolink.section
        {...restProps}
        ref={ref}
        className={cx('favolink-card__body', styles.cardBodyBase, className)}
      >
        {children}
      </favolink.section>
    );
  },
);

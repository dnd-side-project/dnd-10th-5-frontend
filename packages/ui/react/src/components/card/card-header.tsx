import {
  type HTMLFavolinkProps,
  favolink,
  forwardRef,
} from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
import * as styles from './card-header.styles.css';

export type CardHeaderProps = HTMLFavolinkProps<'header'>;

export const CardHeader = forwardRef<CardHeaderProps, 'header'>(
  function CardHeader(props, ref) {
    const { children, className, ...restProps } = props;

    return (
      <favolink.header
        {...restProps}
        ref={ref}
        className={cx(
          'favolink-card__header',
          styles.cardHeaderBase,
          className,
        )}
      >
        {children}
      </favolink.header>
    );
  },
);

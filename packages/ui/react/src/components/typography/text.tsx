import {
  type HTMLFavolinkProps,
  favolink,
  forwardRef,
} from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
import * as styles from './text.styles.css';

export type TextProps = HTMLFavolinkProps<'p'> & styles.TextVariants;

export const Text = forwardRef<TextProps, 'p'>(function Text(props, ref) {
  const { children, className, scale, ...restProps } = props;

  return (
    <favolink.p
      {...restProps}
      ref={ref}
      className={cx('favolink-text', styles.text({ scale }), className)}
    >
      {children}
    </favolink.p>
  );
});

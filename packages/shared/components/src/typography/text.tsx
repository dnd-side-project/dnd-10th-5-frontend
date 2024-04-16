import { type HTMLFavolinkProps, favolink, forwardRef } from '@favolink/system';
import { cx } from '@favolink/utils';
import * as styles from './text.styles.css';

export type TextProps = HTMLFavolinkProps<'p'> & {
  scale?: styles.TextScale;
};

export const Text = forwardRef<TextProps, 'p'>(function Text(props, ref) {
  const { children, className, scale = '2regular', ...restProps } = props;

  return (
    <favolink.p
      {...restProps}
      ref={ref}
      className={cx('favolink-text', styles.textScale[scale], className)}
    >
      {children}
    </favolink.p>
  );
});

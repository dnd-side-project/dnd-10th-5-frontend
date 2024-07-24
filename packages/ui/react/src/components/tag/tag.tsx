import {
  type HTMLFavolinkProps,
  favolink,
  forwardRef,
} from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
import * as styles from './tag.css';

export type TagProps = HTMLFavolinkProps<'span'> & styles.TagVariants;

export const Tag = forwardRef<TagProps, 'span'>(function Tag(props, ref) {
  const { children, className, color, ...restProps } = props;

  return (
    <favolink.span
      {...restProps}
      ref={ref}
      className={cx('favolink-tag', styles.tagVariants({ color }), className)}
    >
      {children}
    </favolink.span>
  );
});

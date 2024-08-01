import { cx } from '@favolink-ui/utils';
import * as styles from './tag.css';
import { type MarginVariants, extractMarginProps } from '../../margin';
import { type HTMLFavolinkProps, favolink, forwardRef } from '../../system';

export type TagProps = HTMLFavolinkProps<'span'> &
  MarginVariants &
  styles.TagVariants;

export const Tag = forwardRef<TagProps, 'span'>(
  function Tag(props, forwardedRef) {
    const { className, color, ...restProps } = extractMarginProps(props);

    return (
      <favolink.span
        {...restProps}
        ref={forwardedRef}
        className={cx('favolink-tag', styles.tagVariants({ color }), className)}
      />
    );
  },
);

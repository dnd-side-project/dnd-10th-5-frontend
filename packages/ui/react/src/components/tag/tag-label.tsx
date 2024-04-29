import {
  type HTMLFavolinkProps,
  favolink,
  forwardRef,
} from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
import * as styles from './tag-label.styles.css';
import { useTagStylesContext } from './tag.context';

export type TagLabelProps = HTMLFavolinkProps<'span'> & {
  isAsIcon?: boolean;
};

export const TagLabel = forwardRef<TagLabelProps, 'span'>(
  function TagText(props, ref) {
    const { children, className, isAsIcon, ...restProps } = props;

    const { size } = useTagStylesContext();

    return (
      <favolink.span
        {...restProps}
        ref={ref}
        className={cx(
          'favolink-tag__label',
          styles.tagLabelBase,
          styles.tagLabelSize[size],
          isAsIcon && styles.tagLabelAsIcon,
          className,
        )}
      >
        {children}
      </favolink.span>
    );
  },
);

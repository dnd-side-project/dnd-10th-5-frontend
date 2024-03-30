import { type HTMLFavolinkProps, favolink, forwardRef } from '@favolink/system';
import { classNames } from '@favolink/utils';
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
        className={classNames(
          'favolink-tag__label',
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

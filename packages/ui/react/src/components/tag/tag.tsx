import {
  type HTMLFavolinkProps,
  favolink,
  forwardRef,
} from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
import { TagStylesContextProvider } from './tag.context';
import * as styles from './tag.styles.css';

export type TagProps = HTMLFavolinkProps<'span'> & styles.TagVariants;

export const Tag = forwardRef<TagProps, 'span'>(function Tag(props, ref) {
  const {
    children,
    className,
    colorScheme,
    size = 'small',
    ...restProps
  } = props;

  return (
    <TagStylesContextProvider value={{ size }}>
      <favolink.span
        {...restProps}
        ref={ref}
        className={cx(
          'favolink-tag',
          styles.tag({ colorScheme, size }),
          className,
        )}
      >
        {children}
      </favolink.span>
    </TagStylesContextProvider>
  );
});

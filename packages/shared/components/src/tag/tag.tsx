import { type HTMLFavolinkProps, favolink, forwardRef } from '@favolink/system';
import { cx } from '@favolink/utils';
import { TagStylesContextProvider } from './tag.context';
import * as styles from './tag.styles.css';
import * as theme from './tag.theme.css';

export type TagProps = HTMLFavolinkProps<'span'> & {
  colorScheme?: styles.TagColorScheme;
  size?: styles.TagSize;
};

export const Tag = forwardRef<TagProps, 'span'>(function Tag(props, ref) {
  const {
    children,
    className,
    colorScheme = 'white',
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
          theme.tagColor,
          styles.tagBase,
          styles.tagSize[size],
          styles.tagColorScheme[colorScheme],
          className,
        )}
      >
        {children}
      </favolink.span>
    </TagStylesContextProvider>
  );
});

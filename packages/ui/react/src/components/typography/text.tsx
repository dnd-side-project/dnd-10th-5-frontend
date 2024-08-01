import { cx } from '@favolink-ui/utils';
import * as styles from './text.css';
import * as commonStyles from './typography.css';
import { type MarginVariants, extractMarginProps } from '../../margin';
import { type HTMLFavolinkProps, Slot, forwardRef } from '../../system';

type TextDivProps = HTMLFavolinkProps<'div'> & { as: 'div' };

type TextLabelProps = HTMLFavolinkProps<'label'> & { as: 'label' };

type TextPProps = HTMLFavolinkProps<'p'> & { as: 'p' };

type TextSpanProps = HTMLFavolinkProps<'span'> & { as?: 'span' };

export type TextProps = commonStyles.TypographyVariants &
  MarginVariants &
  styles.TextVariants &
  (TextDivProps | TextLabelProps | TextPProps | TextSpanProps);

export const Text = forwardRef<TextProps, 'span'>(
  function Text(props, forwardedRef) {
    const {
      asChild,
      as: Tag = 'span',
      children,
      className,
      align,
      color,
      truncate,
      wrap,
      size,
      weight,
      ...restProps
    } = extractMarginProps(props);

    return (
      <Slot
        {...restProps}
        ref={forwardedRef}
        className={cx(
          'favolink-text',
          commonStyles.typographyVariants({ align, color, truncate, wrap }),
          styles.textVariants({ size, weight }),
          className,
        )}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  },
);

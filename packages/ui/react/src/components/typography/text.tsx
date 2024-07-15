import { type HTMLFavolinkProps, Slot, forwardRef } from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
import * as styles from './text.styles.css';

type TextDivProps = HTMLFavolinkProps<'div'> & { as: 'div' };

type TextLabelProps = HTMLFavolinkProps<'label'> & { as: 'label' };

type TextPProps = HTMLFavolinkProps<'p'> & { as: 'p' };

type TextSpanProps = HTMLFavolinkProps<'span'> & { as?: 'span' };

type TextVariantOptionProps = {
  size?: '1' | '2' | '3' | '4' | 1 | 2 | 3 | 4;
  weight?: 'medium' | 'regular';
};

export type TextProps = Omit<styles.TextVariants, 'scale'> &
  TextVariantOptionProps &
  (TextDivProps | TextLabelProps | TextPProps | TextSpanProps);

export const Text = forwardRef<TextProps, 'span'>(
  function Text(props, forwardedRef) {
    const {
      children,
      className,
      asChild,
      as: Tag = 'span',
      align,
      wrap,
      truncate,
      size = 2,
      weight = 'regular',
      ...restProps
    } = props;

    const variant = (size + weight) as styles.TextVariants['variant'];

    return (
      <Slot
        {...restProps}
        ref={forwardedRef}
        className={cx(
          'favolink-text',
          styles.textVariants({ align, variant, truncate, wrap }),
          className,
        )}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  },
);

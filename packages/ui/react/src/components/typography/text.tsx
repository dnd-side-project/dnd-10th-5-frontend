import { type HTMLFavolinkProps, Slot, forwardRef } from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
import * as styles from './text.styles.css';

type TextDivProps = HTMLFavolinkProps<'div'> & { as: 'div' };

type TextLabelProps = HTMLFavolinkProps<'label'> & { as: 'label' };

type TextPProps = HTMLFavolinkProps<'p'> & { as: 'p' };

type TextSpanProps = HTMLFavolinkProps<'span'> & { as?: 'span' };

export type TextProps = styles.TextVariants &
  (TextDivProps | TextLabelProps | TextPProps | TextSpanProps);

export const Text = forwardRef<TextProps, 'span'>(
  function Text(props, forwardedRef) {
    const {
      children,
      className,
      scale,
      asChild,
      as: Tag = 'span',
      ...restProps
    } = props;

    return (
      <Slot
        {...restProps}
        ref={forwardedRef}
        className={cx('favolink-text', styles.text({ scale }), className)}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  },
);

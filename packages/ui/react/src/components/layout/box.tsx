import { type HTMLFavolinkProps, Slot, forwardRef } from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
import * as styles from './box.css';
import { extractDynamicProps } from '../../styles';

type BoxDivProps = HTMLFavolinkProps<'div'> & { as?: 'div' };

type BoxSpanProps = HTMLFavolinkProps<'span'> & { as: 'span' };

export type BoxProps = styles.BoxDynamicVariants &
  styles.BoxEnumVariants &
  (BoxDivProps | BoxSpanProps);

export const Box = forwardRef<BoxProps, 'div'>(
  function Box(props, forwardedRef) {
    const {
      as: Tag = 'div',
      asChild,
      children,
      className,
      position,
      overflow,
      overflowX,
      overflowY,
      flexShrink,
      flexGrow,
      ...restProps
    } = extractDynamicProps(
      props,
      styles.boxDynamicVariantVars,
      styles.boxDynamicVariants,
    );

    return (
      <Slot
        {...restProps}
        ref={forwardedRef}
        className={cx(
          'favolink-box',
          styles.boxEnumVariants({
            position,
            overflow,
            overflowX,
            overflowY,
            flexShrink,
            flexGrow,
          }),
          className,
        )}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  },
);

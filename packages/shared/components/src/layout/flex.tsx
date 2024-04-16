import { type HTMLFavolinkProps, favolink, forwardRef } from '@favolink/system';
import { cx } from '@favolink/utils';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { type CSSProperties } from 'react';
import * as styles from './flex.styles.css';

type FlexOptions = {
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  wrap?: CSSProperties['flexWrap'];
  direction?: CSSProperties['flexDirection'];
  grow?: CSSProperties['flexGrow'];
  shrink?: CSSProperties['flexShrink'];
  basis?: CSSProperties['flexBasis'];
};

export type FlexProps = FlexOptions & HTMLFavolinkProps<'div'>;

export const Flex = forwardRef<FlexProps, 'div'>(function Flex(props, ref) {
  const {
    children,
    className,
    style,
    justify,
    align,
    wrap,
    direction,
    grow,
    shrink,
    basis,
    ...restProps
  } = props;

  return (
    <favolink.div
      {...restProps}
      ref={ref}
      className={cx(styles.flexBase, className)}
      style={{
        ...assignInlineVars({
          [styles.flexJustify]: justify,
          [styles.flexAlign]: align,
          [styles.flexWrap]: wrap,
          [styles.flexDirection]: direction,
          [styles.flexShrink]: String(shrink),
          [styles.flexBasis]: String(basis),
          [styles.flexGrow]: String(grow),
        }),
        ...style,
      }}
    >
      {children}
    </favolink.div>
  );
});

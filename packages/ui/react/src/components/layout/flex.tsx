import { assignInlineVars } from '@vanilla-extract/dynamic';
import { Box, type BoxProps } from './box';
import * as styles from './flex.css';
import { forwardRef } from '../../system';
import { cx, mergeStyles, px } from '../../utils';

export type FlexProps = BoxProps &
  styles.FlexDynamicVariants &
  styles.FlexEnumVariants;

export const Flex = forwardRef<FlexProps, typeof Box>(
  function Flex(props, forwardedRef) {
    const {
      className,
      style,
      display,
      direction,
      align,
      justify,
      wrap,
      gap,
      gapX,
      gapY,
      ...restProps
    } = props;

    return (
      <Box
        {...restProps}
        ref={forwardedRef}
        className={cx(
          'favolink-flex',
          gap && styles.gap,
          gapX && styles.gapX,
          gapY && styles.gapY,
          styles.flexEnumVariants({ display, direction, align, justify, wrap }),
          className,
        )}
        style={mergeStyles(
          assignInlineVars({
            [styles.dynamicVars.gap]: px(gap),
            [styles.dynamicVars.gapX]: px(gapX),
            [styles.dynamicVars.gapY]: px(gapY),
          }),
          style,
        )}
      />
    );
  },
);

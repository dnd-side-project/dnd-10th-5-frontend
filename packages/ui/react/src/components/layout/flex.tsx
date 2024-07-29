import { forwardRef } from '@favolink-ui/system';
import { cx, mergeStyles, toPx } from '@favolink-ui/utils';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { Box, type BoxProps } from './box';
import * as styles from './flex.css';

export type FlexProps = BoxProps &
  styles.FlexDynamicVariants &
  styles.FlexEnumVariants;

export const Flex = forwardRef<FlexProps, typeof Box>(
  function Flex(props, forwardedRef) {
    const {
      children,
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
            [styles.dynamicVars.gap]: toPx(gap),
            [styles.dynamicVars.gapX]: toPx(gapX),
            [styles.dynamicVars.gapY]: toPx(gapY),
          }),
          style,
        )}
      >
        {children}
      </Box>
    );
  },
);

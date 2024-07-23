import { extractDynamicProps } from '@favolink-ui/styles';
import { forwardRef } from '@favolink-ui/system';
import { cx } from '@favolink-ui/utils';
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
      display,
      align,
      direction,
      justify,
      wrap,
      ...restProps
    } = extractDynamicProps(
      props,
      styles.flexDynamicVariantVars,
      styles.flexDynamicVariants,
    );

    return (
      <Box
        {...restProps}
        ref={forwardedRef}
        className={cx(
          'favolink-flex',
          styles.flexEnumVariants({ display, align, direction, justify, wrap }),
          className,
        )}
      >
        {children}
      </Box>
    );
  },
);

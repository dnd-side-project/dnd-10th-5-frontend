import { type HTMLFavolinkProps, Slot, forwardRef } from '@favolink-ui/system';
import { cx, mergeStyles, px } from '@favolink-ui/utils';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from './box.css';
import { type MarginVariants, extractMarginProps } from '../../margin';

type BoxDivProps = HTMLFavolinkProps<'div'> & { as?: 'div' };

type BoxSpanProps = HTMLFavolinkProps<'span'> & { as: 'span' };

export type BoxProps = MarginVariants &
  styles.BoxDynamicVariants &
  styles.BoxEnumVariants &
  (BoxDivProps | BoxSpanProps);

export const Box = forwardRef<BoxProps, 'div'>(
  function Box(props, forwardedRef) {
    const {
      as: Tag = 'div',
      asChild,
      children,
      className,
      style,
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      width,
      minWidth,
      maxWidth,
      height,
      minHeight,
      maxHeight,
      position,
      inset,
      top,
      right,
      bottom,
      left,
      overflow,
      overflowX,
      overflowY,
      flexBasis,
      flexShrink,
      flexGrow,
      ...restProps
    } = extractMarginProps(props);

    return (
      <Slot
        {...restProps}
        ref={forwardedRef}
        className={cx(
          'favolink-box',
          padding && styles.padding,
          paddingX && styles.paddingX,
          paddingY && styles.paddingY,
          paddingTop && styles.paddingTop,
          paddingRight && styles.paddingRight,
          paddingBottom && styles.paddingBottom,
          paddingLeft && styles.paddingLeft,
          width && styles.width,
          minWidth && styles.minWidth,
          maxWidth && styles.maxWidth,
          height && styles.width,
          minHeight && styles.minHeight,
          maxHeight && styles.maxHeight,
          inset && styles.inset,
          top && styles.top,
          right && styles.right,
          bottom && styles.bottom,
          left && styles.left,
          flexBasis && styles.flexBasis,
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
        style={mergeStyles(
          assignInlineVars({
            [styles.dynamicVars.padding]: px(padding),
            [styles.dynamicVars.paddingX]: px(paddingX),
            [styles.dynamicVars.paddingY]: px(paddingY),
            [styles.dynamicVars.paddingTop]: px(paddingTop),
            [styles.dynamicVars.paddingRight]: px(paddingRight),
            [styles.dynamicVars.paddingBottom]: px(paddingBottom),
            [styles.dynamicVars.paddingLeft]: px(paddingLeft),
            [styles.dynamicVars.width]: px(width),
            [styles.dynamicVars.minWidth]: px(minWidth),
            [styles.dynamicVars.maxWidth]: px(maxWidth),
            [styles.dynamicVars.height]: px(height),
            [styles.dynamicVars.minHeight]: px(minHeight),
            [styles.dynamicVars.maxHeight]: px(maxHeight),
            [styles.dynamicVars.inset]: px(inset),
            [styles.dynamicVars.top]: px(top),
            [styles.dynamicVars.right]: px(right),
            [styles.dynamicVars.bottom]: px(bottom),
            [styles.dynamicVars.left]: px(left),
            [styles.dynamicVars.flexBasis]: px(flexBasis),
          }),
          style,
        )}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  },
);

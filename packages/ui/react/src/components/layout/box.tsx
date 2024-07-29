import { type HTMLFavolinkProps, Slot, forwardRef } from '@favolink-ui/system';
import { cx, mergeStyles, toPx } from '@favolink-ui/utils';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import * as styles from './box.css';

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
    } = props;

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
            [styles.dynamicVars.padding]: toPx(padding),
            [styles.dynamicVars.paddingX]: toPx(paddingX),
            [styles.dynamicVars.paddingY]: toPx(paddingY),
            [styles.dynamicVars.paddingTop]: toPx(paddingTop),
            [styles.dynamicVars.paddingRight]: toPx(paddingRight),
            [styles.dynamicVars.paddingBottom]: toPx(paddingBottom),
            [styles.dynamicVars.paddingLeft]: toPx(paddingLeft),
            [styles.dynamicVars.width]: toPx(width),
            [styles.dynamicVars.minWidth]: toPx(minWidth),
            [styles.dynamicVars.maxWidth]: toPx(maxWidth),
            [styles.dynamicVars.height]: toPx(height),
            [styles.dynamicVars.minHeight]: toPx(minHeight),
            [styles.dynamicVars.maxHeight]: toPx(maxHeight),
            [styles.dynamicVars.inset]: toPx(inset),
            [styles.dynamicVars.top]: toPx(top),
            [styles.dynamicVars.right]: toPx(right),
            [styles.dynamicVars.bottom]: toPx(bottom),
            [styles.dynamicVars.left]: toPx(left),
            [styles.dynamicVars.flexBasis]: toPx(flexBasis),
          }),
          style,
        )}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  },
);

import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { dynamicStyles, dynamicVars, enumStyles } from '../../styles/utils';

const { position, overflow, overflowX, overflowY, flexShrink, flexGrow } =
  enumStyles;

export const boxEnumVariants = recipe({
  variants: {
    position,
    overflow,
    overflowX,
    overflowY,
    flexShrink,
    flexGrow,
  },
});

export type BoxEnumVariants = Exclude<
  RecipeVariants<typeof boxEnumVariants>,
  undefined
>;

const {
  paddingVar,
  paddingBottomVar,
  paddingLeftVar,
  paddingRightVar,
  paddingTopVar,
  paddingXVar,
  paddingYVar,
  widthVar,
  minWidthVar,
  maxWidthVar,
  heightVar,
  minHeightVar,
  maxHeightVar,
  insetVar,
  topVar,
  bottomVar,
  leftVar,
  rightVar,
  flexBasisVar,
} = dynamicVars;

export const boxDynamicVariantVars = {
  paddingVar,
  paddingBottomVar,
  paddingLeftVar,
  paddingRightVar,
  paddingTopVar,
  paddingXVar,
  paddingYVar,
  widthVar,
  minWidthVar,
  maxWidthVar,
  heightVar,
  minHeightVar,
  maxHeightVar,
  insetVar,
  topVar,
  bottomVar,
  leftVar,
  rightVar,
  flexBasisVar,
};

export const {
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingX,
  paddingY,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  inset,
  top,
  bottom,
  left,
  right,
  flexBasis,
} = dynamicStyles;

export const boxDynamicVariants = {
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingX,
  paddingY,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  inset,
  top,
  bottom,
  left,
  right,
  flexBasis,
};

export type BoxDynamicVariants = Partial<
  Record<keyof typeof boxDynamicVariants, number | string>
>;

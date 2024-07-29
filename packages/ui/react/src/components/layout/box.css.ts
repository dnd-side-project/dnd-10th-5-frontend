import {
  flexGrow,
  flexShrink,
  overflow,
  overflowX,
  overflowY,
  position,
} from '@favolink-ui/styles';
import { createThemeContract, style } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';

export const dynamicVars = createThemeContract({
  padding: null,
  paddingX: null,
  paddingY: null,
  paddingTop: null,
  paddingRight: null,
  paddingBottom: null,
  paddingLeft: null,
  width: null,
  minWidth: null,
  maxWidth: null,
  height: null,
  minHeight: null,
  maxHeight: null,
  inset: null,
  top: null,
  right: null,
  bottom: null,
  left: null,
  flexBasis: null,
});

export const padding = style({
  padding: dynamicVars.padding,
});

export const paddingX = style({
  paddingRight: dynamicVars.paddingX,
  paddingLeft: dynamicVars.paddingX,
});

export const paddingY = style({
  paddingRight: dynamicVars.paddingY,
  paddingLeft: dynamicVars.paddingY,
});

export const paddingTop = style({
  paddingTop: dynamicVars.paddingTop,
});

export const paddingRight = style({
  paddingRight: dynamicVars.paddingRight,
});

export const paddingBottom = style({
  paddingBottom: dynamicVars.paddingBottom,
});

export const paddingLeft = style({
  paddingLeft: dynamicVars.paddingLeft,
});

export const width = style({
  width: dynamicVars.width,
});

export const minWidth = style({
  minHeight: dynamicVars.minWidth,
});

export const maxWidth = style({
  maxHeight: dynamicVars.maxWidth,
});

export const height = style({
  height: dynamicVars.height,
});

export const minHeight = style({
  minHeight: dynamicVars.minHeight,
});

export const maxHeight = style({
  maxHeight: dynamicVars.maxHeight,
});

export const inset = style({
  inset: dynamicVars.inset,
});

export const top = style({
  top: dynamicVars.top,
});

export const right = style({
  right: dynamicVars.right,
});

export const bottom = style({
  bottom: dynamicVars.bottom,
});

export const left = style({
  left: dynamicVars.left,
});

export const flexBasis = style({
  flexBasis: dynamicVars.flexBasis,
});

export type BoxDynamicVariants = {
  [K in keyof typeof dynamicVars]?: number | string;
};

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

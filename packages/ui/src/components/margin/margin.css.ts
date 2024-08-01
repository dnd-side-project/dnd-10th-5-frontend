import { createThemeContract, style } from '@vanilla-extract/css';

export const marginVars = createThemeContract({
  margin: null,
  marginX: null,
  marginY: null,
  marginTop: null,
  marginRight: null,
  marginBottom: null,
  marginLeft: null,
});

export const margin = style({
  margin: marginVars.margin,
});

export const marginX = style({
  marginRight: marginVars.marginX,
  marginLeft: marginVars.marginX,
});

export const marginY = style({
  marginTop: marginVars.marginY,
  marginBottom: marginVars.marginY,
});

export const marginTop = style({
  marginTop: marginVars.marginTop,
});

export const marginRight = style({
  marginRight: marginVars.marginRight,
});

export const marginBottom = style({
  marginBottom: marginVars.marginBottom,
});

export const marginLeft = style({
  marginLeft: marginVars.marginLeft,
});

export type MarginVariants = {
  [K in keyof typeof marginVars]?: number | string;
};

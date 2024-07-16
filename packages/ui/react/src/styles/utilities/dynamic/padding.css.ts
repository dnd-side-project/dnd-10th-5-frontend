import { createVar, style } from '@vanilla-extract/css';

export const paddingVar = createVar();

export const paddingXVar = createVar();

export const paddingYVar = createVar();

export const paddingTopVar = createVar();

export const paddingBottomVar = createVar();

export const paddingLeftVar = createVar();

export const paddingRightVar = createVar();

export const padding = style({
  padding: paddingVar,
});

export const paddingTop = style({
  paddingTop: paddingTopVar,
});

export const paddingBottom = style({
  paddingBottom: paddingBottomVar,
});

export const paddingLeft = style({
  paddingLeft: paddingLeftVar,
});

export const paddingRight = style({
  paddingRight: paddingRightVar,
});

export const paddingY = style({
  paddingTop: paddingYVar,
  paddingBottom: paddingYVar,
});

export const paddingX = style({
  paddingLeft: paddingXVar,
  paddingRight: paddingXVar,
});

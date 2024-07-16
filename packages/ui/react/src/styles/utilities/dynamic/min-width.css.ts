import { createVar, style } from '@vanilla-extract/css';

export const minWidthVar = createVar();

export const minWidth = style({
  minWidth: minWidthVar,
});

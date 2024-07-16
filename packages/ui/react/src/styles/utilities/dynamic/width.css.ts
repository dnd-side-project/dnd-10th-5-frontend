import { createVar, style } from '@vanilla-extract/css';

export const widthVar = createVar();

export const width = style({
  width: widthVar,
});

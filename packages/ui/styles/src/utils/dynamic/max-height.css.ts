import { createVar, style } from '@vanilla-extract/css';

export const maxHeightVar = createVar();

export const maxHeight = style({
  maxHeight: maxHeightVar,
});

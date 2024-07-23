import { createVar, style } from '@vanilla-extract/css';

export const minHeightVar = createVar();

export const minHeight = style({
  minHeight: minHeightVar,
});

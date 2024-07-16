import { createVar, style } from '@vanilla-extract/css';

export const minHeightVar = createVar();

export const minheight = style({
  minHeight: minHeightVar,
});

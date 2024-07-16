import { createVar, style } from '@vanilla-extract/css';

export const maxHeightVar = createVar();

export const maxheight = style({
  maxHeight: maxHeightVar,
});

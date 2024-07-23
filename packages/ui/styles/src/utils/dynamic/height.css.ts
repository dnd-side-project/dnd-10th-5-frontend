import { createVar, style } from '@vanilla-extract/css';

export const heightVar = createVar();

export const height = style({
  height: heightVar,
});

import { createVar, style } from '@vanilla-extract/css';

export const maxWidthVar = createVar();

export const maxWidth = style({
  maxWidth: maxWidthVar,
});

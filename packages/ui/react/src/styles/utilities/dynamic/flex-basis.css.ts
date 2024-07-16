import { createVar, style } from '@vanilla-extract/css';

export const flexBasisVar = createVar();

export const flexBasis = style({
  flexBasis: flexBasisVar,
});

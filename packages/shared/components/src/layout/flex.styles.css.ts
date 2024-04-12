import { createVar, style } from '@vanilla-extract/css';

export const flexJustify = createVar();

export const flexAlign = createVar();

export const flexWrap = createVar();

export const flexDirection = createVar();

export const flexBasis = createVar();

export const flexShrink = createVar();

export const flexGrow = createVar();

export const flexBase = style({
  display: 'flex',
  justifyContent: flexJustify,
  alignItems: flexAlign,
  flexWrap,
  flexDirection,
  flexBasis,
  flexShrink,
  flexGrow,
});

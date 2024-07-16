import { styleVariants } from '@vanilla-extract/css';

export const flexShrink = styleVariants({
  none: { flexShrink: 0 },
  shrink: { flexShrink: 1 },
});

export type FlexShrink = keyof typeof flexShrink;

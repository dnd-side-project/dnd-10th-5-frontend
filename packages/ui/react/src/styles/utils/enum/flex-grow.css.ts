import { styleVariants } from '@vanilla-extract/css';

export const flexGrow = styleVariants({
  none: { flexGrow: 0 },
  grow: { flexGrow: 1 },
});

export type FlexGrow = keyof typeof flexGrow;

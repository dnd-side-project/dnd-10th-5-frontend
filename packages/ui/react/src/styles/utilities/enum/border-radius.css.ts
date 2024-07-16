import { styleVariants } from '@vanilla-extract/css';

export const borderRadius = styleVariants({
  normal: { borderRadius: 8 },
  full: { borderRadius: 9999 },
});

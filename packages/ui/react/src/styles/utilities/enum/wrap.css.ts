import { styleVariants } from '@vanilla-extract/css';

export const wrap = styleVariants({
  wrap: { whiteSpace: 'normal' },
  nowrap: { whiteSpace: 'nowrap' },
});

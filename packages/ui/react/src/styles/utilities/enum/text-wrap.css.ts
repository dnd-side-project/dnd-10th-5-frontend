import { styleVariants } from '@vanilla-extract/css';

export const textWrap = styleVariants({
  wrap: { whiteSpace: 'normal' },
  nowrap: { whiteSpace: 'nowrap' },
});

import { styleVariants } from '@vanilla-extract/css';

export const textAlign = styleVariants({
  left: { textAlign: 'left' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
});

import { styleVariants } from '@vanilla-extract/css';

export const justifyContent = styleVariants({
  start: { justifyContent: 'flex-start' },
  center: { justifyContent: 'center' },
  end: { justifyContent: 'flex-end' },
  spaceBetween: { justifyContent: 'space-between' },
});

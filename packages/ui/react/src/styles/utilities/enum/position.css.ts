import { styleVariants } from '@vanilla-extract/css';

export const position = styleVariants({
  static: { position: 'static' },
  relative: { position: 'relative' },
  absolute: { position: 'absolute' },
  fixed: { position: 'fixed' },
  sticky: { position: 'sticky' },
});

export type Position = keyof typeof position;

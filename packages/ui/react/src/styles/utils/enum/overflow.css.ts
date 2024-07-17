import { styleVariants } from '@vanilla-extract/css';

export const overflow = styleVariants({
  visible: { overflow: 'visible' },
  hidden: { overflow: 'hidden' },
  clip: { overflow: 'clip' },
  scroll: { overflow: 'scroll' },
  auto: { overflow: 'auto' },
});

export type Overflow = keyof typeof overflow;

export const overflowX = styleVariants({
  visible: { overflowX: 'visible' },
  hidden: { overflowX: 'hidden' },
  clip: { overflowX: 'clip' },
  scroll: { overflowX: 'scroll' },
  auto: { overflowX: 'auto' },
});

export type OverflowX = keyof typeof overflowX;

export const overflowY = styleVariants({
  visible: { overflowY: 'visible' },
  hidden: { overflowY: 'hidden' },
  clip: { overflowY: 'clip' },
  scroll: { overflowY: 'scroll' },
  auto: { overflowY: 'auto' },
});

export type OverflowY = keyof typeof overflowY;

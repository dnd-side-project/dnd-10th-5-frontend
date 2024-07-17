import { createVar, style } from '@vanilla-extract/css';

export const gapVar = createVar();

export const gapXVar = createVar();

export const gapYVar = createVar();

export const gap = style({
  gap: gapVar,
});

export const gapX = style({
  rowGap: gapXVar,
});

export const gapY = style({
  columnGap: gapYVar,
});

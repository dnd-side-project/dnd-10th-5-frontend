import { createVar, style } from '@vanilla-extract/css';

export const insetVar = createVar();

export const topVar = createVar();

export const bottomVar = createVar();

export const leftVar = createVar();

export const rightVar = createVar();

export const inset = style({
  inset: insetVar,
});

export const top = style({
  top: topVar,
});

export const bottom = style({
  bottom: bottomVar,
});

export const left = style({
  left: leftVar,
});

export const right = style({
  right: topVar,
});

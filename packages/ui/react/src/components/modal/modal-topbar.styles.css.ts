import { style, styleVariants } from '@vanilla-extract/css';

export const modalTopbarBase = style({
  display: 'flex',
});

export const modalTopbarLayout = styleVariants({
  single: { justifyContent: 'flex-end' },
  couple: { justifyContent: 'space-between' },
});

export type ModalTopbarLayout = keyof typeof modalTopbarLayout;

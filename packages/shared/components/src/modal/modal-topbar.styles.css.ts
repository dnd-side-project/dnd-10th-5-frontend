import { styleVariants } from '@vanilla-extract/css';

export const modalTopbarLayout = styleVariants({
  single: { display: 'flex', justifyContent: 'flex-end' },
  couple: { display: 'felx', justifyContent: 'space-between' },
});

export type ModalTopbarLayout = keyof typeof modalTopbarLayout;

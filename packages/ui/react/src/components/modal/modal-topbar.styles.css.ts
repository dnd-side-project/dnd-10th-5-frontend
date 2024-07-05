import { style } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';

const base = style({
  display: 'flex',
});

export const modalTopbar = recipe({
  base,

  variants: {
    layout: {
      single: {
        justifyContent: 'flex-end',
      },
      couple: {
        justifyContent: 'space-between',
      },
    },
  },

  defaultVariants: {
    layout: 'single',
  },
});

export type ModalTopbarVariants = RecipeVariants<typeof modalTopbar>;

export const modalTopbarIcon = style({
  width: 20,
  height: 20,
  cursor: 'pointer',
});

import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';

export const modalTopbar = recipe({
  base: {
    display: 'flex',
  },

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
    layout: 'couple',
  },
});

export type ModalTopbarVariants = RecipeVariants<typeof modalTopbar>;

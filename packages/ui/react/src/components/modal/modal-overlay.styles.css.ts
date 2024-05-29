import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';

export const modalOverlay = recipe({
  base: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  variants: {
    variant: {
      original: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 96,
      },
      withContent: {
        zIndex: 97,
      },
    },
  },

  defaultVariants: {
    variant: 'original',
  },
});

export type ModalOverlayVariants = RecipeVariants<typeof modalOverlay>;

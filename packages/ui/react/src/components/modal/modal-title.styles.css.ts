import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles/vars.css';

export const modalTitle = recipe({
  base: {
    display: 'flex',
    color: vars.color.gray[1000],
  },

  variants: {
    layout: {
      left: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      right: {
        justifyContent: 'flex-end',
      },
    },
  },

  defaultVariants: {
    layout: 'left',
  },
});

export type ModalTitleVariants = RecipeVariants<typeof modalTitle>;

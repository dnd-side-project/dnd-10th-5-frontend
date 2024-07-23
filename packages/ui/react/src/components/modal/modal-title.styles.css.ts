import { style } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { vars } from '../../styles';

const base = style({
  color: vars.palette.gray1000,
});

export const modalTitleVariants = recipe({
  base,

  variants: {
    layout: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
      right: {
        textAlign: 'right',
      },
    },
  },

  defaultVariants: {
    layout: 'left',
  },
});

export type ModalTitleVariants = RecipeVariants<typeof modalTitleVariants>;

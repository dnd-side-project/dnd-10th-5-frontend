import { style } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { globalVars } from '../../theme.css';

const base = style({
  color: globalVars.palette.gray1000,
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

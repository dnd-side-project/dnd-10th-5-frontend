import { style } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { globalVars } from '../../theme.css';

const base = style([
  globalVars.text.text3,
  {
    cursor: 'pointer',
    textDecoration: 'none',
    fontWeight: globalVars.weight.text.medium,

    ':hover': {
      textDecoration: 'underline',
    },
  },
]);

export const link = recipe({
  base,

  variants: {
    color: {
      white: { color: 'white' },
      gray: { color: globalVars.palette.gray400 },
      black: { color: 'black' },
    },
  },

  defaultVariants: {
    color: 'black',
  },
});

export type LinkVariants = Exclude<RecipeVariants<typeof link>, undefined>;

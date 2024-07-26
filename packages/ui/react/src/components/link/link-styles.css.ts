import { body } from '@favolink-ui/styles';
import { style } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { globalVars } from '../../theme.css';

const base = style([
  body.body3Medium,
  {
    cursor: 'pointer',
    textDecoration: 'none',

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

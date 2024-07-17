import { style } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { enumStyles } from '../../styles/utils';
import { vars } from '../../styles/vars.css';

const {
  body: { body3Medium },
} = enumStyles;

const base = style([
  body3Medium,
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
      gray: { color: vars.color.gray[400] },
      black: { color: 'black' },
    },
  },

  defaultVariants: {
    color: 'black',
  },
});

export type LinkVariants = Exclude<RecipeVariants<typeof link>, undefined>;

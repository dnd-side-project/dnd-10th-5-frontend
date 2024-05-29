import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { body3Medium } from '../../styles/text.css';
import { vars } from '../../styles/vars.css';

export const link = recipe({
  base: [
    body3Medium,
    {
      cursor: 'pointer',
      textDecoration: 'none',

      selectors: {
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },
  ],

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

export type LinkVariants = RecipeVariants<typeof link>;

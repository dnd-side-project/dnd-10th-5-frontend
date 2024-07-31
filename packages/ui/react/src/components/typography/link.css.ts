import { createVar, style } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';

const textDecorationLine = createVar();

const base = style({
  textDecorationColor: 'currentcolor',
  textDecorationLine: 'none',
  textDecorationStyle: 'solid',
  vars: {
    [textDecorationLine]: 'underline',
  },
});

export const linkVariants = recipe({
  base,

  variants: {
    underline: {
      always: { textDecorationLine },
      hover: { ':hover': { textDecorationLine } },
      none: {},
    },
  },

  defaultVariants: {
    underline: 'hover',
  },
});

export type LinkVariants = Exclude<
  RecipeVariants<typeof linkVariants>,
  undefined
>;

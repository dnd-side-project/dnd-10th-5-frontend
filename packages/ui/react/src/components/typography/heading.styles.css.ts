import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import {
  color,
  heading,
  textAlign,
  textWrap,
  truncate,
} from '../../styles/utilities';

export const headingVariants = recipe({
  variants: {
    align: textAlign,
    color,
    variant: heading,
    truncate: {
      true: [truncate],
    },
    wrap: textWrap,
  },

  defaultVariants: {
    align: 'left',
    color: 'gray1100',
    truncate: false,
    variant: 'h1Bold',
    wrap: 'nowrap',
  },
});

export type HeadingVariants = Exclude<
  RecipeVariants<typeof headingVariants>,
  undefined
>;

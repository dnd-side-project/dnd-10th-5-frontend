import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { enumStyles } from '../../styles/utils';

const {
  textAlign: align,
  color,
  heading,
  truncate,
  textWrap: wrap,
} = enumStyles;

export const headingVariants = recipe({
  variants: {
    align,
    color,
    variant: heading,
    truncate: {
      true: [truncate],
    },
    wrap,
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

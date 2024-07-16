import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { body, color, textAlign, truncate, wrap } from '../../styles/utilities';

export const textVariants = recipe({
  variants: {
    align: textAlign,
    color,
    variant: body,
    truncate: {
      true: [truncate],
    },
    wrap,
  },

  defaultVariants: {
    align: 'left',
    color: 'gray1100',
    truncate: false,
    variant: 'body2Regular',
    wrap: 'nowrap',
  },
});

export type TextVariants = Exclude<
  RecipeVariants<typeof textVariants>,
  undefined
>;

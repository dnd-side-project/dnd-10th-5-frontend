import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { enumStyles } from '../../styles/utils';

const { textAlign: align, color, body, truncate, textWrap: wrap } = enumStyles;

export const textVariants = recipe({
  variants: {
    align,
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

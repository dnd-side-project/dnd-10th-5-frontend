import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { body, textAlign, truncate, wrap } from '../../styles/utilities';

export const textVariants = recipe({
  variants: {
    align: {
      left: [textAlign.left],
      center: [textAlign.center],
      right: [textAlign.right],
    },
    variant: {
      '1medium': [body.body1Medium],
      '1regular': [body.body1Regular],
      '2medium': [body.body2Medium],
      '2regular': [body.body2Regular],
      '3medium': [body.body3Medium],
      '3regular': [body.body3Regular],
      '4medium': [body.body4Medium],
      '4regular': [body.body4Regular],
    },
    truncate: {
      true: [truncate],
    },
    wrap: {
      wrap: [wrap.wrap],
      nowrap: [wrap.nowrap],
    },
  },

  defaultVariants: {
    align: 'left',
    truncate: false,
    variant: '2regular',
    wrap: 'nowrap',
  },
});

export type TextVariants = Exclude<
  RecipeVariants<typeof textVariants>,
  undefined
>;

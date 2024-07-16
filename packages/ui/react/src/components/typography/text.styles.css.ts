import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { body, color, textAlign, truncate, wrap } from '../../styles/utilities';

export const textVariants = recipe({
  variants: {
    align: {
      left: [textAlign.left],
      center: [textAlign.center],
      right: [textAlign.right],
    },
    color: {
      gray100: [color.gray100],
      gray200: [color.gray200],
      gray300: [color.gray300],
      gray400: [color.gray400],
      gray500: [color.gray500],
      gray600: [color.gray600],
      gray700: [color.gray700],
      gray800: [color.gray800],
      gray900: [color.gray900],
      gray1000: [color.gray1000],
      gray1100: [color.gray1100],
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
    color: 'gray1100',
    truncate: false,
    variant: '2regular',
    wrap: 'nowrap',
  },
});

export type TextVariants = Exclude<
  RecipeVariants<typeof textVariants>,
  undefined
>;

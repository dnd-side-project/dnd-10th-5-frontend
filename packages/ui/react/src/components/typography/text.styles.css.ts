import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import {
  body1Medium,
  body1Regular,
  body2Medium,
  body2Regular,
  body3Medium,
  body3Regular,
  body4Medium,
  body4Regular,
} from '../../styles/text.css';

export const text = recipe({
  variants: {
    scale: {
      '1medium': [body1Medium],
      '1regular': [body1Regular],
      '2medium': [body2Medium],
      '2regular': [body2Regular],
      '3medium': [body3Medium],
      '3regular': [body3Regular],
      '4medium': [body4Medium],
      '4regular': [body4Regular],
    },
  },

  defaultVariants: {
    scale: '2regular',
  },
});

export type TextVariants = RecipeVariants<typeof text>;

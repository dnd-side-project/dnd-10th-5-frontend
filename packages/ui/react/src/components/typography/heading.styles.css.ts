import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import {
  h1Bold,
  h1SemiBold,
  h2Bold,
  h2SemiBold,
  h3Bold,
  h3SemiBold,
  h4Bold,
  h4SemiBold,
  h5Bold,
  h5SemiBold,
  h6Bold,
  h6SemiBold,
} from '../../styles/text.css';

export const heading = recipe({
  variants: {
    weight: {
      h1bold: [h1Bold],
      h1semibold: [h1SemiBold],
      h2bold: [h2Bold],
      h2semibold: [h2SemiBold],
      h3bold: [h3Bold],
      h3semibold: [h3SemiBold],
      h4bold: [h4Bold],
      h4semibold: [h4SemiBold],
      h5bold: [h5Bold],
      h5semibold: [h5SemiBold],
      h6bold: [h6Bold],
      h6semibold: [h6SemiBold],
    },
  },

  defaultVariants: {
    weight: 'h2bold',
  },
});

export type HeadingVariants = RecipeVariants<typeof heading>;

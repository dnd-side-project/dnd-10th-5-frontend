import { styleVariants } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { globalVars, weightHeading } from '../../theme.css';

const as = styleVariants({
  h1: [globalVars.heading.h1],
  h2: [globalVars.heading.h2],
  h3: [globalVars.heading.h3],
  h4: [globalVars.heading.h4],
  h5: [globalVars.heading.h5],
  h6: [globalVars.heading.h6],
});

const weight = styleVariants(weightHeading, (_, weightHeadingKey) => ({
  fontWeight: globalVars.weight.heading[weightHeadingKey],
}));

export const headingVariants = recipe({
  variants: {
    as,
    weight,
  },

  defaultVariants: {
    as: 'h1',
    weight: 'bold',
  },
});

export type HeadingVariants = Exclude<
  RecipeVariants<typeof headingVariants>,
  undefined
>;

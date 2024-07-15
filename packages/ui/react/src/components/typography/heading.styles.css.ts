import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { heading, textAlign, truncate, wrap } from '../../styles/utilities';

export const headingVariants = recipe({
  variants: {
    align: {
      left: [textAlign.left],
      center: [textAlign.center],
      right: [textAlign.right],
    },
    variant: {
      h1bold: [heading.h1Bold],
      h1semibold: [heading.h1Semibold],
      h2bold: [heading.h2Bold],
      h2semibold: [heading.h2Semibold],
      h3bold: [heading.h3Bold],
      h3semibold: [heading.h3Semibold],
      h4bold: [heading.h4Bold],
      h4semibold: [heading.h4Semibold],
      h5bold: [heading.h5Bold],
      h5semibold: [heading.h5Semibold],
      h6bold: [heading.h6Bold],
      h6semibold: [heading.h6Semibold],
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
    variant: 'h1bold',
    wrap: 'nowrap',
  },
});

export type HeadingVariants = Exclude<
  RecipeVariants<typeof headingVariants>,
  undefined
>;

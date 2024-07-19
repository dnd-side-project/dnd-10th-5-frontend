import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { dynamicStyles, dynamicVars, enumStyles } from '../../styles/utils';

const {
  display: { none, flex, inlineFlex },
  alignItems: align,
  justifyContent: justify,
  flexWrap: wrap,
  flexDirection: direction,
} = enumStyles;

export const flexEnumVariants = recipe({
  variants: {
    display: {
      none,
      flex,
      inlineFlex,
    },
    align,
    direction,
    justify,
    wrap,
  },

  defaultVariants: {
    display: 'flex',
  },
});

export type FlexEnumVariants = Exclude<
  RecipeVariants<typeof flexEnumVariants>,
  undefined
>;

const { gapVar, gapXVar, gapYVar } = dynamicVars;

export const flexDynamicVariantVars = {
  gapVar,
  gapXVar,
  gapYVar,
};

const { gap, gapX, gapY } = dynamicStyles;

export const flexDynamicVariants = {
  gap,
  gapX,
  gapY,
};

export type FlexDynamicVariants = Partial<
  Record<keyof typeof flexDynamicVariants, number | string>
>;

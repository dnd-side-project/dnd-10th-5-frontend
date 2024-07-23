import {
  alignItems,
  display,
  flexDirection,
  flexWrap,
  gap,
  gapVar,
  gapX,
  gapXVar,
  gapY,
  gapYVar,
  justifyContent,
} from '@favolink-ui/styles';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';

export const flexEnumVariants = recipe({
  variants: {
    display: {
      none: display.none,
      flex: display.flex,
      inlineFlex: display.inlineFlex,
    },
    align: alignItems,
    direction: flexDirection,
    justify: justifyContent,
    wrap: flexWrap,
  },

  defaultVariants: {
    display: 'flex',
  },
});

export type FlexEnumVariants = Exclude<
  RecipeVariants<typeof flexEnumVariants>,
  undefined
>;

export const flexDynamicVariantVars = {
  gapVar,
  gapXVar,
  gapYVar,
};

export const flexDynamicVariants = {
  gap,
  gapX,
  gapY,
};

export type FlexDynamicVariants = Partial<
  Record<keyof typeof flexDynamicVariants, number | string>
>;

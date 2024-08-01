import { createThemeContract, style } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import {
  alignItems,
  display,
  flexDirection,
  flexWrap,
  justifyContent,
} from '../../styles';

export const dynamicVars = createThemeContract({
  gap: null,
  gapX: null,
  gapY: null,
});

export const gap = style({
  gap: dynamicVars.gap,
});

export const gapX = style({
  columnGap: dynamicVars.gapX,
});

export const gapY = style({
  rowGap: dynamicVars.gapY,
});

export type FlexDynamicVariants = {
  [K in keyof typeof dynamicVars]?: number | string;
};

export const flexEnumVariants = recipe({
  variants: {
    display: {
      none: display.none,
      flex: display.flex,
      inlineFlex: display.inlineFlex,
    },
    direction: flexDirection,
    align: alignItems,
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

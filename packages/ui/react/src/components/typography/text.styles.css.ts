import { styleVariants } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { grayPalette, vars } from '../../styles';
import { enumStyles } from '../../styles/utils';

const { textAlign: align, body, truncate, textWrap: wrap } = enumStyles;

const color = styleVariants(grayPalette, (_, grayPaletteKey) => ({
  color: vars.palette[grayPaletteKey],
}));

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

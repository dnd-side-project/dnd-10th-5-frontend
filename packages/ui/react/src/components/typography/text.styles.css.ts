import { body, textAlign, textWrap, truncate } from '@favolink-ui/styles';
import { styleVariants } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { globalVars, grayPalette } from '../../theme.css';

const color = styleVariants(grayPalette, (_, grayPaletteKey) => ({
  color: globalVars.palette[grayPaletteKey],
}));

export const textVariants = recipe({
  variants: {
    align: textAlign,
    color,
    variant: body,
    truncate: {
      true: [truncate],
    },
    wrap: textWrap,
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

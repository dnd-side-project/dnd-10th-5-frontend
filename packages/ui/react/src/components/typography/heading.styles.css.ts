import { heading, textAlign, textWrap, truncate } from '@favolink-ui/styles';
import { styleVariants } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { globalVars, grayPalette, systemPalette } from '../../theme.css';

const colorPalette = { ...grayPalette, ...systemPalette };

const color = styleVariants(colorPalette, (_, colorPaletteKey) => ({
  color: globalVars.palette[colorPaletteKey],
}));

export const headingVariants = recipe({
  variants: {
    align: textAlign,
    color,
    variant: heading,
    truncate: {
      true: [truncate],
    },
    wrap: textWrap,
  },

  defaultVariants: {
    align: 'left',
    color: 'gray1100',
    truncate: false,
    variant: 'h1Bold',
    wrap: 'nowrap',
  },
});

export type HeadingVariants = Exclude<
  RecipeVariants<typeof headingVariants>,
  undefined
>;

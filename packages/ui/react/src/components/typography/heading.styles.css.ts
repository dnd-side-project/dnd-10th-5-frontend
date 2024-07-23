import { styleVariants } from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { grayPalette, systemPalette, vars } from '../../styles';
import { enumStyles } from '../../styles/utils';

const { textAlign: align, heading, truncate, textWrap: wrap } = enumStyles;

const colorPalette = { ...grayPalette, ...systemPalette };

const color = styleVariants(colorPalette, (_, colorPaletteKey) => ({
  color: vars.palette[colorPaletteKey],
}));

export const headingVariants = recipe({
  variants: {
    align,
    color,
    variant: heading,
    truncate: {
      true: [truncate],
    },
    wrap,
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

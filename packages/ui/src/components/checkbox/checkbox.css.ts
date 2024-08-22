import {
  createGlobalThemeContract,
  createTheme,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { alignItems, display, justifyContent } from '../../styles';
import { globalVars, paletteTokens } from '../../theme.css';

const color = styleVariants(paletteTokens, (_, paletteTokenKey) => ({
  backgroundColor: globalVars.palette[paletteTokenKey],
}));

const borderColor = styleVariants(paletteTokens, (_, paletteTokenKey) => ({
  borderColor: globalVars.palette[paletteTokenKey],
}));

const sizeTokens = {
  '1': '1',
  '2': '2',
  '3': '3',
};

const sizeVars = createGlobalThemeContract(
  sizeTokens,
  (value) => `favolink-checkbox-size-${value}`,
);

const sizeClass = createTheme(sizeVars, {
  '1': '16px',
  '2': '24px',
  '3': '32px',
});

const borderSizeVars = createGlobalThemeContract(
  sizeTokens,
  (value) => `favolink-checkbox-border-size-${value}`,
);

const borderSizeClass = createTheme(borderSizeVars, {
  '1': '1px',
  '2': '1.5px',
  '3': '2px',
});

const size = styleVariants(sizeVars, (_, sizeKey) => ({
  width: sizeVars[sizeKey],
  height: sizeVars[sizeKey],
  borderWidth: calc.multiply(borderSizeVars[sizeKey], 1.75),
  borderRadius: calc.multiply(borderSizeVars[sizeKey], 3),
}));

const base = style([
  sizeClass,
  borderSizeClass,
  display['inline-flex'],
  alignItems.center,
  justifyContent.center,
  {
    boxSizing: 'border-box',
    padding: 0,
    borderStyle: 'solid',

    selectors: {
      '&[data-state="false"]': {
        backgroundColor: 'transparent',
      },
    },
  },
]);

export const checkboxVariants = recipe({
  base,

  variants: {
    color,
    borderColor,
    size,
  },

  defaultVariants: {
    color: 'black',
    borderColor: 'gray700',
    size: '1',
  },
});

export type CheckboxVariants = Exclude<
  RecipeVariants<typeof checkboxVariants>,
  undefined
>;

export const icon = style({
  width: '100%',
  height: '100%',
  color: globalVars.palette.white,
});

import {
  alignItems,
  body,
  borderRadius,
  display,
  flexShrink,
  textWrap,
} from '@favolink-ui/styles';
import {
  createGlobalThemeContract,
  createTheme,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import { archivePaletteTokens, globalVars } from '../../theme.css';

const colorVariantPaletteTokenValues = {
  ...archivePaletteTokens,
  gray: 'gray',
  white: 'white',
};

const colorVariantPaletteTokens = {
  palette: {
    backgroundColor: colorVariantPaletteTokenValues,
    color: colorVariantPaletteTokenValues,
  },
};

const colorVariantVars = createGlobalThemeContract(
  colorVariantPaletteTokens,
  (value, path) => {
    const palette = path[0];
    const kebabCasedKey = path[1]
      ?.replace(/([a-z])([A-Z])/g, '$1 $2')
      .split(' ')
      .map((pathValue) => pathValue.toLowerCase())
      .join('-');

    return `favolink-tag-${palette}-${kebabCasedKey}-${value}`;
  },
);

const colorVariantPalette: typeof colorVariantPaletteTokens = {
  palette: {
    backgroundColor: {
      archiveBlack: '#aaacb615',
      archiveBlue: '#6bafff20',
      archiveBrightGreen: '#b4f78b40',
      archiveCoral: '#f1766615',
      archiveMint: '#6af4ba30',
      archivePink: '#ff8fb820',
      archivePurple: '#9570ff15',
      archiveYellow: '#ffe27940',
      gray: globalVars.palette.gray200,
      white: globalVars.palette.white,
    },
    color: {
      archiveBlack: globalVars.palette.gray700,
      archiveBlue: '#2c84ec',
      archiveBrightGreen: '#5db924',
      archiveCoral: globalVars.palette.archiveCoral,
      archiveMint: '#15c27a',
      archivePink: '#ff4c8c',
      archivePurple: globalVars.palette.archivePurple,
      archiveYellow: '#ff8a35',
      gray: globalVars.palette.gray800,
      white: globalVars.palette.gray800,
    },
  },
};

const colorVariantClass = createTheme(colorVariantVars, colorVariantPalette);

export const colorVariant = styleVariants(
  colorVariantPaletteTokenValues,
  (_, colorVariantPaletteTokenKey) => ({
    backgroundColor:
      colorVariantVars.palette.backgroundColor[colorVariantPaletteTokenKey],
    color: colorVariantVars.palette.color[colorVariantPaletteTokenKey],
    border: `1px solid ${colorVariantVars.palette.backgroundColor[colorVariantPaletteTokenKey]}`,
  }),
);

const base = style([
  colorVariantClass,
  display.inlineFlex,
  alignItems.center,
  flexShrink.none,
  textWrap.nowrap,
  borderRadius.full,
  body.body4Medium,
  {
    padding: '4px 8px',
    height: 'fit-content',
  },
]);

export const tagVariants = recipe({
  base,

  variants: {
    color: colorVariant,
  },

  defaultVariants: {
    color: 'white',
  },

  compoundVariants: [
    {
      variants: {
        color: 'white',
      },
      style: {
        border: `1px solid ${globalVars.palette.gray300}`,
      },
    },
  ],
});

export type TagVariants = Exclude<
  RecipeVariants<typeof tagVariants>,
  undefined
>;

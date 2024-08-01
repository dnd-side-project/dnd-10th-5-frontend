import {
  createGlobalThemeContract,
  createTheme,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { type RecipeVariants, recipe } from '@vanilla-extract/recipes';
import {
  alignItems,
  borderRadius,
  display,
  flexShrink,
  textWrap,
} from '../../styles';
import { archivePaletteTokens, globalVars } from '../../theme.css';

const colorPaletteTokenValues = {
  ...archivePaletteTokens,
  gray: 'gray',
  white: 'white',
};

const colorPaletteTokens = {
  palette: {
    backgroundColor: colorPaletteTokenValues,
    color: colorPaletteTokenValues,
  },
};

const colorVars = createGlobalThemeContract(
  colorPaletteTokens,
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

const colorPalette: typeof colorPaletteTokens = {
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

const colorClass = createTheme(colorVars, colorPalette);

export const color = styleVariants(
  colorPaletteTokenValues,
  (_, colorPaletteTokenKey) => ({
    backgroundColor: colorVars.palette.backgroundColor[colorPaletteTokenKey],
    color: colorVars.palette.color[colorPaletteTokenKey],
    border: `1px solid ${colorVars.palette.backgroundColor[colorPaletteTokenKey]}`,
  }),
);

const base = style([
  colorClass,
  display.inlineFlex,
  alignItems.center,
  flexShrink.none,
  textWrap.nowrap,
  borderRadius.full,
  globalVars.text.text4,
  {
    padding: '4px 8px',
    height: 'fit-content',
    fontWeight: globalVars.weight.text.medium,
  },
]);

export const tagVariants = recipe({
  base,

  variants: {
    color,
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

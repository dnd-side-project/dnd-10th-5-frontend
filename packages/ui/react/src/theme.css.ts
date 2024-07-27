import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';

export const archivePaletteTokens = {
  archiveBlack: 'archive-black',
  archiveBlue: 'archive-blue',
  archiveBrightGreen: 'archive-bright-green',
  archiveCoral: 'archive-coral',
  archiveMint: 'archive-mint',
  archivePink: 'archive-pink',
  archivePurple: 'archive-purple',
  archiveYellow: 'archive-yellow',
};

export const grayPaletteTokens = {
  gray100: 'gray-100',
  gray200: 'gray-200',
  gray300: 'gray-300',
  gray400: 'gray-400',
  gray500: 'gray-500',
  gray600: 'gray-600',
  gray700: 'gray-700',
  gray800: 'gray-800',
  gray900: 'gray-900',
  gray1000: 'gray-1100',
  gray1100: 'gray-1100',
};

export const systemPaletteTokens = {
  system100: 'system-100',
  system200: 'system-200',
  system300: 'system-300',
};

export const inherencePaletteTokens = {
  black: 'black',
  red: 'red',
  gray: 'gray',
  white: 'white',
};

export const themeTokens = {
  palette: {
    ...archivePaletteTokens,
    ...grayPaletteTokens,
    ...systemPaletteTokens,
    ...inherencePaletteTokens,
  },
};

export const globalVars = createGlobalThemeContract(
  themeTokens,
  (value, path) => `favolink-${path[0]}-${value}`,
);

export const archivePalette: typeof archivePaletteTokens = {
  archiveBlack: '#aaacb6',
  archiveBlue: '#6bafff',
  archiveBrightGreen: '#b4f78b',
  archiveCoral: '#f17666',
  archiveMint: '#6af4b4',
  archivePink: '#ff8fb8',
  archivePurple: '#9570ff',
  archiveYellow: '#ffe279',
};

export const grayPalette: typeof grayPaletteTokens = {
  gray100: '#fafbfd',
  gray200: '#f4f6f9',
  gray300: '#edf0f4',
  gray400: '#d4dbe5',
  gray500: '#b5bfce',
  gray600: '#9ea9ba',
  gray700: '#838fa2',
  gray800: '#697588',
  gray900: '#4d5769',
  gray1000: '#303a4b',
  gray1100: '#1d2333',
};

export const systemPalette: typeof systemPaletteTokens = {
  system100: '#ffd7d7',
  system200: '#ff8484',
  system300: '#ff4747',
};

export const inherencePalette: typeof inherencePaletteTokens = {
  black: grayPalette.gray1100,
  red: systemPalette.system300,
  gray: grayPalette.gray300,
  white: '#ffffff',
};

createGlobalTheme(':root', globalVars, {
  palette: {
    ...archivePalette,
    ...grayPalette,
    ...systemPalette,
    ...inherencePalette,
  },
});

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

export const paletteTokens = {
  ...archivePaletteTokens,
  ...grayPaletteTokens,
  ...systemPaletteTokens,
  ...inherencePaletteTokens,
};

export const weightHeadingTokens = {
  semibold: 'semibold',
  bold: 'bold',
};

export const weightTextTokens = {
  regular: 'regular',
  medium: 'medium',
};

export const weightTokens = {
  heading: weightHeadingTokens,
  text: weightTextTokens,
};

export const headingTokens = {
  h1: {
    fontSize: 'font-size',
    lineHeight: 'line-height',
  },
  h2: {
    fontSize: 'font-size',
    lineHeight: 'line-height',
  },
  h3: {
    fontSize: 'font-size',
    lineHeight: 'line-height',
  },
  h4: {
    fontSize: 'font-size',
    lineHeight: 'line-height',
  },
  h5: {
    fontSize: 'font-size',
    lineHeight: 'line-height',
  },
  h6: {
    fontSize: 'font-size',
    lineHeight: 'line-height',
  },
};

export const textTokens = {
  text1: {
    fontSize: 'font-size',
    lineHeight: 'line-height',
  },
  text2: {
    fontSize: 'font-size',
    lineHeight: 'line-height',
  },
  text3: {
    fontSize: 'font-size',
    lineHeight: 'line-height',
  },
  text4: {
    fontSize: 'font-size',
    lineHeight: 'line-height',
  },
};

export const themeTokens = {
  palette: paletteTokens,
  heading: headingTokens,
  text: textTokens,
  weight: weightTokens,
};

export const globalVars = createGlobalThemeContract(
  themeTokens,
  (value, path) => `favolink-${path.slice(0, -1).join('-')}-${value}`,
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

export const palette = {
  ...archivePalette,
  ...grayPalette,
  ...systemPalette,
  ...inherencePalette,
};

export const weightHeading: typeof weightHeadingTokens = {
  semibold: '600',
  bold: '700',
};

export const weightText: typeof weightTextTokens = {
  regular: '400',
  medium: '500',
};

export const weight: typeof weightTokens = {
  heading: weightHeading,
  text: weightText,
};

export const heading: typeof headingTokens = {
  h1: {
    fontSize: '28px',
    lineHeight: '39px',
  },
  h2: {
    fontSize: '24px',
    lineHeight: '34px',
  },
  h3: {
    fontSize: '20px',
    lineHeight: '28px',
  },
  h4: {
    fontSize: '18px',
    lineHeight: '25px',
  },
  h5: {
    fontSize: '16px',
    lineHeight: '22px',
  },
  h6: {
    fontSize: '14px',
    lineHeight: '20px',
  },
};

export const text: typeof textTokens = {
  text1: {
    fontSize: '18px',
    lineHeight: '25px',
  },
  text2: {
    fontSize: '16px',
    lineHeight: '22px',
  },
  text3: {
    fontSize: '14px',
    lineHeight: '20px',
  },
  text4: {
    fontSize: '12px',
    lineHeight: '17px',
  },
};

createGlobalTheme(':root', globalVars, {
  palette,
  heading,
  text,
  weight,
});

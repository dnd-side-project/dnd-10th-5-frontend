import { createGlobalTheme } from '@vanilla-extract/css';

export const archivePalette = {
  archiveBlack: '#aaacb6',
  archiveBlue: '#6bafff',
  archiveBrightGreen: '#b4f78b',
  archiveCoral: '#f17666',
  archiveMint: '#6af4b4',
  archivePink: '#ff8fb8',
  archivePurple: '#9570ff',
  archiveYellow: '#ffe279',
} as const;

export const grayPalette = {
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
} as const;

export const systemPalette = {
  system100: '#ffd7d7',
  system200: '#ff8484',
  system300: '#ff4747',
} as const;

export const inherencePalette = {
  black: grayPalette.gray1100,
  red: systemPalette.system300,
  gray: grayPalette.gray300,
  white: '#ffffff',
} as const;

export const palette = {
  ...archivePalette,
  ...grayPalette,
  ...systemPalette,
  ...inherencePalette,
} as const;

export const vars = createGlobalTheme(':root', {
  palette,
});

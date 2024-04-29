import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';

export const archiveColor = {
  black: '#aaacb6',
  blue: '#9570ff',
  brightGreen: '#b4f78b',
  coral: '#f17666',
  mint: '#6af4b4',
  pink: '#ff8fb8',
  purple: '#9570ff',
  yellow: '#ffe279',
};

export type ArchiveColor = keyof typeof archiveColor;

export const grayColor = {
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

export type GrayColor = keyof typeof grayColor;

export const systemColor = {
  system100: '#ffd7d7',
  system200: '#ff8484',
  system300: '#ff4747',
};

export type SystemColor = keyof typeof systemColor;

const color = {
  ...archiveColor,
  ...grayColor,
  ...systemColor,
};

export const vars = createGlobalThemeContract({
  color: {
    black: 'color-archive-black',
    blue: 'color-archive-blue',
    brightGreen: 'color-archive-bright-green',
    coral: 'color-archive-coral',
    yellow: 'color-archive-yellow',
    mint: 'color-archive-mint',
    pink: 'color-archive-pink',
    purple: 'color-archive-purple',
    gray100: 'color-gray-100',
    gray200: 'color-gray-200',
    gray300: 'color-gray-300',
    gray400: 'color-gray-400',
    gray500: 'color-gray-500',
    gray600: 'color-gray-600',
    gray700: 'color-gray-700',
    gray800: 'color-gray-800',
    gray900: 'color-gray-900',
    gray1000: 'color-gray-1000',
    gray1100: 'color-gray-1100',
    system100: 'color-system-100',
    system200: 'color-system-200',
    system300: 'color-system-300',
  },
});

createGlobalTheme(':root', vars, {
  color,
});

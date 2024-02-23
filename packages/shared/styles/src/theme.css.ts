import {
  createGlobalTheme,
  createGlobalThemeContract,
} from '@vanilla-extract/css';

const archiveColor = {
  archiveBlack: '#aaacb6',
  archiveBlue: '#9570ff',
  archiveBrightGreen: '#b4f78b',
  archiveCoral: '#f17666',
  archiveYellow: '#ffe279',
  archiveMint: '#6af4b4',
  archivePink: '#ff8fb8',
  archivePurple: '#9570ff',
};

const grayColor = {
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

const systemColor = {
  system100: '#ffd7d7',
  system200: '#ff8484',
  system300: '#ff4747',
};

const color = { ...archiveColor, ...grayColor, ...systemColor };

export const vars = createGlobalThemeContract({
  color: {
    archiveBlack: 'color-archive-black',
    archiveBlue: 'color-archive-blue',
    archiveBrightGreen: 'color-archive-bright-green',
    archiveCoral: 'color-archive-coral',
    archiveYellow: 'color-archive-yellow',
    archiveMint: 'color-archive-mint',
    archivePink: 'color-archive-pink',
    archivePurple: 'color-archive-purple',
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

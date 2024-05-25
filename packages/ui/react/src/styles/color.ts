export const ARCHIVE_COLOR = {
  black: '#aaacb6',
  blue: '#9570ff',
  brightGreen: '#b4f78b',
  coral: '#f17666',
  mint: '#6af4b4',
  pink: '#ff8fb8',
  purple: '#9570ff',
  yellow: '#ffe279',
} as const;

export const GRAY_COLOR = {
  100: '#fafbfd',
  200: '#f4f6f9',
  300: '#edf0f4',
  400: '#d4dbe5',
  500: '#b5bfce',
  600: '#9ea9ba',
  700: '#838fa2',
  800: '#697588',
  900: '#4d5769',
  1000: '#303a4b',
  1100: '#1d2333',
} as const;

export const SYSTEM_COLOR = {
  100: '#ffd7d7',
  200: '#ff8484',
  300: '#ff4747',
} as const;

export const REPO_TEXT_COLOR = {
  black: GRAY_COLOR[700],
  blue: '#2c84ec',
  brightGreen: '#5db924',
  coral: ARCHIVE_COLOR.coral,
  mint: '#15c27a',
  pink: '#ff4cbc',
  purple: ARCHIVE_COLOR.purple,
  yellow: '#ff8a35',
} as const;

export const REPO_BG_COLOR = {
  black: '#aaacb615',
  blue: '#6bafff20',
  brightGreen: '#b4f78b40',
  coral: '#f1766615',
  mint: '#6af4ba30',
  pink: '#ff8fb820',
  purple: '#9570ff15',
  yellow: '#ffe27940',
} as const;

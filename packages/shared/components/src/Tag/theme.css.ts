import { vars as globalVars } from '@favolink/styles/theme.css';
import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  normal: {
    black: null,
    blue: null,
    brightGreen: null,
    coral: null,
    mint: null,
    pink: null,
    purple: null,
    yellow: null,
  },
  light: {
    black: null,
    blue: null,
    brightGreen: null,
    coral: null,
    mint: null,
    pink: null,
    purple: null,
    yellow: null,
  },
});

export type Color = keyof typeof vars.normal;

export const color = createTheme(vars, {
  normal: {
    black: globalVars.color.gray700,
    blue: '#2c84ec',
    brightGreen: '#5db924',
    coral: globalVars.color.coral,
    mint: '#15c27a',
    pink: '#ff4cbc',
    purple: globalVars.color.purple,
    yellow: '#ff8a35',
  },
  light: {
    black: '#aaacb615',
    blue: '#6bafff20',
    brightGreen: '#b4f78b40',
    coral: '#f1766615',
    mint: '#6af4ba30',
    pink: '#ff8fb820',
    purple: '#9570ff15',
    yellow: '#ffe27940',
  },
});

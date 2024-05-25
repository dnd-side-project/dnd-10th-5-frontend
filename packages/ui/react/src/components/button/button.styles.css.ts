import { style, styleVariants } from '@vanilla-extract/css';
import { h5Bold, h6SemiBold } from '../../styles/text.css';
import { vars } from '../../styles/vars.css';

export const buttonBase = style({
  borderRadius: 8,
  cursor: 'pointer',
});

export const buttonSize = styleVariants({
  small: [h6SemiBold, { minWidth: 100, minHeight: 30 }],
  medium: [h6SemiBold, { minWidth: 202, minHeight: 40 }],
  large: [h5Bold, { minWidth: 332, minHeight: 44 }],
});

export type ButtonSize = keyof typeof buttonSize;

export const buttonColorScheme = styleVariants({
  gray: {
    backgroundColor: vars.color.gray[400],
    border: `1px solid ${vars.color.gray[400]}`,
    color: vars.color.gray[200],
  },
  black: {
    backgroundColor: vars.color.gray[1000],
    border: `1px solid ${vars.color.gray[1000]}`,
    color: 'white',
  },
  white: {
    backgroundColor: 'white',
    border: `1px solid ${vars.color.gray[300]}`,
    color: vars.color.gray[900],
  },
  red: {
    backgroundColor: vars.color.system[300],
    border: `1px solid ${vars.color.system[300]}`,
    color: 'white',
  },
});

export type ButtonColorScheme = keyof typeof buttonColorScheme;

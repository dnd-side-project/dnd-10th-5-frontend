import { body3Medium, body4Medium } from '@favolink/styles/text.css';
import { vars } from '@favolink/styles/theme.css';
import {
  type ComplexStyleRule,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { type Color as TagColor, vars as tagVars } from './theme.css';

const border = style({
  borderRadius: 100,
});

const layout = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
});

export const base = style([border, layout]);

export const size = styleVariants({
  small: [body4Medium, { padding: '4px 8px' }],
  medium: [body3Medium, { padding: '8px 14px' }],
});

export type Size = keyof typeof size;

export const colorScheme = styleVariants({
  black: createColorScheme('black'),
  blue: createColorScheme('blue'),
  brightGreen: createColorScheme('brightGreen'),
  coral: createColorScheme('coral'),
  mint: createColorScheme('mint'),
  pink: createColorScheme('pink'),
  purple: createColorScheme('purple'),
  yellow: createColorScheme('yellow'),
  white: {
    ...createColorScheme('black'),
    backgroundColor: 'white',
    border: `1px solid ${vars.color.gray300}`,
  },
});

export type ColorScheme = keyof typeof colorScheme;

const labelbase = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const label = styleVariants({
  small: [labelbase, { minWidth: 14, minHeight: 14 }],
  medium: [labelbase, { minWidth: 18, minHeight: 18 }],
});

export type Text = keyof typeof label;

export const labelAsIcon = style({
  color: vars.color.gray400,
});

function createColorScheme(color: TagColor): ComplexStyleRule {
  return {
    color: tagVars.normal[color],
    backgroundColor: tagVars.light[color],
  };
}

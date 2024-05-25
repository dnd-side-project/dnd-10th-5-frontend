import {
  type ComplexStyleRule,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { type TagColor, tagVars } from './tag.theme.css';
import { body3Medium, body4Medium } from '../../styles/text.css';
import { vars } from '../../styles/vars.css';

export const tagBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 10,
  borderRadius: 100,
});

export const tagSize = styleVariants({
  small: [body4Medium, { padding: '4px 8px' }],
  medium: [body3Medium, { padding: '8px 14px' }],
});

export type TagSize = keyof typeof tagSize;

export const tagColorScheme = styleVariants({
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
    border: `1px solid ${vars.color.gray[300]}`,
  },
});

export type TagColorScheme = keyof typeof tagColorScheme;

function createColorScheme(color: TagColor): ComplexStyleRule {
  return {
    color: tagVars.normal[color],
    backgroundColor: tagVars.light[color],
    border: `1px solid ${tagVars.light[color]}`,
  };
}

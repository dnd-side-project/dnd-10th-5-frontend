import {
  type ComplexStyleRule,
  style,
  styleVariants,
} from '@vanilla-extract/css';
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
  black: createTagColorScheme('black'),
  blue: createTagColorScheme('blue'),
  brightGreen: createTagColorScheme('brightGreen'),
  coral: createTagColorScheme('coral'),
  mint: createTagColorScheme('mint'),
  pink: createTagColorScheme('pink'),
  purple: createTagColorScheme('purple'),
  yellow: createTagColorScheme('yellow'),
  white: {
    ...createTagColorScheme('black'),
    backgroundColor: 'white',
    border: `1px solid ${vars.color.gray[300]}`,
  },
});

export type TagColorScheme = keyof typeof tagColorScheme;

function createTagColorScheme(
  color: keyof typeof vars.color.repo.bg,
): ComplexStyleRule {
  return {
    color: vars.color.repo.text[color],
    backgroundColor: vars.color.repo.bg[color],
    border: `1px solid ${vars.color.repo.bg[color]}`,
  };
}

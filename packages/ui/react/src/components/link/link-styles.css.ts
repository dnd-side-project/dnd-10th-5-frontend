import { style, styleVariants } from '@vanilla-extract/css';
import { body3Medium } from '../../styles/text.css';
import { vars } from '../../styles/theme.css';

export const linkBase = style([
  body3Medium,
  {
    cursor: 'pointer',
    textDecoration: 'none',

    selectors: {
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
]);

export const linkColor = styleVariants({
  white: { color: 'white' },
  gray: { color: vars.color.gray400 },
  black: { color: 'black' },
});

export type LinkColor = keyof typeof linkColor;

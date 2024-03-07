import { body3Medium } from '@favolink/styles/text.css';
import { vars } from '@favolink/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const base = style([
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

export const color = styleVariants({
  white: { color: 'white' },
  gray: { color: vars.color.gray400 },
  black: { color: 'black' },
});

export type Color = keyof typeof color;

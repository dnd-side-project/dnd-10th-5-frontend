import { h1SemiBold } from '@favolink/styles/text.css';
import { vars } from '@favolink/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const header = style([
  h1SemiBold,
  {
    color: vars.color.coral,
    backgroundColor: vars.color.yellow,
  },
]);

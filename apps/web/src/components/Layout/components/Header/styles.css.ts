import { h1SemiBold } from '@favolink-ui/react/text.css';
import { vars } from '@favolink-ui/react/theme.css';
import { style } from '@vanilla-extract/css';

export const header = style([
  h1SemiBold,
  {
    color: vars.color.coral,
    backgroundColor: vars.color.yellow,
  },
]);

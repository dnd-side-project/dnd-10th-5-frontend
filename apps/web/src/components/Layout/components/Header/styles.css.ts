import { h1SemiBold } from '@favolink-ui/react/text.css';
import { vars } from '@favolink-ui/react/vars.css';
import { style } from '@vanilla-extract/css';

export const header = style([
  h1SemiBold,
  {
    color: vars.color.archive.coral,
    backgroundColor: vars.color.archive.yellow,
  },
]);

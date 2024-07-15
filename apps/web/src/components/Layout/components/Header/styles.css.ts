import { heading } from '@favolink-ui/react/heading.css';
import { vars } from '@favolink-ui/react/vars.css';
import { style } from '@vanilla-extract/css';

export const header = style([
  heading.h1Semibold,
  {
    color: vars.color.archive.coral,
    backgroundColor: vars.color.archive.yellow,
  },
]);

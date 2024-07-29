import { style } from '@vanilla-extract/css';
import { textWrap } from './text-wrap.css';

export const truncate = style([
  textWrap.nowrap,
  {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
]);

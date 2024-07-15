import { style } from '@vanilla-extract/css';
import { wrap } from './wrap.css';

export const truncate = style([
  wrap.nowrap,
  {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
]);

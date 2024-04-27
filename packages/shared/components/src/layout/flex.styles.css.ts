import { flexStyleVars } from '@favolink/styles';
import { style } from '@vanilla-extract/css';

export const flexBase = style({
  display: 'flex',
  ...flexStyleVars,
});

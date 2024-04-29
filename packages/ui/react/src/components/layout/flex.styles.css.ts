import { style } from '@vanilla-extract/css';
import { flexStyleVars } from '../../styles';

export const flexBase = style({
  display: 'flex',
  ...flexStyleVars,
});

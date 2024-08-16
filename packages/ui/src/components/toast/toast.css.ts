import { style } from '@vanilla-extract/css';
import { globalVars } from '../../theme.css';

export const toastItem = style({
  backgroundColor: globalVars.palette.gray800,
  borderRadius: 20,
});

export const toastItemText = style({
  color: 'white',
});

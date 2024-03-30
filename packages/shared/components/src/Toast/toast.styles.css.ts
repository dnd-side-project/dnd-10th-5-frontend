import { vars } from '@favolink/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const toastItem = style({
  width: '100%',
  backgroundColor: vars.color.gray800,
  borderRadius: 20,
  padding: '15px 28px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const toastItemText = style({
  color: 'white',
});
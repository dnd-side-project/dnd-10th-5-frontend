import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const toastItemBase = style({
  width: '100%',
  backgroundColor: vars.color.gray800,
  borderRadius: 20,
  padding: '15px 28px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const toastItemTextBase = style({
  color: 'white',
});

import { vars } from '@favolink-ui/styles';
import { style } from '@vanilla-extract/css';

export const toastItemBase = style({
  width: '100%',
  backgroundColor: vars.palette.gray800,
  borderRadius: 20,
  padding: '15px 28px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const toastItemTextBase = style({
  color: 'white',
});

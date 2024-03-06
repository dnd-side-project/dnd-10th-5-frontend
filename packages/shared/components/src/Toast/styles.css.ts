import { vars } from '@favolink/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'fixed',
  width: 780,
  bottom: 10,
  left: 0,
  right: 0,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

export const item = style({
  width: '100%',
  backgroundColor: vars.color.gray800,
  borderRadius: 20,
  padding: '15px 28px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const text = style({
  color: 'white',
});

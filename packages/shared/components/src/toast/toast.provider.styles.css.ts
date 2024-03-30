import { style } from '@vanilla-extract/css';

export const toastContainer = style({
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

import { style } from '@vanilla-extract/css';

export const contentBase = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  minWidth: 138,
  boxShadow: '0 8px 20px 0 rgba(0, 0, 0, 0.25)',
  borderRadius: 12,
  padding: 16,
  background: 'white',
});

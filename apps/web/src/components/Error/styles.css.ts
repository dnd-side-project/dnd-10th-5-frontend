import { style } from '@vanilla-extract/css';

export const container = style({
  height: '100vh',
});

export const h1 = style({
  fontWeight: 'bold',
  fontSize: 28,
  lineHeight: '39px',
});

export const normalFont = style({
  color: 'black',
  fontSize: 'medium',
});

export const center = style([
  container,
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
]);

export const baseButton = style({
  padding: '0.5rem',
  outline: 'none',
  border: 'unset',
  borderRadius: 10,
  backgroundColor: 'lightgray',
});

export const title = style([
  h1,
  {
    color: 'black',
  },
]);

export const button = style([baseButton, normalFont]);

export const description = style([normalFont]);

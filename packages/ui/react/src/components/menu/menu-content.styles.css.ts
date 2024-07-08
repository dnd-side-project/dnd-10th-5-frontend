import { style, styleVariants } from '@vanilla-extract/css';

export const baseList = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  minWidth: 138,
  boxShadow: '0 8px 20px 0 rgba(0, 0, 0, 0.25)',
  borderRadius: 12,
  padding: 16,
  background: 'white',
});

export const listContainerisVisibility = styleVariants({
  true: { visibility: 'visible', pointerEvents: 'auto' },
  false: { visibility: 'hidden', pointerEvents: 'none' },
});

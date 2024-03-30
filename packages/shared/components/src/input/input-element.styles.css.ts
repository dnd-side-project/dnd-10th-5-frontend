import { style, styleVariants } from '@vanilla-extract/css';

export const inputElementBase = style({
  width: 42,
  position: 'absolute',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const inputElementDirection = styleVariants({
  right: [inputElementBase, { top: 0, right: 0 }],
  left: [inputElementBase, { top: 0, left: 0 }],
});

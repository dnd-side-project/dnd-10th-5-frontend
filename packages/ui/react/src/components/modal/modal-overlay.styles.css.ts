import { style, styleVariants } from '@vanilla-extract/css';

export const modalOverlayBase = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const modalOverlayVariant = styleVariants({
  original: { backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 96 },
  withContent: { zIndex: 97 },
});

export type ModalOverlayVariant = keyof typeof modalOverlayVariant;

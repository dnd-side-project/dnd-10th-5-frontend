import { style, styleVariants } from '@vanilla-extract/css';

const modalOverlayBase = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const modalOverlay = styleVariants({
  original: [
    modalOverlayBase,
    { backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 96 },
  ],
  withContent: [modalOverlayBase, { zIndex: 97 }],
});

export type ModalOverlayVariant = keyof typeof modalOverlay;

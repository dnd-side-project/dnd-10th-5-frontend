import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '../../styles/vars.css';

export const modalTitleBase = style({
  display: 'flex',
  color: vars.color.gray[1000],
});

export const modalTitleContainerLayout = styleVariants({
  left: { justifyContent: 'flex-start' },
  center: { justifyContent: 'center' },
  right: { justifyContent: 'flex-end' },
});

export type ModalTitleContainerLayout = keyof typeof modalTitleContainerLayout;

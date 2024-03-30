import { vars } from '@favolink/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const modalTitle = style({ color: vars.color.gray1000 });

export const modalTitlelayout = styleVariants({
  left: { display: 'flex', justifyContent: 'flex-start' },
  center: { display: 'flex', justifyContent: 'center' },
  right: { display: 'flex', justifyContent: 'flex-end' },
});

export type ModalTitleLayout = keyof typeof modalTitlelayout;

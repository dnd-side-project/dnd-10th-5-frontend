import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/vars.css';

export const modalContentBase = style({
  display: 'flex',
  gap: 16,
  position: 'relative',
  zIndex: 98,
  flexDirection: 'column',
  padding: 24,
  minWidth: 300,
  backgroundColor: vars.color.gray[200],
  borderRadius: 20,
});

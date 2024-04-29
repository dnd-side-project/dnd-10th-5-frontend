import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/theme.css';

export const modalContentBase = style({
  display: 'flex',
  gap: 16,
  position: 'relative',
  zIndex: 98,
  flexDirection: 'column',
  padding: 24,
  minWidth: 300,
  backgroundColor: vars.color.gray200,
  borderRadius: 20,
});

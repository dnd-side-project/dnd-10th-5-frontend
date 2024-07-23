import { style } from '@vanilla-extract/css';
import { vars } from '../../styles';

export const modalContentBase = style({
  display: 'flex',
  gap: 16,
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  flexDirection: 'column',
  padding: '20px 24px',
  maxWidth: 'max-content',
  backgroundColor: vars.palette.gray200,
  borderRadius: 20,
});

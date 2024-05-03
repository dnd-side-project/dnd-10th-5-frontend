import { style } from '@vanilla-extract/css';
import { flexStyleVars } from '../../styles';

export const cardFooterBase = style({
  padding: 16,
  display: 'flex',
  justifyContent: flexStyleVars.justifyContent,
});

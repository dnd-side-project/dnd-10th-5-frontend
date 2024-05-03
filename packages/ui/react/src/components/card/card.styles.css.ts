import { style } from '@vanilla-extract/css';
import { flexStyleVars } from '../../styles';

export const cardBase = style({
  minWidth: 0,
  maxWidth: 310,
  borderRadius: 12,
  position: 'relative',
  display: 'flex',
  justifyContent: flexStyleVars.justifyContent,
  alignItems: flexStyleVars.alignItems,
  flexDirection: flexStyleVars.flexDirection,
  boxShadow:
    '0 1px 10px 0 rgba(211, 214, 224, 0.25), 0 1px 10px 0 rgba(211, 214, 224, 0.25)',
});

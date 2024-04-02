import { style } from '@vanilla-extract/css';
import * as modalContentStyles from '../modal/modal-content.styles.css';

export const portalBase = style({
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',

  selectors: {
    [`&:has(> ${modalContentStyles.modalContentBase})`]: {
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});

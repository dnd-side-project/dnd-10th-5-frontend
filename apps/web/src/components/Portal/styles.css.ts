import { style } from '@vanilla-extract/css';
import * as modalStyles from '../Modal/styles.css';

export const portal = style({
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',

  selectors: {
    [`&:has(> ${modalStyles.content})`]: {
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});

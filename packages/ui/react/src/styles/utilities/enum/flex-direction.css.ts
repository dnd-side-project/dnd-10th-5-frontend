import { styleVariants } from '@vanilla-extract/css';

export const flexDirection = styleVariants({
  row: { flexDirection: 'row' },
  column: { flexDirection: 'column' },
  rowReverse: { flexDirection: 'row-reverse' },
  columnReverse: { flexDirection: 'column-reverse' },
});

import { styleVariants } from '@vanilla-extract/css';
import { letterSpacing } from './letter-spacing.css';

const weight = styleVariants({
  semibold: { fontWeight: 600 },
  bold: { fontWeight: 700 },
});

const rowHeading = styleVariants({
  h1: [letterSpacing, { fontSize: 28, lineHeight: '39px' }],
  h2: [letterSpacing, { fontSize: 24, lineHeight: '34px' }],
  h3: [letterSpacing, { fontSize: 20, lineHeight: '28px' }],
  h4: [letterSpacing, { fontSize: 18, lineHeight: '25px' }],
  h5: [letterSpacing, { fontSize: 16, lineHeight: '22px' }],
  h6: [letterSpacing, { fontSize: 14, lineHeight: '20px' }],
});

export const heading = styleVariants({
  h1Semibold: [rowHeading.h1, weight.semibold],
  h1Bold: [rowHeading.h1, weight.bold],
  h2Semibold: [rowHeading.h2, weight.semibold],
  h2Bold: [rowHeading.h2, weight.bold],
  h3Semibold: [rowHeading.h3, weight.semibold],
  h3Bold: [rowHeading.h3, weight.bold],
  h4Semibold: [rowHeading.h4, weight.semibold],
  h4Bold: [rowHeading.h4, weight.bold],
  h5Semibold: [rowHeading.h5, weight.semibold],
  h5Bold: [rowHeading.h5, weight.bold],
  h6Semibold: [rowHeading.h6, weight.semibold],
  h6Bold: [rowHeading.h6, weight.bold],
});

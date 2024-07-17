import { styleVariants } from '@vanilla-extract/css';
import { letterSpacing } from './letter-spacing.css';

const weight = styleVariants({
  regular: { fontWeight: 400 },
  medium: { fontWeight: 500 },
});

const rowBody = styleVariants({
  body1: [letterSpacing, { fontSize: 18, lineHeight: '25px' }],
  body2: [letterSpacing, { fontSize: 16, lineHeight: '22px' }],
  body3: [letterSpacing, { fontSize: 14, lineHeight: '20px' }],
  body4: [letterSpacing, { fontSize: 12, lineHeight: '17px' }],
});

export const body = styleVariants({
  body1Regular: [rowBody.body1, weight.regular],
  body1Medium: [rowBody.body1, weight.medium],
  body2Regular: [rowBody.body2, weight.regular],
  body2Medium: [rowBody.body2, weight.medium],
  body3Regular: [rowBody.body3, weight.regular],
  body3Medium: [rowBody.body3, weight.medium],
  body4Regular: [rowBody.body4, weight.regular],
  body4Medium: [rowBody.body4, weight.medium],
});

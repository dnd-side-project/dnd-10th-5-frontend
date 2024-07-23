import { type CSSProperties, styleVariants } from '@vanilla-extract/css';
import { makeStyleVariantsData } from '../../make-style-variants-data';

const overflowValues = [
  'visible',
  'hidden',
  'clip',
  'scroll',
  'auto',
] satisfies CSSProperties['overflow'];

const overflowData = makeStyleVariantsData(overflowValues);

export const overflow = styleVariants(overflowData, (overflowValue) => ({
  overflow: overflowValue,
}));

export const overflowX = styleVariants(overflowData, (overflowValue) => ({
  overflowX: overflowValue,
}));

export const overflowY = styleVariants(overflowData, (overflowValue) => ({
  overflowY: overflowValue,
}));

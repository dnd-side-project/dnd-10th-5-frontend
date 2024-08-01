import { type CSSProperties, styleVariants } from '@vanilla-extract/css';
import { makeData } from '../make-data';
import { mapToProp } from '../map-to-prop';

const overflowValues = [
  'visible',
  'hidden',
  'clip',
  'scroll',
  'auto',
] satisfies CSSProperties['overflow'];

const overflowData = makeData(overflowValues);

export const overflow = styleVariants(overflowData, mapToProp('overflow'));

export const overflowX = styleVariants(overflowData, mapToProp('overflowX'));

export const overflowY = styleVariants(overflowData, mapToProp('overflowY'));

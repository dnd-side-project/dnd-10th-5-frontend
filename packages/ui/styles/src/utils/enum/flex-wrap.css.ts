import { type CSSProperties, styleVariants } from '@vanilla-extract/css';
import { makeData } from '../../make-data';
import { mapToProp } from '../../map-to-prop';

const flexWrapValues = [
  'nowrap',
  'wrap',
  'wrap-reverse',
] satisfies CSSProperties['flexWrap'];

const flexWrapData = makeData(flexWrapValues);

export const flexWrap = styleVariants(flexWrapData, mapToProp('flexWrap'));

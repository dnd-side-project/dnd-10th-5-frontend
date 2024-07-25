import { type CSSProperties, styleVariants } from '@vanilla-extract/css';
import { makeData } from '../../make-data';
import { mapToProp } from '../../map-to-prop';

const positionValues = [
  'static',
  'relative',
  'absolute',
  'fixed',
  'sticky',
] satisfies CSSProperties['position'];

const positionData = makeData(positionValues);

export const position = styleVariants(positionData, mapToProp('position'));

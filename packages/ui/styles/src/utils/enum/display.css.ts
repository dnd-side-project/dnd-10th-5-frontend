import { type CSSProperties, styleVariants } from '@vanilla-extract/css';
import { makeData } from '../../make-data';
import { mapToProp } from '../../map-to-prop';

const displayValues = [
  'block',
  'inline',
  'inline-block',
  'flex',
  'inline-flex',
  'grid',
  'inline-grid',
  'none',
] satisfies CSSProperties['display'];

const displayData = makeData(displayValues);

export const display = styleVariants(displayData, mapToProp('display'));

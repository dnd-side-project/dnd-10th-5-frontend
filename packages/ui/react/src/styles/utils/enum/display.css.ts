import { type CSSProperties, styleVariants } from '@vanilla-extract/css';
import { makeStyleVariantsData } from '../../make-style-variants-data';

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

const displayData = makeStyleVariantsData(displayValues);

export const display = styleVariants(displayData, (displayDataValue) => ({
  display: displayDataValue,
}));

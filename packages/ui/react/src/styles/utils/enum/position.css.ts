import { type CSSProperties, styleVariants } from '@vanilla-extract/css';
import { makeStyleVariantsData } from '../../make-style-variants-data';

const positionValues = [
  'static',
  'relative',
  'absolute',
  'fixed',
  'sticky',
] satisfies CSSProperties['position'];

const positionData = makeStyleVariantsData(positionValues);

export const position = styleVariants(positionData, (positionValue) => ({
  position: positionValue,
}));

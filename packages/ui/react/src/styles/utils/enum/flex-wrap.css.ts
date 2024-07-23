import { type CSSProperties, styleVariants } from '@vanilla-extract/css';
import { makeStyleVariantsData } from '../../make-style-variants-data';

const flexWrapValues = [
  'nowrap',
  'wrap',
  'wrap-reverse',
] satisfies CSSProperties['flexWrap'];

const flexWrapData = makeStyleVariantsData(flexWrapValues);

export const flexWrap = styleVariants(flexWrapData, (flexWrapValue) => ({
  flexWrap: flexWrapValue,
}));

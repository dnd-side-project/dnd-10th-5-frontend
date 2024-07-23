import { type CSSProperties, styleVariants } from '@vanilla-extract/css';
import { makeStyleVariantsData } from '../../make-style-variants-data';

const textWrapValues = [
  'normal',
  'nowrap',
] satisfies CSSProperties['whiteSpace'];

const textWrapData = makeStyleVariantsData(textWrapValues);

export const textWrap = styleVariants(textWrapData, (textWrapValue) => ({
  whiteSpace: textWrapValue,
}));

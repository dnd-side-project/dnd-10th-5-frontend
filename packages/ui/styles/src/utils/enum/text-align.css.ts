import { type CSSProperties, styleVariants } from '@vanilla-extract/css';
import { makeStyleVariantsData } from '../../make-style-variants-data';

const textAlignValues = [
  'left',
  'center',
  'right',
] satisfies CSSProperties['textAlign'];

const textAlignData = makeStyleVariantsData(textAlignValues);

export const textAlign = styleVariants(textAlignData, (textAlignValue) => ({
  textAlign: textAlignValue,
}));

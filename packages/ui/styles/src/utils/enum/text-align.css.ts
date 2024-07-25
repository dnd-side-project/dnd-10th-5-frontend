import { type CSSProperties, styleVariants } from '@vanilla-extract/css';
import { makeData } from '../../make-data';
import { mapToProp } from '../../map-to-prop';

const textAlignValues = [
  'left',
  'center',
  'right',
] satisfies CSSProperties['textAlign'];

const textAlignData = makeData(textAlignValues);

export const textAlign = styleVariants(textAlignData, mapToProp('textAlign'));
